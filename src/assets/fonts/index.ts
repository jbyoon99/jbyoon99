import { Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";

export const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
});
export const msSans = localFont({
  src: "./ms_sans_serif.ttf",
  variable: "--font-ms-sans",
});

export const msSansBold = localFont({
  src: "./ms_sans_serif_bold.ttf",
  variable: "--font-ms-sans-bold",
});
