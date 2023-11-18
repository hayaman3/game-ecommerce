import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game E-Commerce",
  description: "E-commerce NextJs13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col gap-16 bg-dark-300 text-white ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
