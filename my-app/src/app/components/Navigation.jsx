import Link from "next/link";
import Form from "next/form";

const Navigation = () => {
  return (
    <div className="h-20 w-full bg-amber-300 flex flex-row justify-between items-center p-4">
      <Link href="/">Logo</Link>
      <div className="w-2/7 bg-blue-400 flex flex-row justify-between">
        <Link href="/">Forside</Link>
        <Link href="/produkter">Produkter</Link>
        <Form className="flex flex-row bg-amber-900">
          <button></button>
          <input type="search" name="query" placeholder="search product"></input>
        </Form>
      </div>
      <Link href="/">Basket</Link>
    </div>
  );
};

export default Navigation;
