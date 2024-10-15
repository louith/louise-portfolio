import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/partials/Navbar";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louise Seprado",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Box w={"full"} h={"full"}>
          {children}
        </Box>
      </body>
    </html>
  );
}
