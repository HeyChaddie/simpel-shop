import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto h-50 bg-[#A46323] flex flex-row justify-between items-center p-4">
      <div className="flex flex-col">
        <Link href="/">
          <Image src="/logo1.png" alt="Mavelle – Your world, your style" width={192} height={128} className="h-24 w-auto object-contain" />
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href="/">Forside</Link>
        <Link href="/produkter">Produkter</Link>
      </div>
      <h2>2026 Copyright</h2>
    </footer>
  );
};

export default Footer;
