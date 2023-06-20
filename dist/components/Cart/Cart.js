"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const cartSelectors_1 = require("../../redux/cart/cartSelectors");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const CartItem_1 = __importDefault(require("../CartItem/CartItem"));
const SvgCartClear_1 = __importDefault(require("../svg/SvgCartClear"));
const SvgCart_1 = __importDefault(require("../svg/SvgCart"));
const SvgGoBack_1 = __importDefault(require("../svg/SvgGoBack"));
const Cart = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const items = (0, react_redux_1.useSelector)(cartSelectors_1.selectCartItems);
    const totalItemsCount = (0, react_redux_1.useSelector)(cartSelectors_1.selectTotalItemsCount);
    const totalPrice = (0, react_redux_1.useSelector)(cartSelectors_1.selectTotalPrice);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container container--cart" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__top" }, { children: [(0, jsx_runtime_1.jsxs)("h2", Object.assign({ className: "content__title" }, { children: [(0, jsx_runtime_1.jsx)(SvgCart_1.default, {}), "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ onClick: () => {
                                dispatch((0, cartSlice_1.clearItems)());
                            }, className: "cart__clear" }, { children: [(0, jsx_runtime_1.jsx)(SvgCartClear_1.default, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" })] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "content__items" }, { children: items.map(({ id, count, title, imageUrl, price, type, size }, index) => ((0, jsx_runtime_1.jsx)(CartItem_1.default, { id: id, count: count, title: title, imageUrl: imageUrl, price: price, type: type, size: size }, index))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__bottom" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__bottom-details" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [" ", "\u0423\u0441\u044C\u043E\u0433\u043E \u043F\u0456\u0446\u0438: ", (0, jsx_runtime_1.jsxs)("b", { children: [totalItemsCount, " \u0448\u0442."] }), " "] }), (0, jsx_runtime_1.jsxs)("span", { children: [" ", "\u0421\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F: ", (0, jsx_runtime_1.jsxs)("b", { children: [totalPrice, " \u20B4"] }), " "] })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__bottom-buttons" }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: "/", className: "button button--outline button--add go-back-btn" }, { children: [(0, jsx_runtime_1.jsx)(SvgGoBack_1.default, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430\u0437\u0430\u0434" })] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "button pay-btn" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u0440\u0430\u0437" }) }))] }))] }))] })) })));
};
exports.default = Cart;
//# sourceMappingURL=Cart.js.map