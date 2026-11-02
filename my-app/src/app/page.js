import Link from "next/link";
import Test from "./components/Test";
import Navigation from "./components/Navigation";
import { CiStar } from "react-icons/ci";

export default function Home() {
  return (
    <>
      {/* komponenter smides ind her */}
      <Navigation />
      <Test />
      <CiStar />
      <Link href="/produkter">til produkter</Link>
    </>
  );
}
