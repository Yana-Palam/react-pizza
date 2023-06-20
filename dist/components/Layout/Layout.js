"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const Header_1 = __importDefault(require("../Header"));
const Loader_1 = __importDefault(require("../Loader/Loader"));
const Layout = () => {
    const { state } = (0, react_router_dom_2.useNavigation)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)("main", { children: [state === "loading" && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Loader_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "content" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })) }))] })] })) }));
};
exports.default = Layout;
//# sourceMappingURL=Layout.js.map