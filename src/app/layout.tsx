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
      {/* <body className={`bg-[rgba(19,19,19,1)] ${inter.className}`}> */}
      <body className={`bg-dark-200 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
