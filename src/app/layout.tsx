import "@/styles/globals.css";

import { Rubik } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "./_components/theme-provider";

const fontSans = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Resume Builder",
  description: "Resume Builder",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`font-sans ${fontSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
