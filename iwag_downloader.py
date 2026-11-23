#!/usr/bin/env python3
"""IWAG RTD V2 asset downloader and attribution manifest generator.

Reads existing Firecrawl discovery reports; it does not crawl again.
Only downloads first-party assets explicitly marked approved in
IWAG-COLLECTION/approved/asset-licenses.csv.
"""

import csv
import hashlib
import mimetypes
import os
from pathlib import Path
from urllib.parse import unquote, urlsplit

import requests
from dotenv import load_dotenv

load_dotenv()

BASE_URL = os.getenv("IWAG_BASE_URL", "https://iwag.furries.id")
BASE = urlsplit(BASE_URL)
ALLOWED_HOST = (BASE.hostname or "").lower()

ROOT = Path("IWAG-COLLECTION")
REPORTS = ROOT / "reports"
ASSETS_CSV = REPORTS / "assets.csv"
PAGES_CSV = REPORTS / "pages.csv"
LICENSES_CSV = ROOT / "approved" / "asset-licenses.csv"

DOWNLOAD_ROOT = ROOT / "downloaded"
MAKER_ROOT = ROOT / "asset-maker"
ABOUT_ROOT = ROOT / "about-data"

MAX_FILE_BYTES = int(os.getenv("IWAG_MAX_FILE_BYTES", str(20 * 1024 * 1024)))
TIMEOUT = (15, 45)
CHUNK_SIZE = 64 * 1024

TYPE_DIRS = {
    "css": "css",
    "javascript": "js",
    "image": "images",
    "html": "html",
}

session = requests.Session()
session.headers.update({"User-Agent": "IWAG-RTD-AssetCollector/2.0"})


def read_csv(path):
    if not path.exists():
        raise FileNotFoundError(f"Required discovery file not found: {path}")
    with path.open("r", newline="", encoding="utf-8-sig") as handle:
        return list(csv.DictReader(handle))


def normalized_type(value):
    value = (value or "").strip().lower()
    aliases = {"js": "javascript", "img": "image"}
    value = aliases.get(value, value)
    return value if value in TYPE_DIRS else ""


def safe_destination(url, kind):
    parsed = urlsplit(url)
    relative = unquote(parsed.path).lstrip("/")
    if not relative or relative.endswith("/"):
        relative += "index" + (".html" if kind == "html" else ".bin")

    parts = Path(relative).parts
    if any(part in ("", ".", "..") for part in parts):
        raise ValueError("Unsafe URL path")

    if parsed.query:
        digest = hashlib.sha256(parsed.query.encode("utf-8")).hexdigest()[:10]
        path = Path(relative)
        relative = str(path.with_name(f"{path.stem}-{digest}{path.suffix}"))

    return DOWNLOAD_ROOT / TYPE_DIRS[kind] / relative


def sha256_file(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(CHUNK_SIZE), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_license_records():
    if not LICENSES_CSV.exists():
        LICENSES_CSV.parent.mkdir(parents=True, exist_ok=True)
        with LICENSES_CSV.open("w", newline="", encoding="utf-8") as handle:
            writer = csv.writer(handle)
            writer.writerow(["url", "license", "attribution", "approved"])
        print(f"Created {LICENSES_CSV}; add approved assets and rerun.")
        return {}

    records = {}
    for row in read_csv(LICENSES_CSV):
        url = (row.get("url") or "").strip()
        if url:
            records[url] = {
                "license": (row.get("license") or "Unknown").strip(),
                "attribution": (row.get("attribution") or "").strip(),
                "approved": (row.get("approved") or "").strip().lower() == "yes",
            }
    return records


def download_asset(url, kind):
    parsed = urlsplit(url)
    if parsed.scheme != "https" or (parsed.hostname or "").lower() != ALLOWED_HOST:
        return "SKIPPED_HOST_OR_SCHEME", "", "", "", 0

    if kind not in TYPE_DIRS:
        return "SKIPPED_UNSUPPORTED_TYPE", "", "", "", 0

    response = None
    temp_path = None
    try:
        response = session.get(
            url, stream=True, timeout=TIMEOUT, allow_redirects=False
        )
        if response.status_code != 200:
            return f"HTTP_{response.status_code}", "", "", "", 0

        content_length = response.headers.get("Content-Length")
        if content_length and int(content_length) > MAX_FILE_BYTES:
            return "SKIPPED_SIZE_LIMIT", "", "", "", 0

        target = safe_destination(url, kind)
        target.parent.mkdir(parents=True, exist_ok=True)
        temp_path = target.with_name(target.name + ".part")
        size = 0
        digest = hashlib.sha256()

        with temp_path.open("wb") as handle:
            for chunk in response.iter_content(CHUNK_SIZE):
                if not chunk:
                    continue
                size += len(chunk)
                if size > MAX_FILE_BYTES:
                    temp_path.unlink(missing_ok=True)
                    return "SKIPPED_SIZE_LIMIT", "", "", "", size
                digest.update(chunk)
                handle.write(chunk)

        temp_path.replace(target)
        content_type = response.headers.get("Content-Type", "").split(";")[0].strip()
        mime = content_type or mimetypes.guess_type(str(target))[0] or "application/octet-stream"
        return "DOWNLOADED", str(target), digest.hexdigest(), mime, size

    except (requests.RequestException, OSError, ValueError) as error:
        if temp_path:
            temp_path.unlink(missing_ok=True)
        return f"ERROR_{type(error).__name__}", "", "", "", 0
    finally:
        if response is not None:
            response.close()


def write_csv(path, headers, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(headers)
        writer.writerows(rows)


def main():
    assets = read_csv(ASSETS_CSV)
    pages = read_csv(PAGES_CSV)
    licenses = load_license_records()

    manifest_rows = []
    credit_rows = []
    downloaded = 0

    for number, asset in enumerate(assets, 1):
        url = (asset.get("Asset URL") or "").strip()
        kind = normalized_type(asset.get("Type"))
        approval = licenses.get(url, {})
        license_name = approval.get("license", "Unknown")
        attribution = approval.get("attribution", "")
        approved = approval.get("approved", False)

        if not url or not kind:
            status, local_path, digest, mime, size = "SKIPPED_INVALID_RECORD", "", "", "", 0
        elif not approved:
            status, local_path, digest, mime, size = "INVENTORIED_NOT_APPROVED", "", "", "", 0
        else:
            status, local_path, digest, mime, size = download_asset(url, kind)

        if status == "DOWNLOADED":
            downloaded += 1

        filename = Path(local_path).name if local_path else Path(urlsplit(url).path).name
        manifest_rows.append([
            number, filename, kind, url, status, local_path,
            mime, size, digest, license_name, attribution
        ])
        credit_rows.append([
            filename, url, license_name, attribution,
            "Downloaded" if status == "DOWNLOADED" else status
        ])
        print(f"[{number}/{len(assets)}] {status}: {url}")

    write_csv(
        MAKER_ROOT / "manifest.csv",
        ["asset_id", "filename", "type", "source_url", "status",
         "local_path", "mime_type", "size_bytes", "sha256", "license", "attribution"],
        manifest_rows,
    )
    write_csv(
        MAKER_ROOT / "assets-index.csv",
        ["asset_id", "filename", "type", "local_path", "sha256"],
        [[r[0], r[1], r[2], r[5], r[8]] for r in manifest_rows],
    )
    write_csv(
        ABOUT_ROOT / "asset-credits.csv",
        ["filename", "source_url", "license", "attribution", "status"],
        credit_rows,
    )
    write_csv(
        REPORTS / "download-report.csv",
        ["asset_id", "url", "type", "status", "local_path"],
        [[r[0], r[3], r[2], r[4], r[5]] for r in manifest_rows],
    )

    print("\n========== IWAG RTD ASSET MAKER ==========")
    print(f"Pages discovered : {len(pages)}")
    print(f"Assets discovered: {len(assets)}")
    print(f"Assets downloaded: {downloaded}")
    print(f"Manifest         : {MAKER_ROOT / 'manifest.csv'}")
    print(f"About credits    : {ABOUT_ROOT / 'asset-credits.csv'}")
    print("==========================================")


if __name__ == "__main__":
    main()
