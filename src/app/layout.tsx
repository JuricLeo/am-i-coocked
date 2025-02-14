import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coocked?",
  description:
    "Find out if you're totally coocked or if you still have a chance to start studying! Enter the amount of time that's left until your exam and brace yourself.",
  keywords: ["coocked", "study hours", "exam stress", "am I coocked?"],
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
      </body>
    </html>
  );
}
