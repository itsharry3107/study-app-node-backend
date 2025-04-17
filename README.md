# 📚 Study App Backend

This is the backend API service for the Study App, built with TypeScript. It’s currently in its initial setup phase, with a focus on clean architecture, maintainability, and developer productivity.

---

## 📦 Features

- 🚀 Fast development with `ts-node-dev`
- 🧼 Linting with ESLint + Husky Git hooks
- 🔐 Semantic versioning with `standard-version`
- 📘 Auto-generated documentation with TypeDoc
- 🛠 Easy deployment via GitHub Pages

## 🚀 Getting Started

### 1. Clone the Repository

```bash
<<<<<<< HEAD
git clone https://github.com/rit3zh/study-app-node-backend.git
=======
git clone https://github.com/your-username/study-app-node-backend.git
>>>>>>> 9144fa0 (Updated README)
cd study-app-node-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Mode

```bash
npm run dev
```

This uses `ts-node-dev` for live reloading.

---

## 🛠 Project Structure

```
study-app-node-backend/
├── src/
│   └── index.ts      # Entry point
├── .husky/           # Git hooks
├── dist/             # Compiled output (ignored by git)
├── docs/             # Auto-generated API docs (via TypeDoc)
├── tsconfig.json
└── package.json
```

---

## 📜 Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with live reload    |
| `npm run build`   | Compile TS to JS into `dist/`        |
| `npm run start`   | Run the compiled code (production)   |
| `npm run lint`    | Run ESLint on `src/` files           |
| `npm run docs`    | Generate documentation using TypeDoc |
| `npm run release` | Versioning + changelog + docs        |

---

## ✅ Commit Standards

Please follow [Conventional Commits](https://www.conventionalcommits.org/) when pushing code:

```
feat: add user login endpoint
fix: resolve crash when submitting form
chore: update dependencies
```

This helps automate changelogs and versioning with `standard-version`.

---

## 📘 Documentation

To generate local documentation:

```bash
npm run docs
```

The HTML docs will be available in the `docs/` folder.

---

## 🧪 Coming Soon

- Routes and API structure
- Controllers and Services
- Database integration
- Auth system

---
