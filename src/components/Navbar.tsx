import React from "react";

export interface NavbarProps {
  title: string;
  links: { label: string; href: string }[];
  backgroundColor?: string;
  textColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  links,
  backgroundColor = "#333",
  textColor = "#fff",
}) => {
  return (
    <nav
      style={{
        width: "100%",           // ✅ force full width
        backgroundColor,
        color: textColor,
        display: "flex",         // ✅ flex layout
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        boxSizing: "border-box", // ✅ padding inside
      }}
    >
      <h1 style={{ margin: 0 }}>{title}</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: textColor,
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
