import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/navigation/navigation";
import { Footer } from "@/components/footer/footer";
import "./globals.css";
import "../styles/main.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning app",
  description: "Learning next to make an app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body-custom">
      <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
