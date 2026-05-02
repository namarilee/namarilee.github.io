import type { Metadata } from "next";
import "./globals.css";
import BackgroundGradient from "@/components/BackgroundGradient";

export const metadata: Metadata = {
  title: "Marina Lee 👩🏻‍💻💫💖🍡",
  description: "Marina Lee's personal website",
  icons: {
    icon: "/main-assets/ml-logo-white.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundGradient />        
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>

      </body>
    </html>
  );
}
