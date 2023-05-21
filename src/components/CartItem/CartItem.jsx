import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, plusItem, minusItem } from "../../redux/cart/cartSlice";
import SvgMinus from "../svg/SvgMinus";
import SvgPlus from "../svg/SvgPlus";
import SvgCircle from "../svg/SvgCircle";

function CartItem({ pizza }) {
  const { id, count, title, imageUrl, price, type, size } = pizza;
  const dispatch = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item-wrapper-img">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>
            {type}, {size} см.
          </p>
        </div>
      </div>
      <div className="cart__item-wrapper">
        <div className="cart__item-count">
          <div
            onClick={() => {
              dispatch(minusItem(id));
            }}
            className="button button--outline button--circle cart__item-count-minus"
          >
            <SvgMinus />
          </div>
          <b>{count}</b>
          <div
            onClick={() => {
              dispatch(plusItem(id));
            }}
            className="button button--outline button--circle cart__item-count-plus"
          >
            <SvgPlus />
          </div>
        </div>
        <div className="cart__item-price">
          <b>{price * count} ₴</b>
        </div>
        <div
          onClick={() => {
            dispatch(removeItem(id));
          }}
          className="cart__item-remove"
        >
          <div className="button button--outline button--circle">
            <SvgCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
