import Product from "../Product/Product";
import "./Slider.css";
import { useSelector } from "react-redux";
const Slider = (props) => {
  const Products = useSelector((state) => state.ProductsSlice.Products);
  return (
    <section className="Slider">
      <h3 className="Slider__heading">You May Also Like</h3>
      <div  className="Products_slider">
        {Products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div >
    </section>
  );
};

export default Slider;
