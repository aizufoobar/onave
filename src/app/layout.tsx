import {Header} from "@/components/header";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";

const font = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Onave",
  description: "Under development.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
