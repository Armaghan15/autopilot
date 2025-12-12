import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoPilot AI",
  description: "AutoPilot AI Agency Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scroll-smooth">
      <script
        async
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
      ></script>
      <body
        className={twMerge(
          dmSans.className,
          "antialiased scroll-smooth bg-[#EAEEFE]"
        )}
      >
        {children}
      </body>
    </html>
  );
}
