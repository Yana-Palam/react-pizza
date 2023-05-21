import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Search from "../Search";
import logoSvg from "../../assets/img/pizza-logo.svg";
import SvgCart from "../svg/SvgCart";

import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cartSelectors";

function Header() {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectTotalPrice);
  const totalItemsCount = cartItems.reduce((totalCount, item) => {
    return totalCount + item.count;
  }, 0);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />

            <div>
              <h1>React Pizza</h1>
              <p>найсмачніша піца у всесвіті</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{cartTotalPrice} ₴</span>
            <div className="button__delimiter"></div>
            <SvgCart />
            <span>{totalItemsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
