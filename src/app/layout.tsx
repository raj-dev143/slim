import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/BootstrapClient";
import "./globals.css";
import Header from "./Header";
import Footer from "@/components/footer/Footer";

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
      <body className="font-bebas-neue">
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
