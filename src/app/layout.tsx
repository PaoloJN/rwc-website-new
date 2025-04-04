import "@/styles/globals.css";

import CTA, { CTA1 } from "@/components/building/cta";
import SiteFooter from "@/components/building/site-footer";
import SiteHeader from "@/components/building/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type React from "react";

const geist = Geist({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Todo App - Powered by Supabase",
    description: "A simple todo application built with Next.js and Supabase",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={geist.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative w-full max-w-screen overflow-hidden">
                        <div className="fixed top-0 -z-10 h-full w-full">
                            <div className="absolute inset-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                        </div>

                        <SiteHeader />
                        {children}
                        <CTA />
                        <SiteFooter />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
