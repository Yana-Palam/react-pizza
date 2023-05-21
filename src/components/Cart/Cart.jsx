import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cartSelectors";
import { clearItems } from "../../redux/cart/cartSlice";
import CartItem from "../CartItem/CartItem";
import SvgCartClear from "../svg/SvgCartClear";
import SvgCart from "../svg/SvgCart";
import SvgGoBack from "../svg/SvgGoBack";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItemsCount = items.reduce((totalCount, item) => {
    return totalCount + item.count;
  }, 0);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <SvgCart />
            Корзина
          </h2>
          <div
            // onClick={() => {
            //   dispatch(clearItems());
            // }}
            className="cart__clear"
          >
            <SvgCartClear />

            <span>Очистити корзину</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item, index) => (
            <CartItem pizza={item} key={index} />
          ))}
          {/* {[...new Array(3)].map((item, index) => (
            <CartItem key={index} />
          ))} */}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Усього піци: <b>{totalItemsCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сума замовлення: <b>{totalPrice} ₴</b>{" "}
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
