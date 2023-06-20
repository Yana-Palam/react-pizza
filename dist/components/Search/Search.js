"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Search_module_scss_1 = __importDefault(require("./Search.module.scss"));
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const searchSlice_1 = require("../../redux/search/searchSlice");
const pizzasOperations_1 = require("../../redux/pizzas/pizzasOperations");
const store_1 = require("../../redux/store");
const search_icon_svg_1 = require("../../assets/img/search_icon.svg");
const close_icon_svg_1 = require("../../assets/img/close_icon.svg");
const DEBOUNCE_DELAY = 150;
const Search = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const [search, setSearch] = (0, react_1.useState)("");
    const inputRef = (0, react_1.useRef)(null);
    const onClickClear = () => {
        var _a;
        setSearch("");
        dispatch((0, searchSlice_1.setSearchValue)(""));
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        dispatch((0, pizzasOperations_1.fetchPizzas)({
            categoryId: 0,
            sortValue: {
                name: "популярністю (за зменшенням)",
                sortProperty: "rating",
                order: "desc",
            },
            searchValue: "",
        }));
    };
    const updateSearchValue = (0, react_1.useCallback)((0, lodash_debounce_1.default)((value) => {
        dispatch((0, searchSlice_1.setSearchValue)(value));
    }, DEBOUNCE_DELAY), []);
    const onChangeInput = (e) => {
        const { value } = e.target;
        setSearch(value);
        updateSearchValue(value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Search_module_scss_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)(search_icon_svg_1.ReactComponent, { width: 22, height: 22, className: Search_module_scss_1.default.iconSearch }), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, onChange: onChangeInput, value: search, className: Search_module_scss_1.default.input, placeholder: "\u041F\u043E\u0448\u0443\u043A \u043F\u0456\u0446\u0438...", name: "search" }), search && ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => {
                    onClickClear();
                }, className: Search_module_scss_1.default.clearBtn }, { children: (0, jsx_runtime_1.jsx)(close_icon_svg_1.ReactComponent, { width: 20, height: 20 }) })))] })));
};
exports.default = Search;
//# sourceMappingURL=Search.js.map