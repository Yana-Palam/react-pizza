"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const filtersSelectors_1 = require("../../redux/filters/filtersSelectors");
const filtersSlice_1 = require("../../redux/filters/filtersSlice");
const sortValues = [
    {
        name: "популярністю (за зменшенням)",
        sortProperty: "rating",
        order: "desc",
    },
    {
        name: "популярністю (за збільшенням)",
        sortProperty: "rating",
        order: "asc",
    },
    {
        name: "ціною (за зменшенням)",
        sortProperty: "price",
        order: "desc",
    },
    {
        name: "ціною (за збільшенням)",
        sortProperty: "price",
        order: "asc",
    },
    {
        name: "алфавітом (від А до Я)",
        sortProperty: "title",
        order: "asc",
    },
    {
        name: "алфавітом (від Я до А)",
        sortProperty: "title",
        order: "desc",
    },
];
const Sort = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const sortRef = (0, react_1.useRef)(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    const sortValue = (0, react_redux_1.useSelector)(filtersSelectors_1.selectSort);
    (0, react_1.useEffect)(() => {
        const onClickOutside = (e) => {
            const target = e.target;
            if (target.offsetParent !== sortRef.current) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", onClickOutside);
        return () => {
            document.removeEventListener("click", onClickOutside);
        };
    }, []);
    const onSelectValue = (value) => {
        dispatch((0, filtersSlice_1.setSortValue)(value));
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: sortRef, className: "sort" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "sort__label" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z", fill: "#2C2C2C" }) })), (0, jsx_runtime_1.jsx)("b", { children: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430:" })] }), (0, jsx_runtime_1.jsx)("span", Object.assign({ onClick: () => {
                            setIsOpen((prev) => !prev);
                        } }, { children: sortValue.name }))] })), isOpen && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "sort__popup" }, { children: (0, jsx_runtime_1.jsx)("ul", { children: sortValues.map((obj, index) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => {
                            onSelectValue(obj);
                        }, className: obj.sortProperty === sortValue.sortProperty &&
                            obj.order === sortValue.order
                            ? "active"
                            : "" }, { children: obj.name }), index))) }) })))] })));
};
exports.default = Sort;
//# sourceMappingURL=Sort.js.map