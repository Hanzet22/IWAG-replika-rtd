import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const root = new URL("../../../", import.meta.url);
const read = (relative) => readFile(new URL(relative, root), "utf8");

test("privacy notice treats browser and technical data as event-specific inventory items", async () => {
  const legal = await read("src/data/legal.ts");

  for (const text of [
    "Website visits may also involve technical request data",
    "Kunjungan situs juga dapat melibatkan data teknis permintaan",
    "The event-specific inventory must identify which of these data are actually processed",
    "Inventaris khusus acara harus mengidentifikasi data mana yang benar-benar diproses"
  ]) assert.ok(legal.includes(text), `Missing privacy inventory safeguard: ${text}`);
});

test("privacy and cookie policies distinguish remote requests from browser storage", async () => {
  const legal = await read("src/data/legal.ts");

  for (const text of [
    "A remote resource request may also disclose connection metadata",
    "Permintaan ke sumber daya jarak jauh juga dapat mengungkapkan metadata koneksi",
    "The examples in this policy describe technology classes that may be encountered; they do not assert that every class, provider or script is currently deployed",
    "tidak menyatakan bahwa setiap kelas, penyedia, atau skrip saat ini digunakan"
  ]) assert.ok(legal.includes(text), `Missing technology disclosure safeguard: ${text}`);
});

test("retention policy covers consent evidence and browser-local data without conflating them", async () => {
  const legal = await read("src/data/legal.ts");

  for (const text of [
    "A browser-local preference or identifier is not automatically a centrally held event record",
    "Preferensi atau identifier lokal browser tidak otomatis menjadi catatan acara yang disimpan secara terpusat",
    "deletion from the controller's systems does not itself clear copies",
    "penghapusan dari sistem pengendali tidak dengan sendirinya menghapus salinan",
    "Record consent and withdrawal state only as long as needed",
    "Simpan status persetujuan dan penarikannya hanya selama diperlukan"
  ]) assert.ok(legal.includes(text), `Missing retention consistency safeguard: ${text}`);
});
