import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game E-Commerce",

  description: "E-commerce NextJs13",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`flex h-full flex-col bg-dark-300 text-white ${inter.className}`}
        >
          <Header />
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
