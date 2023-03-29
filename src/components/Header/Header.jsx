import { Link } from "react-router-dom";
import logoSvg from "../../assets/img/pizza-logo.svg";
import SvgCart from "../svg/SvgCart";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="38" src={logoSvg} alt="Pizza logo" />
          </Link>
          <div>
            <h1>React Pizza</h1>
            <p>найсмачніша піца у всесвіті</p>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₴</span>
            <div className="button__delimiter"></div>
            <SvgCart />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
