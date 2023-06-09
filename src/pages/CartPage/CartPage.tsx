import React from "react";
import EmptyCart from "../../components/Cart/EmptyCart";
import Cart from "../../components/Cart/Cart";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartPage: React.FC = () => {
  const items = useSelector(selectCartItems);
  return <>{items.length === 0 ? <EmptyCart /> : <Cart />}</>;
};

export default CartPage;
