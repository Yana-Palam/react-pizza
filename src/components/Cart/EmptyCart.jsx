import React from "react";
import { Link } from "react-router-dom";

import emptyCart from "../../assets/img/empty-cart.png";

function EmptyCart() {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Корзина пуста <icon>😕</icon>
        </h2>
        <p>
          Ймовірно, Ви ще не замовляли піцу.
          <br />
          Щоб замовити піцу, перейдіть на головну сторінку.
        </p>
        <img src={emptyCart} alt="Empty cart" />
        <Link to="/" className="button button--black">
          Повернутися назад
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
