import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ucclogo from "./assets/seamsucc.png";

function UserNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        padding: "10px 20px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Styling Block */}
      <style>
        {`
          .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            font-size: 15px;
            padding: 8px 10px;
            border-radius: 4px;
          }

          .nav-links a:hover {
            color: orange;
            transition: 0.3s;
          }

          .nav-links a.active-link {
            color: orange !important;
            font-weight: bold;
            border-bottom: 2px solid orange;
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .nav-links {
              display: ${menuOpen ? "flex" : "none"};
              flex-direction: column;
              gap: 15px;
              text-align: center;
              padding: 20px 0;
            }
            .menu-btn {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .nav-links {
              display: flex;
            }
            .menu-btn {
              display: none;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ucclogo}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "green" }}>
            S.E.A.M.S
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="menu-btn"
          onClick={toggleMenu}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className="nav-links" style={{ gap: "30px" }}>
          <Link
            to="/student-dashboard"
            className={location.pathname === "/student-dashboard" ? "active-link" : ""}
          >
            HOME
          </Link>
          <Link
            to="/student-calendar"
            className={location.pathname === "/student-calendar" ? "active-link" : ""}
          >
            CALENDAR
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            CONTACT
          </Link>
          <a
            href="#"
            className={location.pathname === "/profile" ? "active-link" : ""}
          >
            PROFILE
          </a>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
