"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const qs_1 = __importDefault(require("qs"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const filtersSlice_1 = require("../../redux/filters/filtersSlice");
const pizzasOperations_1 = require("../../redux/pizzas/pizzasOperations");
const filtersSelectors_1 = require("../../redux/filters/filtersSelectors");
const searchSelectors_1 = require("../../redux/search/searchSelectors");
const pizzasSelectors_1 = require("../../redux/pizzas/pizzasSelectors");
const Categories_1 = __importDefault(require("../../components/Categories/Categories"));
const Sort_1 = __importDefault(require("../../components/Sort"));
const PizzaBlock_1 = __importDefault(require("../../components/PizzaBlock/PizzaBlock"));
const Skeleton_1 = __importDefault(require("../../components/PizzaBlock/Skeleton"));
const store_1 = require("../../redux/store");
const HomePage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, store_1.useAppDispatch)();
    const isSearchParams = (0, react_1.useRef)(false);
    const isMounted = (0, react_1.useRef)(false);
    const categoryId = (0, react_redux_1.useSelector)(filtersSelectors_1.selectCategoryId);
    const sortValue = (0, react_redux_1.useSelector)(filtersSelectors_1.selectSort);
    const searchValue = (0, react_redux_1.useSelector)(searchSelectors_1.selectSearchValue);
    const items = (0, react_redux_1.useSelector)(pizzasSelectors_1.selectPizzasItems);
    const isLoading = (0, react_redux_1.useSelector)(pizzasSelectors_1.selectIsLoading);
    const error = (0, react_redux_1.useSelector)(pizzasSelectors_1.selectError);
    const getPizzas = (categoryId, sortValue, searchValue) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch((0, pizzasOperations_1.fetchPizzas)({ categoryId, sortValue, searchValue }));
    });
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            const queryString = qs_1.default.stringify({
                categoryId,
                sort: sortValue,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortValue, searchValue]);
    (0, react_1.useEffect)(() => {
        const queryString = window.location.search;
        if (queryString) {
            const params = qs_1.default.parse(queryString.substring(1));
            dispatch((0, filtersSlice_1.setFilters)(params));
            isSearchParams.current = true;
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (!isSearchParams.current) {
            getPizzas(categoryId, sortValue, searchValue);
            window.scrollTo(0, 0);
        }
    }, [categoryId, sortValue, searchValue]);
    const pizzas = items.map((obj) => (0, jsx_runtime_1.jsx)(PizzaBlock_1.default, Object.assign({}, obj), obj.id));
    const skeletons = [...new Array(8)].map((_, index) => ((0, jsx_runtime_1.jsx)(Skeleton_1.default, {}, index)));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content__top" }, { children: [(0, jsx_runtime_1.jsx)(Categories_1.default, {}), (0, jsx_runtime_1.jsx)(Sort_1.default, {})] })), (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "content__title" }, { children: "\u0412\u0441\u0456 \u043F\u0456\u0446\u0438" })), error ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content__error-info" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \uD83D\uDE15" }), (0, jsx_runtime_1.jsx)("p", { children: "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043E\u0434\u0435\u0440\u0436\u0430\u0442\u0438 \u043F\u0456\u0446\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443 \u043F\u0456\u0437\u043D\u0456\u0448\u0435." })] }))) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "content__items" }, { children: isLoading ? (skeletons) : items.length > 0 ? (pizzas) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "content__error-info" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "\u041D\u0430 \u0436\u0430\u043B\u044C, \u0437\u0430 \u0412\u0430\u0448\u0438\u043C \u0437\u0430\u043F\u0438\u0442\u043E\u043C \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u0456\u0446." }) }))) })))] }));
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map