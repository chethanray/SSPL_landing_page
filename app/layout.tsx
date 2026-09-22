import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSPL — SayTrees Solutions | Enterprise Software & AI",
  description:
    "SSPL builds scalable software, enterprise apps, AI platforms and cloud solutions. Engineering craft for ambitious teams.",
  openGraph: {
    title: "SSPL — SayTrees Solutions Private Limited",
    description:
      "Scalable software, AI platforms and cloud engineering for modern enterprises.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
