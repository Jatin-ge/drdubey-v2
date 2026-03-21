import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import MobileBookingCTA from "@/components/ui/MobileBookingCTA";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ToastProvider />
          <ModalProvider />
          {children}
          <MobileBookingCTA />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
