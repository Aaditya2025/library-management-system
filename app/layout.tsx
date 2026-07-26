import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apnilibrary.in"),
  title: {
    default: `${site.name} — Reading Room in ${site.city}, ${site.state}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "library in Ballia",
    "Ballia reading room",
    "UPSC library Ballia",
    "SSC coaching library Ballia",
    "competitive exam library Uttar Pradesh",
    "Apni Library",
  ],
  openGraph: {
    title: `${site.name} — Reading Room in ${site.city}, ${site.state}`,
    description: site.description,
    url: "https://www.apnilibrary.in",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Reading Room in ${site.city}, ${site.state}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
