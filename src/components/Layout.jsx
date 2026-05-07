import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";

function Layout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-dot" />
          <span>SubsTracker</span>
        </div>
        <nav className="nav-links">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/subscriptions"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Subscriptions
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Settings
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <span className="mode-indicator">
            Mode: {darkMode ? "Dark" : "Light"}
          </span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1 className="topbar-title">Subscription Dashboard</h1>
            <p className="topbar-subtitle">Track your recurring expenses</p>
          </div>
          <div className="topbar-user">
            <div className="avatar-circle">S</div>
            <div className="topbar-user-info">
              <span className="topbar-user-name">Student User</span>
              <span className="topbar-user-role">Demo account</span>
            </div>
          </div>
        </header>
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}

export default Layout;
