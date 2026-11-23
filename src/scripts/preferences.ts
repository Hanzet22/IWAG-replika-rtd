import { localeKeys } from "../i18n/locales";

const themeSelect = document.querySelector<HTMLSelectElement>("[data-theme-choice]");
const languageSelect = document.querySelector<HTMLSelectElement>("[data-language-choice]");
const accentSelect = document.querySelector<HTMLInputElement>("[data-accent-choice]");
const resetButton = document.querySelector<HTMLButtonElement>("[data-reset-preferences]");
const root = document.documentElement;
root.dataset.js = "true";
const validThemes = ["system", "light", "black", "super-black", "amoled-black", "dynamic"];
const storageKey = "iwag-v2-theme";
const accentStorageKey = "iwag-v2-accent";
let selectedAccent = "#135d78";

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16)
  };
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const channel = (value: number) => {
    const s = value / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function toHsl({ r, g, b }: { r: number; g: number; b: number }) {
  const red = r / 255, green = g / 255, blue = b / 255;
  const max = Math.max(red, green, blue), min = Math.min(red, green, blue);
  const delta = max - min;
  let h = 0;
  const l = (max + min) / 2;
  let s = 0;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (max === red) h = ((green - blue) / delta) % 6;
    else if (max === green) h = (blue - red) / delta + 2;
    else h = (red - green) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
}

function applyAccent(hex: string) {
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return;
  selectedAccent = hex;
  if (accentSelect) accentSelect.value = hex;
  if (root.dataset.theme !== "dynamic") return;
  const rgb = hexToRgb(hex);
  const { h } = toHsl(rgb);
  const contrast = relativeLuminance(rgb) > 0.179 ? "#000000" : "#ffffff";
  root.style.setProperty("--accent", hex);
  root.style.setProperty("--accent-contrast", contrast);
  root.style.setProperty("--link", `hsl(${h} 72% 24%)`);
  root.style.setProperty("--link-visited", `hsl(${(h + 58) % 360} 55% 25%)`);
  // Focus remains a semantic theme token and is not derived from the user accent.
}

function applyTheme(theme: string) {
  const selected = validThemes.includes(theme) ? theme : "system";
  root.dataset.theme = selected;
  root.style.colorScheme = selected === "system" ? "" : selected === "light" || selected === "dynamic" ? "light" : "dark";
  if (themeSelect) themeSelect.value = selected;
  if (selected === "dynamic") applyAccent(selectedAccent);
  else {
    root.style.removeProperty("--accent");
    root.style.removeProperty("--accent-contrast");
    root.style.removeProperty("--link");
    root.style.removeProperty("--link-visited");
    root.style.removeProperty("--focus");
  }
}

try {
  const saved = localStorage.getItem(storageKey);
  const savedAccent = localStorage.getItem(accentStorageKey);
  if (saved) applyTheme(saved);
  if (savedAccent) applyAccent(savedAccent);
} catch {
  applyTheme("system");
}

accentSelect?.addEventListener("input", () => {
  applyAccent(accentSelect.value);
  try { localStorage.setItem(accentStorageKey, accentSelect.value); } catch {
    // The selected accent remains active for the current page.
  }
});

themeSelect?.addEventListener("change", () => {
  const selected = themeSelect.value;
  applyTheme(selected);
  try {
    if (selected === "system") localStorage.removeItem(storageKey);
    else localStorage.setItem(storageKey, selected);
  } catch {
    // Theme selection still applies for the current page when storage is unavailable.
  }
});

languageSelect?.addEventListener("change", () => {
  const selected = languageSelect.value;
  if ((localeKeys as readonly string[]).includes(selected)) {
    const path = window.location.pathname.replace(/^\/[a-z-]+(?=\/|$)/, "");
    window.location.assign(`/${selected}${path || "/"}`);
  }
});

const preferenceSelects = [
 {key:"iwag-v2-text-scale",selector:"[data-text-scale]",attribute:"textScale",allowed:["normal","large","larger"],fallback:"normal"},
 {key:"iwag-v2-contrast",selector:"[data-contrast-mode]",attribute:"contrast",allowed:["normal","high"],fallback:"normal"},
 {key:"iwag-v2-motion",selector:"[data-motion-mode]",attribute:"motion",allowed:["system","reduce"],fallback:"system"}
] as const;
for(const item of preferenceSelects){
 const select=document.querySelector<HTMLSelectElement>(item.selector);let value:string=item.fallback;
 try{const saved=localStorage.getItem(item.key);if(saved&&(item.allowed as readonly string[]).includes(saved))value=saved;}catch{}
 root.dataset[item.attribute]=value;
 if(select){select.value=value;select.addEventListener("change",()=>{const next=select.value;if(!(item.allowed as readonly string[]).includes(next))return;root.dataset[item.attribute]=next;try{if(next===item.fallback)localStorage.removeItem(item.key);else localStorage.setItem(item.key,next);}catch{}});}
}

const densitySelect=document.querySelector<HTMLSelectElement>("[data-density-mode]");
let density="normal";
try{const saved=localStorage.getItem("iwag-v2-density");if(saved==="spacious")density=saved;}catch{}
root.dataset.density=density;
if(densitySelect){densitySelect.value=density;densitySelect.addEventListener("change",()=>{const next=densitySelect.value==="spacious"?"spacious":"normal";root.dataset.density=next;try{if(next==="normal")localStorage.removeItem("iwag-v2-density");else localStorage.setItem("iwag-v2-density",next);}catch{}});}

resetButton?.addEventListener("click", () => {
  for (const key of [storageKey, accentStorageKey, "iwag-v2-text-scale", "iwag-v2-contrast", "iwag-v2-motion", "iwag-v2-density"]) {
    try { localStorage.removeItem(key); } catch { /* Preferences still reset for this page. */ }
  }
  selectedAccent = "#135d78";
  applyTheme("system");
  applyAccent(selectedAccent);
  root.dataset.textScale = "normal";
  root.dataset.contrast = "normal";
  root.dataset.motion = "system";
  root.dataset.density = "normal";
  if (accentSelect) accentSelect.value = selectedAccent;
  const defaults: Array<[string, string]> = [
    ["[data-text-scale]", "normal"],
    ["[data-contrast-mode]", "normal"],
    ["[data-motion-mode]", "system"],
    ["[data-density-mode]", "normal"]
  ];
  for (const [selector, value] of defaults) {
    const control = document.querySelector<HTMLSelectElement>(selector);
    if (control) control.value = value;
  }
});
