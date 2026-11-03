import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto h-50 bg-amber-800 flex flex-row justify-between items-center p-4">
      <div className="flex flex-col">
        <Link href="/">
          <h2>Logo</h2>
        </Link>
        <p>slogan her</p>
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
