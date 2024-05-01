import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import React from "react";
import Providers from "@/app/provider";
import { Toaster } from "@/components/ui/toaster";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FriendsConnect",
  description: "Meet new friends and build relationships",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={league.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
