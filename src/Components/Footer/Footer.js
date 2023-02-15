import "./Footer.css";
import FooterBanner from "./footerBanner";
const Footer = (props) => {
  return (
    <footer className="footer">
      <FooterBanner />
      <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
        <h2> &copy; All Rights Reserved</h2>
        <h1>
          <i
            className="fa fa-instagram"
            aria-hidden="true"
            style={{ margin: "1rem" }}
          ></i>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
