# MedVault — Lecture Archive

MedVault is a beautifully curated, high-performance archive of medical lecture notes covering Pathology, Pharmacology, Haematology, and Microbiology. Built for medical students, it provides instant access to study resources and summaries.

---

## 🎧 Optimal Study Workflow: The "Deep Dive" Method

For the best learning experience, try this combined study method:
1. **Open the Google Docs note** from MedVault on one half of your screen to read through the detailed lecture outlines and slides.
2. **Launch the NotebookLM link** on the other half of your screen.
3. **Listen to the AI-generated Deep Dive audio podcast** while reading along with the source material. This multi-sensory approach dramatically improves retention and helps clarify complex medical pathways!

---

## ✨ Features

- ☀️🌙 **Liquid Glass Design System:** Fully immersive, premium theme with frosted glass panels, interactive edge glows, floating background mesh orbs, and organic grain overlays.
- 🎨 **Light & Dark Modes:** Toggles instantly with automatic theme preference persistence via `localStorage`.
- 🔍 **Fuzzy Search & Navigation:** Instantly search through topics using fuzzy matching. Press `Cmd + K` or `Ctrl + K` to jump straight to the search box, and `Esc` to clear.
- 📂 **Subject Atmosphere Filters:** Clean subject pills that dynamically shift the color palette and atmosphere of the entire site based on your current focus.
- 🔗 **Interactive Link Tool:** Add new Google Docs or NotebookLM links on the fly using the built-in modal panels.
- 📈 **GitHub Changelog API:** Live display of the latest updates pulled directly from the repository's commit history.

---

## 🛠️ Development & Building

The application uses **Babel pre-compilation** to avoid slow translation steps in the browser, enabling lightning-fast loading speeds on mobile devices.

### Prerequisites
Make sure you have Node.js and npm installed.

### Setup
1. Clone the repository.
2. Install the compilation dependencies:
   ```bash
   npm install
   ```

### Running Locally
To run a local server and test changes:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Building / Compiling Changes
If you edit the React source code inside [`src/app.jsx`](src/app.jsx), you must compile it into plain JavaScript ([`app.js`](app.js)) so the browser can read it:
```bash
npm run build
```

> [!NOTE]
> **Lecture Data Updates:** If you are only updating the lecture data inside [`data.js`](data.js), **you do not need to rebuild the project**. The pre-compiled app will automatically read and render any data additions.