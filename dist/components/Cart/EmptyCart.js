"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const empty_cart_png_1 = __importDefault(require("../../assets/img/empty-cart.png"));
const EmptyCart = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container container--cart" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cart cart--empty" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430 \uD83D\uDE15" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\u0419\u043C\u043E\u0432\u0456\u0440\u043D\u043E, \u0412\u0438 \u0449\u0435 \u043D\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u044F\u043B\u0438 \u043F\u0456\u0446\u0443.", (0, jsx_runtime_1.jsx)("br", {}), "\u0429\u043E\u0431 \u0437\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u043F\u0456\u0446\u0443, \u043F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443."] }), (0, jsx_runtime_1.jsx)("img", { src: empty_cart_png_1.default, alt: "Empty cart" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/", className: "button button--black" }, { children: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430\u0437\u0430\u0434" }))] })) })));
};
exports.default = EmptyCart;
//# sourceMappingURL=EmptyCart.js.map