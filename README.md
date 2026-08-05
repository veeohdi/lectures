# MedVault

MedVault is a web-based archive of medical lecture notes covering Pathology, Pharmacology, Haematology, and Microbiology. It provides study resources and outlines for medical students.

---

## 📖 Study Workflow
The interface links study notes alongside audio tools:
1. **Google Docs notes** are linked for reading detailed lecture outlines and slides.
2. **NotebookLM links** are provided to listen to AI-generated audio summaries alongside the source material.

---

## 🛠️ Features
- **Light & Dark Mode**: Theme preferences persist via `localStorage`.
- **Fuzzy Search**: Filter lecture topics. Jump directly to search with `Cmd + K` or `Ctrl + K`, and clear with `Esc`.
- **Subject Filters**: Quick-filtering links by Pathology, Pharmacology, Haematology, and Microbiology.
- **Link Builder**: A modal interface to add new Google Docs or NotebookLM links to the index.
- **GitHub Commit Feed**: Displays recent repository updates using the GitHub commits API.

---

## 💻 Development & Local Setup

The project uses Babel to compile React code before rendering in the browser.

### Setup
1. Clone this repository.
2. Install compilation dependencies:
   ```bash
   npm install
   ```

### Running Locally
To serve the files locally:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your web browser.

### Building
If you modify the React codebase in [`src/app.jsx`](src/app.jsx), compile it to static JavaScript ([`app.js`](app.js)):
```bash
npm run build
```

> [!NOTE]
> **Data Updates**: If you only update lecture links or metadata in [`data.js`](data.js), **you do not need to rebuild the project**. The page reads modifications directly from this file.
