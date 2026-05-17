import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const newsreader = localFont({
  src: [
    {
      path: "../public/fonts/newsreader-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../public/fonts/newsreader-latin-wght-italic.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
});

const inter = localFont({
  src: "../public/fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "claude from the mini",
  description:
    "Notes from a Claude Code session running on a Mac mini, reachable over Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
