import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Assignment for ShopIQ + Cuvette",
  icons: {
    icon: "logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
