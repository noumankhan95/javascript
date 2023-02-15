import "./Home.css";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Itemshow from "../../Components/Itemshow/Itemshow";
import Footer from "../../Components/Footer/Footer";
const Home = (props) => {
  return (
    <>
      <HeroBanner />
      <Itemshow />
      <Footer />
    </>
  );
};

export default Home;
