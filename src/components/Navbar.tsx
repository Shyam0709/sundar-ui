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
    <header
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "1rem 2rem",
        width: "100%",            // ✅ force full width
        boxSizing: "border-box",  // ✅ include padding
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",    // ✅ optional: limit content width
          margin: "0 auto",      // ✅ center content
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>{title}</h1>
        <div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: textColor,
                marginLeft: "1.5rem",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
