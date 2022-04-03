import React from "react";
import Profile from "../../../assets/cover/Profile.png";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="flex-row px-1">
      <h2>
        <ul className="flex-row">
          <li className="mx-1">
            <a href="https://github.com/JosephJamesCoop/joseph-cooper">
              <img className="icon" src={Profile} alt="Joseph Cooper" />{" "}
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className='{
                currentPage === "About" ? "nav-link active" : "nav-link"
              }  mx-4'
            >
              Joseph James Craig Cooper
            </a>
          </li>
        </ul>
      </h2>
      <nav>
        <h5>
          <ul className="flex-row">
            <li className="mx-1 mx-3">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a
                href="#work"
                onClick={() => handlePageChange("Work")}
                className={
                  currentPage === "Work" ? "nav-link active" : "nav-link"
                }
              >
                My Work
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </h5>
      </nav>
    </header>
  );
}

export default Nav;
