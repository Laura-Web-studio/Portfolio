import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laurawebstudio.hr"),

  title: {
    default: "Laura Web Studio | Izrada web stranica",
    template: "%s | Laura Web Studio",
  },

  description:
    "Dizajn i izrada modernih, brzih i responzivnih web stranica za mala poslovanja, ugostiteljstvo, turizam i uslužne djelatnosti.",

  keywords: [
    "izrada web stranica",
    "web dizajn",
    "web developer Split",
    "izrada web stranica Split",
    "web stranice Hrvatska",
    "Laura Web Studio",
  ],

  authors: [{ name: "Laura Web Studio" }],
  creator: "Laura Web Studio",

  openGraph: {
    title: "Laura Web Studio | Izrada web stranica",
    description:
      "Moderne web stranice koje ostavljaju pravi dojam.",
    url: "https://laurawebstudio.hr",
    siteName: "Laura Web Studio",
    locale: "hr_HR",
    type: "website",
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
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}