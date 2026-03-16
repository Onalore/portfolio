import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "it", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // si ya tiene idioma no hacer nada
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";

  const locale =
    locales.find((l) => acceptLanguage.startsWith(l)) || defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
