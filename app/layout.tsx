import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
