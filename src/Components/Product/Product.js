import "./Product.css";
import { NavLink } from "react-router-dom";
const Product = (props) => {
  return (
    <NavLink className="product_container" to={`/product/${props.id}`}>
      <img src={props.img} className="product_container_img" />
      <h3 className="product_container_name">{props.name}</h3>
      <h3 className="product_container_price">${props.price}</h3>
    </NavLink>
  );
};
export default Product;
