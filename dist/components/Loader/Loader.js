"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_loader_spinner_1 = require("react-loader-spinner");
const Loader_module_scss_1 = __importDefault(require("./Loader.module.scss"));
const Loader = () => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Loader_module_scss_1.default.loader }, { children: (0, jsx_runtime_1.jsx)(react_loader_spinner_1.Oval, { height: 80, width: 80, color: "#fe5f1e", wrapperStyle: {}, wrapperClass: "", visible: true, ariaLabel: "oval-loading", secondaryColor: "#cf5a2b", strokeWidth: 2, strokeWidthSecondary: 2 }) })));
exports.default = Loader;
//# sourceMappingURL=Loader.js.map