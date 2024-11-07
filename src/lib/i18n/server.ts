import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  nl: () => import("./locales/nl"),
  en: () => import("./locales/en"),
});
