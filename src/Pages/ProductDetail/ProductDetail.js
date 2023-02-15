import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { actions } from "../../store/ProductsSlice";

const ProductDetail = (props) => {
  const Products = useSelector((state) => state.ProductsSlice.Products);
  const id = useParams().id;
  const Prod = Products.find((e) => e.id === parseInt(id));
  const IncartProds = useSelector((state) => state.ProductsSlice.cart);
  const [mainprodImage, setmainprodImage] = useState(Prod.img);
  const dispatch = useDispatch();
  const [showSideBar, setshowSideBar] = useState(false);
  const currItemIncart = IncartProds?.find((i) => i.id === Prod.id)?.quantity;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Prod]);
  return (
    <div>
      {showSideBar && (
        <SideBar
          toggleSideBar={() => {
            setshowSideBar((p) => false);
          }}
        />
      )}
      <div className="header__detail">
        <h3
          onClick={() => {
            navigate("/Home", { replace: true });
          }}
          style={{ cursor: "pointer" }}
        >
          JSX Headphones
        </h3>

        <div
          className={"GotoCart"}
          to="/ShowCart"
          onClick={() => {
            setshowSideBar((p) => true);
          }}
        >
          Show Cart
        </div>
      </div>
      <section className="Product__detail">
        <div className="Product__detail__img">
          <img src={mainprodImage} className="Product__detail__img" />
          <div className="Product__detail_subpictures">
            {Prod.subPictures.map((pic) => (
              <div
                className="Product__detail_subpicture_single"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("here");
                  setmainprodImage((p) => pic);
                }}
                key={Math.random() * 100}
              >
                <img src={`${pic}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="Product_detail__information">
          <p className="Product_detail__information__name">{Prod.name}</p>
          <p className="Product_detail__information__name">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
          </p>
          <p className="Product_detail__information__name">Details:</p>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty stri
          </p>
          <p className="Product_detail__information__name">${Prod.price}</p>

          <div className="Product_detail__information__quantity">
            Quantity
            <button
              onClick={() => dispatch(actions.removeFromCart({ id: Prod.id }))}
            >
              -
            </button>
            <h2>{currItemIncart ? currItemIncart : 0}</h2>
            <button
              onClick={() => dispatch(actions.addToCart({ id: Prod.id }))}
            >
              +
            </button>
          </div>
          <button className="Product_detail__information__button">
            Add To Cart
          </button>
        </div>
      </section>

      <Slider />

      <Footer />
    </div>
  );
};

export default ProductDetail;
