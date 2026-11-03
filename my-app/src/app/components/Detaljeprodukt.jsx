import Image from "next/image";

const Detaljeprodukt = ({ detaljeprodukt }) => {
  return (
    <div className="bg-blue-600 flex flex-row justify-center pt-15 pb-25 gap-20">
      <Image src={detaljeprodukt.thumbnail} alt={detaljeprodukt.title} width={100} height={100} />
      <div className="bg-yellow-400 flex flex-col gap-5 w-100">
        <h2>{detaljeprodukt.title}</h2>
        <p>{detaljeprodukt.description}</p>
      </div>
    </div>
  );
};

export default Detaljeprodukt;
