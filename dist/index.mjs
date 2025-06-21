// src/components/Navbar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Navbar = ({
  title,
  links,
  backgroundColor = "#333",
  textColor = "#fff"
}) => {
  return /* @__PURE__ */ jsx(
    "header",
    {
      style: {
        backgroundColor,
        color: textColor,
        padding: "1rem 2rem",
        width: "100%",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ jsxs(
        "nav",
        {
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ jsx("h1", { style: { margin: 0 }, children: title }),
            /* @__PURE__ */ jsx("div", { children: links.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                style: {
                  color: textColor,
                  marginLeft: "1.5rem",
                  textDecoration: "none",
                  fontWeight: "500"
                },
                children: link.label
              },
              link.href
            )) })
          ]
        }
      )
    }
  );
};
export {
  Navbar
};
