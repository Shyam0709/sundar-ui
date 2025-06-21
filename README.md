🌟 sundar-ui

A simple, lightweight React component library with plug-and-play UI elements like Navbar.
Customize colors, titles, and links effortlessly. Perfect for modern React projects.

🚀 Installation
```bash

npm install sundar-ui
```
⚡ Quick Start
```bash
import React from "react";
import { Navbar } from "sundar-ui";

function App() {
  return (
    <div>
      <Navbar
        title="My Awesome App"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundColor="purple"
        textColor="#fff"
      />

      <main style={{ padding: "2rem" }}>
        <h1>Welcome to My App!</h1>
      </main>
    </div>
  );
}

export default App;
```
🎨 Component Props
✅ Navbar
title	string	—	The site or brand name.
links	{ label: string, href: string }[]	—	Array of navigation links.
backgroundColor	string	#333	Background color of the navbar.
textColor	string	#fff	Color for text and links.

📌 Important CSS Note
To ensure the Navbar is truly full-width:

✅ Use this recommended body style:
```bash
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  /* Do NOT use `display: flex; place-items: center;` globally. */
}
```
👉 To center your page content, wrap it in a <main> and use flex on that, not on body.

🗂 Current Components
✅ Navbar — ready to use!

⏳ Button — coming soon!

⏳ Footer, Card, Alert — planned!

🤝 Contributing
We love contributions! Here’s how to get involved:

1️⃣ Fork this repo
2️⃣ Create a feature branch
3️⃣ Add your component or fix
4️⃣ Run tests & lint
5️⃣ Open a pull request!

Feel free to open an issue for ideas, bugs, or requests.

📝 License
MIT © Shyam Sundar

🔗 Useful Links
📦 NPM: https://www.npmjs.com/package/sundar-ui

💻 GitHub: https://github.com/Shyam0709/sundar-ui

🎉 Happy building with sundar-ui!