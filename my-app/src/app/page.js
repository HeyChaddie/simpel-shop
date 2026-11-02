import Link from "next/link";
import Test from "./components/Test";
import { CiStar } from "react-icons/ci";

export default function Home() {
  return (
    <>
      {/* komponenter smides ind her */}
      <Test />
      <CiStar />
      <Link href="/produkter">til produkter</Link>
    </>
  );
}
