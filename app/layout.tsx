import TheHeader from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import TheFooter from "@/components/TheFooter";
import React, { useEffect } from "react";
import { axiosInstance } from "@/utils/axios";
import { getCookie } from "@/helper/cookies";

export const metadata: Metadata = {
  title: "User App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
