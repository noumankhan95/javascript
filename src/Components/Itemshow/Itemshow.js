import Product from "../Product/Product";
import "./Itemshow.css";
import { useSelector } from "react-redux";
const Itemshow = (props) => {
  const Products = useSelector((state) => state.ProductsSlice.Products);
  return (
    <section className="ItemShow">
      <h3 className="ItemShow__heading">Best Selling Products</h3>
      <div className="Products">
        {Products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Itemshow;
