import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20 z-50">
      <Image
        src="/assets/MH.svg"
        alt="logo"
        width={88}
        height={38}
        className="rounded-xl p-4"
      />
      <Link href="/terms">Terms</Link>
      <Link href="/private">privacy policy</Link>
    </footer>
  );
};

export default Footer;
