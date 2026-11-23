import { localeKeys } from "../i18n/locales";

const themeSelect = document.querySelector<HTMLSelectElement>("[data-theme-choice]");
const languageSelect = document.querySelector<HTMLSelectElement>("[data-language-choice]");
const root = document.documentElement;
const validThemes = ["system", "light", "black", "super-black", "amoled-black", "dynamic"];
const storageKey = "iwag-v2-theme";

function applyTheme(theme: string) {
  const selected = validThemes.includes(theme) ? theme : "system";
  root.dataset.theme = selected;
  root.style.colorScheme = selected === "system" ? "" : selected === "light" || selected === "dynamic" ? "light" : "dark";
  if (themeSelect) themeSelect.value = selected;
}

try {
  const saved = localStorage.getItem(storageKey);
  if (saved) applyTheme(saved);
} catch {
  applyTheme("system");
}

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
