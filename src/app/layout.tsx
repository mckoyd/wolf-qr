import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Wolf's QR Code Component | Frontend Mentor Challenge",
  description: "A QR code component that took 3 hours to make responsive",
  keywords: ["Frontend Mentor", "QR Code", "Over-engineering"],
  authors: [
    {
      name: "Dominick McKoy",
      url: "https://www.linkedin.com/in/therealmckoy/",
    },
  ],
  openGraph: {
    title: "Wolf's QR Code Component",
    description: "Witness the pinnacle of QR code presentation",
    type: "website",
    images: ["/image-qr-code.png"],
  },
};

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D5E1EF",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
