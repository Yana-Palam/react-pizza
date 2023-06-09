import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
  selectTotalItemsCount,
} from "../../redux/cart/cartSelectors";
import { clearItems } from "../../redux/cart/cartSlice";
import CartItem from "../CartItem/CartItem";
import SvgCartClear from "../svg/SvgCartClear";
import SvgCart from "../svg/SvgCart";
import SvgGoBack from "../svg/SvgGoBack";

type Item = {
  id: string;
  count: number;
  title: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
};

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items: Item[] = useSelector(selectCartItems);
  const totalItemsCount = useSelector(selectTotalItemsCount);
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
            onClick={() => {
              dispatch(clearItems());
            }}
            className="cart__clear"
          >
            <SvgCartClear />

            <span>Очистити корзину</span>
          </div>
        </div>
        <div className="content__items">
          {items.map(
            (
              { id, count, title, imageUrl, price, type, size },
              index: number
            ) => (
              <CartItem
                id={id}
                count={count}
                title={title}
                imageUrl={imageUrl}
                price={price}
                type={type}
                size={size}
                key={index}
              />
            )
          )}
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
};

export default Cart;
