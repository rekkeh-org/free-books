import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Reading Initiative",
  description:
    "A free reading initiative for Nigeria. Read, listen and learn — books, audiobooks, research and open educational resources, free for everyone. Pilot launching in Ikulu, Lagos.",
  openGraph: {
    title: "Free Reading Initiative — A world of knowledge. Open to everyone.",
    description:
      "A free reading initiative for Nigeria, starting in Ikulu, Lagos.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
