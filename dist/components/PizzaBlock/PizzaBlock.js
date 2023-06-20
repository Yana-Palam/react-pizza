"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const cartSelectors_1 = require("../../redux/cart/cartSelectors");
const PizzaBlock = ({ id, title, imageUrl, price, sizes, types, }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const typeNames = ["тонке", "традиційне"];
    const findItem = (0, react_redux_1.useSelector)((0, cartSelectors_1.selectCartItemById)(id));
    const addedCount = findItem ? findItem.count : 0;
    const [activeType, setActiveType] = (0, react_1.useState)(0);
    const [activeSize, setActiveSize] = (0, react_1.useState)(0);
    const onClickAdd = () => {
        const item = {
            id,
            title,
            imageUrl,
            price,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "pizza-block-wrapper" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pizza-block" }, { children: [(0, jsx_runtime_1.jsx)("img", { width: "260", height: "260", className: "pizza-block__image", src: imageUrl, alt: "Pizza" }), (0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "pizza-block__title" }, { children: title })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pizza-block__selector" }, { children: [(0, jsx_runtime_1.jsx)("ul", { children: types.map((typeId, index) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => {
                                    setActiveType(typeId);
                                }, className: activeType === index ? "active" : "" }, { children: typeNames[typeId] }), index))) }), (0, jsx_runtime_1.jsx)("ul", { children: sizes.map((size, index) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => {
                                    setActiveSize(index);
                                }, className: activeSize === index ? "active" : "" }, { children: [size, " \u0441\u043C."] }), index))) })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pizza-block__bottom" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pizza-block__price" }, { children: ["\u0432\u0456\u0434 ", price, " \u20B4"] })), (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: onClickAdd, type: "button", className: "button button--outline button--add" }, { children: [(0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z", fill: "white" }) })), (0, jsx_runtime_1.jsx)("span", { children: "\u0414\u043E\u0434\u0430\u0442\u0438" }), addedCount > 0 && (0, jsx_runtime_1.jsx)("i", { children: addedCount })] }))] }))] })) })));
};
exports.default = PizzaBlock;
//# sourceMappingURL=PizzaBlock.js.map