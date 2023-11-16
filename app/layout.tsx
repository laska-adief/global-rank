import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GLobal Rank",
  description: "Global Rank is your passport to a world of rankings, making complex global data accessible and engaging",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-normal text-normal`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
