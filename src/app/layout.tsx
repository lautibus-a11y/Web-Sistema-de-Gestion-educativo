'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  if (isLanding) {
    return (
      <html lang="es">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-slate-50">
          <Sidebar />
          {/* Main content — add pt-14 on mobile to clear the fixed top bar */}
          <div className="flex flex-1 flex-col overflow-hidden relative pt-14 md:pt-0">
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
