function Header() {
  return (
    <header style={{ marginLeft: "10%", padding: "20px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold" }}> Velkommen til vores butik</h1>
      <p style={{ margin: "10px 0" }}>
        {" "}
        Se vores udvalg af produkter her! <br />
        Hos os finder du alt fra elektronik til tøj og accessories. Vi har noget for enhver smag og budget. <br />
        Vi tilbyder hurtig levering og nem returnering, så du kan handle med ro i sindet. <br />
        Tjek vores nyeste produkter og tilbud ud, og find dine nye yndlingsprodukter i dag!
      </p>
      <button
        type="button"
        style={{
          marginTop: "12px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#111827",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Søg bland vores produkter
      </button>
    </header>
  );
}

export default Header;
