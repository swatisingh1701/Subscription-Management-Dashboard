# Subscription Management Dashboard

A simple **Subscription Management Dashboard** built with **React**, **Vite**, and **React Router v6**.  
The app is intentionally kept clean and student-friendly, with basic features for managing and analyzing subscriptions and a functional dark mode.

---

## Features

### Dashboard
- Shows total number of subscriptions (sample data)
- Shows total monthly cost
- Clean, card-based UI with responsive layout

### Subscriptions
- Add a new subscription (name + monthly price)
- Delete existing subscriptions
- Display list in a simple table-style layout
- Running total of all subscriptions

### Analytics
- Uses a small sample dataset (local array)
- Displays:
  - Most expensive subscription
  - Average monthly cost
- Simple insight card with a short tip

### Settings
- **Dark Mode toggle** (affects the whole app)
- **Profile section** (local UI state: name and email inputs)
- **Notification toggle** (UI only, no backend)
- Clean settings cards with modern toggle UI

### Layout & UI
- Sidebar with navigation:
  - Dashboard
  - Subscriptions
  - Analytics
  - Settings
- Top header bar with title and simple user info
- Active link highlighting in the sidebar
- Modern CSS:
  - Soft colors
  - Rounded cards
  - Light shadows
  - Responsive for smaller screens (sidebar hides on mobile)

---

## Tech Stack

- **React** (functional components, hooks)
- **Vite** (fast dev server and build)
- **React Router v6**
- **Plain CSS** (no Tailwind, no external UI library)
- **No Redux / external state libraries**  
  Only `useState`, `useContext`, and `useMemo` are used.

---

## Folder Structure

```bash
src/
  components/
    Layout.jsx
  pages/
    Dashboard.jsx
    Subscriptions.jsx
    Analytics.jsx
    Settings.jsx
  App.jsx
  main.jsx
  index.css
```

---

## Getting Started

### 1. Create the Vite project

If you haven’t created the project yet:

```bash
npm create vite@latest subscription-dashboard -- --template react
cd subscription-dashboard
```

### 2. Install dependencies

```bash
npm install
npm install react-router-dom
```

### 3. Replace `src` contents

Delete or overwrite the existing files in `src/` with:

- `main.jsx`
- `App.jsx`
- `components/Layout.jsx`
- `pages/Dashboard.jsx`
- `pages/Subscriptions.jsx`
- `pages/Analytics.jsx`
- `pages/Settings.jsx`
- `index.css`

Make sure the paths match exactly:
- `Layout.jsx` is inside `src/components/`
- All page components are inside `src/pages/`

### 4. Run the development server

```bash
npm run dev
```

Open the printed URL (usually `http://localhost:5173`) in your browser.

---

## Scripts

Common `package.json` scripts from a Vite React project:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview the production build
```

---

## How State Is Handled

- **Dark Mode**:
  - Stored in `App.jsx` using `useState`
  - Provided to the app through `ThemeContext`
  - `Layout` and `Settings` use this context to read/toggle dark mode
  - CSS uses `.app` and `.app-dark` classes to switch themes

- **Subscriptions**:
  - `Subscriptions.jsx` keeps its own local list using `useState`
  - Add via form; delete via button
  - Dashboard and Analytics currently use their own small mock arrays to keep the example simple and easy to understand

You can later refactor this to lift subscription state to `App.jsx` or a context if you want shared data across pages.

---

## Possible Improvements (if you want to extend it)

- Share one subscription state between Dashboard, Subscriptions, and Analytics
- Add more fields (billing date, category, notes)
- Add filters (sort by price, search by name)
- Persist data to `localStorage` so the list survives refresh
- Add charts (using a small chart library) on the Analytics page

---

## License

This project can be used freely for learning, practice, and portfolio purposes.

---

If you tell the target use (assignment, mini-project, or resume project), a short section can be added to this README to match that context. What is the main place where you plan to use this project (college submission, GitHub portfolio, or something else)?
