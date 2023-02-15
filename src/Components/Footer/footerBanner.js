import "./Footer.css";
const FooterBanner = (props) => {
  return (
    <div className="footerBanner">
      <img
        src="https://www.jabra.com/-/media/Images/Products/Jabra-Elite-45h/Product/elite_45e_copperblack_1.png?la=en&hash=6070E0A72070B392F1E6FB17FE7400C54D218E60"
        style={{
          position: "absolute",
          height: "40rem",
          width: "40rem",
          objectFit: "contain",
          top: "-10rem",
          left: "17rem",
        }}
      />
      <div className="footerLeft">
        <p>20% Off</p>
        <p style={{ fontSize: "4rem", fontWeight: "bold" }}>FINE</p>
        <p style={{ fontSize: "4rem", fontWeight: "bold" }}>SMILE</p>
        <p>ORDER NOW</p>
      </div>
      <div className="footerRight">
        <p>BEAST SOLO AIR</p>
        <p style={{ fontSize: "4rem", fontWeight: "bold" }}>SUMMER SALE</p>
        <p>img elements must have an alt prop, either with meaningful text</p>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};
export default FooterBanner;
