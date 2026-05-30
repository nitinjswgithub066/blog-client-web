import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// ── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

// ── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "VexiraHub — Fullstack Blog and News Platform",
    template: "%s | VexiraHub",
  },
  description:
    "VexiraHub is a premium blog and news platform covering Technology, AI, Programming, Startups, Finance, Career, Gaming, and more.",
  keywords: [
    "blog",
    "news",
    "technology",
    "ai",
    "programming",
    "startups",
    "finance",
    "career",
    "vexirahub",
  ],
  authors: [{ name: "Vexira", url: "https://vexirahub.com" }],
  creator: "VexiraHub",
  publisher: "VexiraHub",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://vexirahub.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VexiraHub",
    title: "VexiraHub — Fullstack Blog and News Platform",
    description:
      "Premium blog and news platform covering Technology, AI, Programming, Startups, Finance, and more.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vexirahub",
    title: "VexiraHub — Fullstack Blog and News Platform",
    description:
      "Premium blog and news platform covering Technology, AI, Programming, Startups, Finance, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

// ── Inline script: set theme before first paint (prevents flash) ──────────────
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('vexirahub-theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`.trim();

// ── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inject theme before paint — eliminates flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
