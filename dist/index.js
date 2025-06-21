"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Navbar: () => Navbar
});
module.exports = __toCommonJS(index_exports);

// src/components/Navbar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Navbar = ({
  title,
  links,
  backgroundColor = "#333",
  textColor = "#fff"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { style: { backgroundColor, color: textColor, padding: "1rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { display: "inline-block", marginRight: "2rem" }, children: title }),
    links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "a",
      {
        href: link.href,
        style: { color: textColor, marginRight: "1rem", textDecoration: "none" },
        children: link.label
      },
      link.href
    ))
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Navbar
});
