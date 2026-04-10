import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/config/app";
import { AuthGuard } from "@/components/auth/auth-guard";


export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
