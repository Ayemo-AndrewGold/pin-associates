import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3A8A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pinassociates.com.ng"),
  title: {
    default: "PIN Consultancy Services | Pass Your Professional Exams With Confidence",
    template: "%s | PIN Consultancy Services",
  },
  description:
    "PIN Consultancy Services (Pass It Now Associates) prepares students and professionals to pass ICAN, ACCA, CITN, CISA, ATS, and Diploma in IFRS exams on their first attempt. Expert tutors, flexible learning, proven results.",
  keywords: [
    "ICAN tuition Nigeria",
    "ACCA classes Nigeria",
    "CITN examination",
    "ATS accountancy",
    "CISA training",
    "IFRS diploma",
    "professional exam preparation",
    "accounting tuition",
    "PIN Consultancy Services",
    "Pass It Now Associates",
  ],
  authors: [{ name: "PIN Consultancy Services" }],
  creator: "PIN Consultancy Services",
  publisher: "PIN Consultancy Services",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pinassociates.com.ng",
    siteName: "PIN Consultancy Services",
    title: "PIN Consultancy Services | Pass Your Professional Exams With Confidence",
    description:
      "Expert professional exam tuition for ICAN, ACCA, CITN, CISA, ATS & more. Join thousands of successful professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PIN Consultancy Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIN Consultancy Services",
    description: "Pass Your Professional Exams With Confidence",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
