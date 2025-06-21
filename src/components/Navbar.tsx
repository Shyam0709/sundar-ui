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
    <nav style={{ backgroundColor, color: textColor, padding: "1rem" }}>
      <h1 style={{ display: "inline-block", marginRight: "2rem" }}>{title}</h1>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{ color: textColor, marginRight: "1rem", textDecoration: "none" }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
