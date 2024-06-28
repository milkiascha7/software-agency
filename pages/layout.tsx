import { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>MH Designs</title>
        <link rel="icon" href="/MH.ico" />
      </Head>
      <body className={lato.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
