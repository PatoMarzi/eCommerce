import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const CartWidget = ({ numero }) => {
  return (
    <div className="container">
      <ShoppingCartIcon />
      <div className="nro">
        <p>{numero}</p>
      </div>
    </div>
  );
};

export default CartWidget;
