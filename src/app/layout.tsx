import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@src/components/Navbar";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Personal website and blog",
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
      </body>
    </html>
  );
}
