import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cooked?",
  description:
    "Find out if you're totally cooked or if you still have a chance to start studying! Enter the amount of time that's left until your exam and brace yourself.",
  keywords: ["cooked", "study hours", "exam stress", "am I cooked?"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-background text-white max-w-3xl mx-auto`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
