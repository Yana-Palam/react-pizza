import React from "react";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import SvgCartClear from "../svg/SvgCartClear";
import SvgCart from "../svg/SvgCart";
import SvgGoBack from "../svg/SvgGoBack";

function Cart() {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <SvgCart />
            Корзина
          </h2>
          <div className="cart__clear">
            <SvgCartClear />

            <span>Очистити корзину</span>
          </div>
        </div>
        <div className="content__items">
          {[...new Array(3)].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Усього піци: <b>3 шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сума замовлення: <b>900 ₴</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <SvgGoBack />
              <span>Повернутися назад</span>
            </Link>

            <div className="button pay-btn">
              <span>Оплатити зараз</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
