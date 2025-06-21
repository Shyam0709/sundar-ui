// src/components/Navbar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Navbar = ({
  title,
  links,
  backgroundColor = "#333",
  textColor = "#fff"
}) => {
  return /* @__PURE__ */ jsxs("nav", { style: { backgroundColor, color: textColor, padding: "1rem" }, children: [
    /* @__PURE__ */ jsx("h1", { style: { display: "inline-block", marginRight: "2rem" }, children: title }),
    links.map((link) => /* @__PURE__ */ jsx(
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
export {
  Navbar
};
