import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Search from "../Search";
import logoSvg from "../../assets/img/pizza-logo.svg";
import SvgCart from "../svg/SvgCart";

import {
  selectTotalPrice,
  selectTotalItemsCount,
} from "../../redux/cart/cartSelectors";

function Header() {
  const { pathname } = useLocation();

  const cartTotalPrice = useSelector(selectTotalPrice);
  const totalItemsCount = useSelector(selectTotalItemsCount);

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
        <div className="header__wrap">
          {pathname !== "/cart" && (
            <>
              <Search />
              <div className="header__cart">
                <Link to="/cart" className="button button--cart">
                  <span>{cartTotalPrice} ₴</span>
                  <div className="button__delimiter"></div>
                  <SvgCart />
                  <span>{totalItemsCount}</span>
                </Link>
              </div>
            </>
          )}
          {/* {pathname !== "/cart" && (
            <div className="header__cart">
              <Link to="/cart" className="button button--cart">
                <span>{cartTotalPrice} ₴</span>
                <div className="button__delimiter"></div>
                <SvgCart />
                <span>{totalItemsCount}</span>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
export default Header;
