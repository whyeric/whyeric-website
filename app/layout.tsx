import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Eric Wang",
  description: "Personal website of Eric (Hong Yi) Wang, CS & Mathematics at Yale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-blue-100 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} whyeric2020@gmail.com
        </footer>
      </body>
    </html>
  );
}
