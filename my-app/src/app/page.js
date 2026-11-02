import Link from "next/link";
import Test from "./components/Test";

export default function Home() {
  return (
    <>
      {/* komponenter smides ind her */}
      <Test />
      <Link href="/produkter">til produkter</Link>
    </>
  );
}
