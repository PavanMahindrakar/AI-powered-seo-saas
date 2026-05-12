import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/components/ConvexProviderWithClerk";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightSEO AI — AI-Powered SEO Intelligence Platform",

  description:
    "Generate AI-powered SEO intelligence reports with competitor analysis, backlink insights, SERP research, and growth recommendations using OpenAI and Bright Data.",

  keywords: [
    "AI SEO platform",
    "SEO intelligence",
    "competitor analysis",
    "backlink analysis",
    "SERP research",
    "OpenAI SEO",
    "Bright Data",
    "AI SEO reports",
    "SEO SaaS",
    "keyword intelligence",
  ],

  authors: [
    {
      name: "Pavan Mahindrakar",
    },
  ],

  creator: "Pavan Mahindrakar",

  openGraph: {
    title:
      "BrightSEO AI — AI-Powered SEO Intelligence Platform",

    description:
      "Generate AI-powered SEO intelligence reports with competitor analysis, backlink insights, SERP research, and growth recommendations.",

    type: "website",

    siteName: "BrightSEO AI",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "BrightSEO AI — AI-Powered SEO Intelligence Platform",

    description:
      "AI-powered SEO intelligence reports with competitor analysis, backlink insights, and SERP research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ConvexClerkProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </ConvexClerkProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}