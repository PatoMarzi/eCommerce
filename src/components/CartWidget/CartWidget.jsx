import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className="container">
      <ShoppingCartIcon />
      <div className="nro">
        <p>{3}</p>
      </div>
    </div>
  );
};

export default CartWidget;
