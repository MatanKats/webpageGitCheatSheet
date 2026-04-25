# Git & GitHub Cheatsheet - https://matankats.github.io/webpageGitCheatSheet/

A comprehensive, interactive web-based Git and GitHub cheatsheet. This project serves as a quick reference guide containing commands, explanations, and examples for various Git workflows, all presented in a modern, one-page interface.

## 🚀 Features

- **Interactive Search:** Real-time search functionality to quickly filter commands and descriptions.
- **Copy to Clipboard:** One-click copy buttons for every Git command to speed up development.
- **Dynamic Navigation:** A sidebar that tracks your scroll position and highlights the active section in view using the `IntersectionObserver` API.
- **Comprehensive Coverage:** Includes 11 detailed sections ranging from Installation and Setup to advanced workflows like Rewriting History and Stashing.
- **Responsive Design:** Neatly organized grid layout for easy readability and quick scanning.

## 🛠️ Technologies Used

This project was built entirely from scratch without the use of heavy frameworks or external dependencies to ensure maximum performance and simplicity.

- **HTML5:** Semantic structure for the layout and content arrays.
- **CSS3 (Vanilla):** Custom styling using modern layout techniques like Flexbox and CSS Grid. The design uses pure CSS for layout, typography, and interactive hover states. No CSS frameworks (like Tailwind or Bootstrap) were used.
- **JavaScript (Vanilla):** 
  - DOM manipulation for the real-time search filtering.
  - `navigator.clipboard` API for the snippet copy functionality (along with a robust legacy fallback).
  - `IntersectionObserver` API for efficient, scroll-based navigation highlighting.

## 📁 Project Structure

```text
.
├── index.html   # The main HTML structure containing all the cheatsheet content.
├── styles.css   # The custom CSS stylesheet providing the visual design and layout.
├── script.js    # The vanilla JavaScript file handling search, clipboard, and scroll logic.
└── README.md    # This documentation file.
```

## 🧠 What We Did

1. **Content Curation:** Gathered, organized, and structured commonly used Git commands into logical, progressive categories (from beginner "Setup" to advanced "Rewrite History").
2. **UI/UX Design:** Designed a clean layout with an intuitive sidebar navigation and an easily scannable grid of command cards. The UI is designed to look modern with icon headers and compact code blocks.
3. **Frontend Implementation:** 
   - Authored the HTML skeleton to group the commands inside structured `<section>` tags.
   - Designed the CSS architecture from the ground up to ensure the layout remains stable and visually pleasing on varied screen sizes.
   - Programmed the interactive JavaScript logical elements—allowing users to filter out irrelevant commands when searching for specific workflows, seamlessly copy code to their clipboard, and always know their position on the page via the dynamic sidebar tracking.

## 🏁 Getting Started

To view this project locally, no build tools, package managers, or server setups are required. 

Simply double-click the `index.html` file to open it in any modern web browser, or use an extension like Live Server in VS Code for hot-reloading if you wish to make edits.
