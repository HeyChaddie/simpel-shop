import Link from "next/link";
import Detaljeprodukt from "../components/Detaljeprodukt";
import { Suspense } from "react";
import { getProduct } from "../../../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DetaljeSide({ searchParams }) {
  return (
    <>
      <Navigation />
      <section className="flex justify-center">
        <div className="w-4/5">
          <div className="bg-red-500 h-20 flex flex-col justify-center pl-10">
            <Link href="/produkter">Tilbage</Link>
          </div>
          <Suspense fallback={<h3>Finder Produkt...</h3>}>
            <FetchDetailData searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}

async function FetchDetailData({ searchParams }) {
  const { id } = await searchParams;

  const detaljeprodukt = await getProduct(id);

  return <Detaljeprodukt detaljeprodukt={detaljeprodukt} />;
}
