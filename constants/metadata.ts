import { Metadata } from "next"

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://siddharth.xyz"),
  title: {
    default: "Siddharth",
    template: "%s - siddharth",
  },
  description: "Siddharth Rana is a Full Stack Engineer specializing in web development, React, and Next.js. Explore his projects, experiences, and latest blog posts.",
  icons: [
    {
      url: "/sid.png",
      href: "/sid.png",
    },
  ],
  keywords: ["Full Stack Engineer", "Web Development", "React", "Next.js"],
  authors: [{ name: "Siddharth RANA" }],
  openGraph: {
    title: "Siddharth Rana",
    description: "Explore the portfolio of Siddharth Rana, a Full Stack Engineer specializing in web development.",
    url: "https://www.siddharth.xyz",
    siteName: "Siddharth Rana",
    locale: "en-US",
    type: "website",
    images: [
      
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Rana",
    description: "Explore the portfolio of Om Rawat, a Full Stack Engineer specializing in web development.",
    images: "/sid.png",
    creator: "@omraw29",
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
}

