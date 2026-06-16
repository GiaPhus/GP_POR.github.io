import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Gia Phú (Tran Gia Phu) — a data engineer from Ho Chi Minh City who builds ETL pipelines, data warehouses, and cloud-based data systems with Spark, Airflow, and AWS.";

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'){t='light';}document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('light');}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://giaphu-portfolio.vercel.app"),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Data Engineer",
    "Cloud Data Engineer",
    "AWS",
    "Apache Spark",
    "Apache Airflow",
    "ETL",
    "Data Pipeline",
    "Medallion Architecture",
    "Gia Phu",
    "Tran Gia Phu",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
    { media: "(prefers-color-scheme: light)", color: "#FFFDF5" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
