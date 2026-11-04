import Link from "next/link";
import Detaljeprodukt from "../components/Detaljeprodukt";
import { Suspense } from "react";
import { getProduct } from "../../../lib/api";

export default function DetaljeSide({ searchParams }) {
  return (
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
  );
}

async function FetchDetailData({ searchParams }) {
  const { id } = await searchParams;

  const detaljeprodukt = await getProduct(id);

  return <Detaljeprodukt detaljeprodukt={detaljeprodukt} />;
}
