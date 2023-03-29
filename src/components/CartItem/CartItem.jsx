import React from "react";
import SvgMinus from "../svg/SvgMinus";
import SvgPlus from "../svg/SvgPlus";
import SvgCircle from "../svg/SvgCircle";

function CartItem() {
  return (
    <div className="cart__item">
      <div className="cart__item-wrapper-img">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>Сирне курча</h3>
          <p>тонке тісто, 26 см.</p>
        </div>
      </div>
      <div className="cart__item-wrapper">
        <div className="cart__item-count">
          <div className="button button--outline button--circle cart__item-count-minus">
            <SvgMinus />
          </div>
          <b>2</b>
          <div className="button button--outline button--circle cart__item-count-plus">
            <SvgPlus />
          </div>
        </div>
        <div className="cart__item-price">
          <b>770 ₴</b>
        </div>
        <div className="cart__item-remove">
          <div className="button button--outline button--circle">
            <SvgCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
