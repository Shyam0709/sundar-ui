# Sundar UI

A simple React UI component library with customizable components.

## Install

```bash
npm install sundar-ui

Usage
jsx
import { Navbar } from "sundar-ui";

<Navbar
  title="My Website"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }
  ]}
  backgroundColor="#6200ea"
  textColor="#fff"
/>