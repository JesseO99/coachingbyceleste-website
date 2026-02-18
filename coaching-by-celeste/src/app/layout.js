import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {GoogleAnalytics} from "@next/third-parties/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coaching by Celeste",
  description: "Find the besty plan for virtual coaching and nutrition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-4K08MEWYE6"/>
    </html>
  );
}
