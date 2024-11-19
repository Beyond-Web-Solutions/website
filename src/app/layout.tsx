import React from "react";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { Header } from "@/app/_components/layout/header/header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer } from "@/app/_components/layout/footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Beyond Web Solutions",
    default: "Beyond Web Solutions", // a default is required when creating a template
  },
  metadataBase: new URL("https://beyond-web.nl"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
