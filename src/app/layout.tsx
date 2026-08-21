import type { Metadata } from "next";
import { JetBrains_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Robaプロフィールサイト",
  description: "Roba-97のプロフィールサイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${jetbrainsMono.variable} ${zenKakuGothicNew.variable}`}>
      <body suppressHydrationWarning >{children}</body>
    </html>
  );
}
