import { Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";

export const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
});
export const levi = localFont({
  src: "../assets/leviwindows.ttf",
  variable: "--font-levi",
});
