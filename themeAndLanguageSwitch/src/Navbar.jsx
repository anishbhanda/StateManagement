import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Navbar() {
  const { theme, toggleTheme, toggleLanguage, language } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      style={{ width: "100%", transition: "0.3s ease-in-out" }}
    >
      <div className="container-fluid">
        <a
          className={`navbar-brand ${theme === "light" ? "text-dark" : "text-light"
            }`}
          href="#"
          style={{ fontWeight: "600", fontSize: "1.25rem" }}
        >
          My Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                  }`}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                  }`}
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                  }`}
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 flex-wrap">
            <select
              className={`form-select form-select-sm ${theme === "light"
                ? "bg-light text-dark border-dark"
                : "bg-dark text-light border-secondary"
                }`}
              style={{
                width: "160px",
                minWidth: "140px",
                borderRadius: "8px",
              }}
              value={language}
              onChange={(e) => toggleLanguage(e.target.value)}
              aria-label="Language select"
            >
              <option>Select Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="fr">Spanish</option>
            </select>

            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="themeSwitch"
                onChange={toggleTheme}
                checked={theme === "dark"}
                style={{ cursor: "pointer" }}
              />
              <label
                className={`form-check-label ${theme === "light" ? "text-dark" : "text-light"
                  }`}
                htmlFor="themeSwitch"
                style={{ userSelect: "none" }}
              >
                {theme === "light" ? "Light Mode" : "Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
