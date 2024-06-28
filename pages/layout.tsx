import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] });
const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "MH Designs",
  description: "Software agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <link rel="icon" href="/MH.ico" />
      </Head>
      <body className={lato.className} suppressHydrationWarning={true}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
