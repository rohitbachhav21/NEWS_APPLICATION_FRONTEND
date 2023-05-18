
import React from "react";
import "./Navbar.css"
import { useState } from "react";


const Navbar = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-primary" expanded={expanded}>
    <div className="container-fluid">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" onClick={() => setExpanded(expanded ? false : "expanded")}>
        <ul className="navbar-nav">
        <li className="nav-item">
                 <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/"
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/health"
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/sports"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/entertainment"
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/business"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/science"
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a text-white mx-2"
                  style={{ textDecoration: "none" }}
                  href="/technology"
                >
                  Technology
                </a>
              </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
