import "./CartItem.css";
const CartItem = (props) => {
  return (
    <div className="CartItem">
      <img src={props.img} />
      <div className="CartItem__info">
        <div className="CartItem__info__general">
          <h3>{props.name}</h3>
          <h4>X {props.quantity}</h4>
        </div>
        <div className="CartItem__info__priceInfo">
          <h3>${props.price}</h3>
          <i className="fa fa-crosshairs" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
