import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creedence Clearwater Industrial | Industrial Cleaning & Hydro Excavation",
  description: "Professional industrial cleaning, hydro excavation, vacuum truck services, line jetting, sewer jetting, and pipe repair. Serving your industrial needs with reliability and expertise.",
  keywords: "industrial cleaning, hydro excavation, vacuum truck, line jetting, sewer jetting, pipe repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
