import Image from "next/image";

const Detaljeprodukt = ({ detaljeprodukt }) => {
  return (
    <div className="bg-[#DFCAB5] flex flex-row justify-center pt-15 pb-25 gap-20">
      <Image src={detaljeprodukt.thumbnail} alt={detaljeprodukt.title} width={400} height={400} />
      <div className="bg-[#F5F5F5] flex flex-col gap-5 w-100">
        <h2>{detaljeprodukt.title}</h2>
        <p>{detaljeprodukt.description}</p>
      </div>
    </div>
  );
};

export default Detaljeprodukt;
