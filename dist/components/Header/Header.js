"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const Search_1 = __importDefault(require("../Search"));
const pizza_logo_svg_1 = __importDefault(require("../../assets/img/pizza-logo.svg"));
const SvgCart_1 = __importDefault(require("../svg/SvgCart"));
const cartSelectors_1 = require("../../redux/cart/cartSelectors");
const Header = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const cartTotalPrice = (0, react_redux_1.useSelector)(cartSelectors_1.selectTotalPrice);
    const totalItemsCount = (0, react_redux_1.useSelector)(cartSelectors_1.selectTotalItemsCount);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header__logo" }, { children: [(0, jsx_runtime_1.jsx)("img", { width: "38", src: pizza_logo_svg_1.default, alt: "Pizza logo" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "React Pizza" }), (0, jsx_runtime_1.jsx)("p", { children: "\u043D\u0430\u0439\u0441\u043C\u0430\u0447\u043D\u0456\u0448\u0430 \u043F\u0456\u0446\u0430 \u0443 \u0432\u0441\u0435\u0441\u0432\u0456\u0442\u0456" })] })] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header__wrap" }, { children: pathname !== "/cart" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.default, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header__cart" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: "/cart", className: "button button--cart" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [cartTotalPrice, " \u20B4"] }), (0, jsx_runtime_1.jsx)("div", { className: "button__delimiter" }), (0, jsx_runtime_1.jsx)(SvgCart_1.default, {}), (0, jsx_runtime_1.jsx)("span", { children: totalItemsCount })] })) }))] })) }))] })) })));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map