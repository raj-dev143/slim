import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/BootstrapClient";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Slim24 Pro Meal Replacement Formula | Weight Loss Powder",
  description:
    "Slim24 Pro is a meal replacement formula with whey protein and other vital nutrients that assist in weight loss naturally. Now, see a healthier and leaner you with Slim24 Pro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-bebas-neue">
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
