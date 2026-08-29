import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReformOS — Demokratisk Samfunns- & Høringsplattform",
  description: "Borgerforslag, merkesaker, høringsuttalelser og direkte demokrati for SUN Samfunn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="antialiased bg-slate-950 text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
