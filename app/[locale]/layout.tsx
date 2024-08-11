import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Matheus Costa",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactElement;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        {
          <I18nProviderClient locale={locale}>
            <NextUIProvider>{children}</NextUIProvider>
          </I18nProviderClient>
        }
      </body>
    </html>
  );
}
