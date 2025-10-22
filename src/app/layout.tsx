import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "Loteo - Catálogo",
  description: "Catálogo de Loteo de lotes navideños.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
