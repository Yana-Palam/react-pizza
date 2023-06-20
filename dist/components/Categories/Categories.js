"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const filtersSelectors_1 = require("../../redux/filters/filtersSelectors");
const filtersSlice_1 = require("../../redux/filters/filtersSlice");
const categories = [
    "Всі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
];
const Categories = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const categoryId = (0, react_redux_1.useSelector)(filtersSelectors_1.selectCategoryId);
    const onChangeCategory = (id) => {
        dispatch((0, filtersSlice_1.setCategoryId)(id));
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "categories" }, { children: (0, jsx_runtime_1.jsx)("ul", { children: categories.map((item, index) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => {
                    onChangeCategory(index);
                }, className: categoryId === index ? "active" : "" }, { children: item }), index))) }) })));
};
exports.default = Categories;
//# sourceMappingURL=Categories.js.map