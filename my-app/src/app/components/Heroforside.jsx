function Header() {
  return (
    <header className="p-5 bg-[#DFCAB5]">
      <h1 className="text-4xl font-bold text-center"> Velkommen til vores butik</h1>
      <p className="ml-[20%] p-5">
        Se vores udvalg af produkter her! <br />
        Hos os finder du alt fra elektronik til tøj og accessories. Vi har noget for enhver smag og budget. <br />
        Vi tilbyder hurtig levering og nem returnering, så du kan handle med ro i sindet. <br />
        Tjek vores nyeste produkter og tilbud ud, og find dine nye yndlingsprodukter i dag!
      </p>
      <button
        type="button"
        className="mt-3 mx-auto block px-5 py-3 border-0 rounded-lg bg-gray-900 text-white text-base font-semibold cursor-pointer"
      >
        Søg bland vores produkter
      </button>
    </header>
  );
}

export default Header;
