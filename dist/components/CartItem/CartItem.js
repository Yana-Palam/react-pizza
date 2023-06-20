"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const SvgMinus_1 = __importDefault(require("../svg/SvgMinus"));
const SvgPlus_1 = __importDefault(require("../svg/SvgPlus"));
const SvgCircle_1 = __importDefault(require("../svg/SvgCircle"));
const CartItem = ({ id, count, title, imageUrl, price, type, size, }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const isBtnDisabled = count === 1;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__item" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__item-wrapper-img" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cart__item-img" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "pizza-block__image", src: imageUrl, alt: "Pizza" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__item-info" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: title }), (0, jsx_runtime_1.jsxs)("p", { children: [type, ", ", size, " \u0441\u043C."] })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__item-wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart__item-count" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", disabled: isBtnDisabled, onClick: () => {
                                    dispatch((0, cartSlice_1.minusItem)(id));
                                }, className: "button button--outline button--circle cart__item-count-minus" }, { children: (0, jsx_runtime_1.jsx)(SvgMinus_1.default, {}) })), (0, jsx_runtime_1.jsx)("b", { children: count }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => {
                                    dispatch((0, cartSlice_1.plusItem)(id));
                                }, className: "button button--outline button--circle cart__item-count-plus" }, { children: (0, jsx_runtime_1.jsx)(SvgPlus_1.default, {}) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cart__item-price" }, { children: (0, jsx_runtime_1.jsxs)("b", { children: [price * count, " \u20B4"] }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => {
                            dispatch((0, cartSlice_1.removeItem)(id));
                        }, className: "cart__item-remove" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "button button--outline button--circle" }, { children: (0, jsx_runtime_1.jsx)(SvgCircle_1.default, {}) })) }))] }))] })));
};
exports.default = CartItem;
//# sourceMappingURL=CartItem.js.map