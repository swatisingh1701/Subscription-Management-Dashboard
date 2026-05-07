import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useMemo, createContext } from "react";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const themeValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => setDarkMode((prev) => !prev),
    }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={darkMode ? "app app-dark" : "app"}>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;