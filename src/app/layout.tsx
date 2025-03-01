import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@src/components/Navbar";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyas Bhujbal",
  description: "Shreyas Bhujbal's personal website and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased min-h-screen`}>
        <Navbar />
        <div className="pt-4">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
