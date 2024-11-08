"use client";
import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  nl: () => import("./locales/nl"),
  en: () => import("./locales/en"),
});
