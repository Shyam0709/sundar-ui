// src/components/Navbar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Navbar = ({
  title,
  links,
  backgroundColor = "#333",
  textColor = "#fff"
}) => {
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      style: {
        width: "100%",
        // ✅ force full width
        backgroundColor,
        color: textColor,
        display: "flex",
        // ✅ flex layout
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        boxSizing: "border-box"
        // ✅ padding inside
      },
      children: [
        /* @__PURE__ */ jsx("h1", { style: { margin: 0 }, children: title }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "1.5rem" }, children: links.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            style: {
              color: textColor,
              textDecoration: "none",
              fontWeight: "500"
            },
            children: link.label
          },
          link.href
        )) })
      ]
    }
  );
};
export {
  Navbar
};
