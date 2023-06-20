"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const EmptyCart_1 = __importDefault(require("../../components/Cart/EmptyCart"));
const Cart_1 = __importDefault(require("../../components/Cart/Cart"));
const react_redux_1 = require("react-redux");
const cartSelectors_1 = require("../../redux/cart/cartSelectors");
const CartPage = () => {
    const items = (0, react_redux_1.useSelector)(cartSelectors_1.selectCartItems);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: items.length === 0 ? (0, jsx_runtime_1.jsx)(EmptyCart_1.default, {}) : (0, jsx_runtime_1.jsx)(Cart_1.default, {}) });
};
exports.default = CartPage;
//# sourceMappingURL=CartPage.js.map