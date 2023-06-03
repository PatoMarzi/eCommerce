import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="barraNav">
        <div className="logo">
          <img src="./src/assets/logo.jpeg" alt="logo" className="imglogo" />
        </div>
        <div>
          <ul className="botonera">
            <li className="boton">
              <a href="">Velas</a>{" "}
            </li>
            <li className="boton">
              <a href="">Canastos</a>{" "}
            </li>
            <li className="boton">
              <a href="">Deco</a>{" "}
            </li>
            <li className="boton2">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
