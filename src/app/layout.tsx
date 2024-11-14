import React from "react";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { Header } from "@/app/_components/layout/header/header";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Beyond Web Solutions",
    default: "Beyond Web Solutions",
  },
  metadataBase: new URL("https://beyond-web.nl"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
