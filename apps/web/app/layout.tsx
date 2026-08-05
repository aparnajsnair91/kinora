import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinora",
  description: "Family planning made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="border-b bg-white px-3 py-1 shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold text-blue-600 hover:text-blue-700"
              >
                🏠 Kinora
              </Link>
          </div>
        </header>
        <main className="mx-auto flex-1 w-full max-w-5xl p-6">
          {children}
        </main>
        <Toaster
            position="top-right"
            richColors
        />
      </body>
    </html>
  );
}
