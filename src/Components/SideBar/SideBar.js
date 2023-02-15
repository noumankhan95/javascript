import "./SideBar.css";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { useDispatch } from "react-redux";
import { actions } from "../../store/ProductsSlice";
import { useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const Products = useSelector((state) => state.ProductsSlice.cart);
  const Total = useSelector((state) => state.ProductsSlice.Total);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <section className="SideBar">
      <div className="CartItems">
        <div className="SideBar__header">
          <i
            className="fa fa-backward"
            aria-hidden="true"
            onClick={props.toggleSideBar}
            style={{ cursor: "pointer" }}
          ></i>
          <h3>Your Cart</h3>
          <h3>(Your Items)</h3>
        </div>
        {Products &&
          Products.map((item) => <CartItem {...item} key={item.id} />)}
        {!Products && <p>Your Cart Is Empty</p>}
      </div>
      <div className="SideBar__footer">
        <div className="SideBar__footer__info">
          <h3>SubTotal:</h3>
          <h3>${Total}</h3>
        </div>
        <button
          className="SideBar__footer__button"
          onClick={() => {

            dispatch(actions.emptyCart());
            if(Total){
              props.toggleSideBar();
              navigate("/Home");
              alert("Order Placed");
            }
     
          }}
        >
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default SideBar;
