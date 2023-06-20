"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./scss/app.scss");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const ErrorPage_1 = __importDefault(require("./components/ErrorPage/ErrorPage"));
const Layout_1 = __importDefault(require("./components/Layout/Layout"));
const Loader_1 = __importDefault(require("./components/Loader/Loader"));
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./pages/HomePage/HomePage"))));
const CartPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./pages/CartPage/CartPage"))));
const App = () => {
    const router = (0, react_router_dom_1.createBrowserRouter)([
        {
            path: "/",
            element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
            children: [
                {
                    index: true,
                    element: ((0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: (0, jsx_runtime_1.jsx)(Loader_1.default, {}) }, { children: (0, jsx_runtime_1.jsx)(HomePage, {}) }))),
                },
                {
                    path: "/cart",
                    element: ((0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: (0, jsx_runtime_1.jsx)(Loader_1.default, {}) }, { children: (0, jsx_runtime_1.jsx)(CartPage, {}) }))),
                },
                {
                    path: "*",
                    element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/", replace: true }),
                },
            ],
        },
    ], {
        basename: "/react-pizza",
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }) })));
};
exports.default = App;
//# sourceMappingURL=App.js.map