import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { locales } from "@/lib/i18n/constants";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: "nl",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
