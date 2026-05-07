import { useContext, useState } from "react";
import { ThemeContext } from "../App.jsx";

function Settings() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [profile, setProfile] = useState({
    name: "Student User",
    email: "student@example.com",
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Customize how the dashboard looks and behaves.</p>
      </div>

      <div className="settings-grid">
        {/* Theme / Dark Mode */}
        <div className="card settings-card">
          <h3 className="card-title">Appearance</h3>
          <p className="card-text">
            Switch between light and dark themes for the dashboard.
          </p>
          <div className="settings-row">
            <span>Dark Mode</span>
            <button
              type="button"
              className={darkMode ? "toggle toggle-on" : "toggle"}
              onClick={toggleDarkMode}
            >
              <span className="toggle-thumb" />
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="card settings-card">
          <h3 className="card-title">Profile</h3>
          <p className="card-text">
            Update your basic account information. This is just local UI state.
          </p>

          <div className="settings-form">
            <label className="form-label">
              Name
              <input
                type="text"
                className="input"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>
            <label className="form-label">
              Email
              <input
                type="email"
                className="input"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="card settings-card">
          <h3 className="card-title">Notifications</h3>
          <p className="card-text">
            (Static Part)
          </p>

          <div className="settings-row">
            <span>Email Notifications</span>
            <button
              type="button"
              className={
                notificationsEnabled ? "toggle toggle-on" : "toggle"
              }
              onClick={() =>
                setNotificationsEnabled((prev) => !prev)
              }
            >
              <span className="toggle-thumb" />
            </button>
          </div>
          <p className="settings-helper">
            Status:{" "}
            <strong>
              {notificationsEnabled ? "Enabled" : "Disabled"}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;