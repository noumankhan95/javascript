import "./HeroBanner.css";
const HeroBanner = (props) => {
  return (
    <div className="HeroBanner">
      <div className="HeroBanner__text_container">
        <h3 style={{ fontSize: "2rem" }}>Beats Solo Air</h3>
        <h2 style={{ fontSize: "6rem", color: "black" }}>Summer Sale</h2>
        <h1 style={{ fontSize: "6rem" }}>Fine</h1>
        <button className="HeroBanner__text_container__btn">Shop Now</button>
      </div>
      <div className="HeroBanner__image">
        <img src="https://www.jabra.com/-/media/Images/Products/Jabra-Elite-45h/Product/elite_45e_copperblack_1.png?la=en&hash=6070E0A72070B392F1E6FB17FE7400C54D218E60" />
      </div>
    </div>
  );
};
export default HeroBanner;
