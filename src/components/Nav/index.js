import React from "react";
import Profile from "../../assets/cover/Profile.png";

function Nav() {

  return (
    <header className="flex-row px-1">
      <h2>
        <p>
          
          <img src={Profile} alt="Preview of The Allergy Free Kitchen App" /> {" "}
            
          Joseph James Craig Cooper
        </p>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            About Me
          </li>
          <li className="mx-2">
            Contact Me
          </li>
          <li className="mx-2">
            My Work
          </li>
          <li className="mx-2">
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
