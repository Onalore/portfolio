import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Portfolio | Tu Nombre",
  description: "Portfolio personal creado con Next.js",
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "it" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;

  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className="bg-gray-50 text-gray-800">{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
