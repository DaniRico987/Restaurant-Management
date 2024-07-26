import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "./components/navBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Proyect",
  description: "Restaurant Proyect",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
