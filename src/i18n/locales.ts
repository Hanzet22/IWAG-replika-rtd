export const locales = {
  en: { label: "English", htmlLang: "en", nativeName: "English" },
  id: { label: "Bahasa Indonesia", htmlLang: "id", nativeName: "Bahasa Indonesia" },
  "en-sg": { label: "English (Singapore)", htmlLang: "en-SG", nativeName: "English (Singapore)" },
  "ms-my": { label: "Bahasa Melayu", htmlLang: "ms-MY", nativeName: "Bahasa Melayu" }
} as const;

export type Locale = keyof typeof locales;
export const localeKeys = Object.keys(locales) as Locale[];

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && Object.hasOwn(locales, value);
}
