import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout"; 

export const metadata: Metadata = {
  title: "Voxvertex",
  description:
    "Voxvertex connects educational institutions with industry experts, transforming education through engaging guest lectures and fostering skill development for students and professionals worldwide",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica-light.woff",
      weight: "100",
      style: "light",
    },
    {
      path: "./fonts/Helvetica.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${helvetica.variable} antialiased cursor-none font-sans`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
