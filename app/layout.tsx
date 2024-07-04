import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.scss";

export const metadata: Metadata = {
  title: "2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
