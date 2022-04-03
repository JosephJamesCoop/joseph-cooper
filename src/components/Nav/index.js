import React from "react";
import Profile from "../../assets/cover/Profile.png";

function Nav() {

  return (
    <header className="flex-row px-1">
      <h2>
      <ul className="flex-row">
          <li className="mx-1">
        <img className='icon' src={Profile} alt="Joseph Cooper" /> {" "}
          </li>
          <li className="mx-1 mx-2">
          Joseph James Craig Cooper
          </li> 
        </ul>
  
      </h2>
      <nav>
        <h5>
        <ul className="flex-row">
          <li className="mx-1 mx-3">
            About Me
          </li>
          <li className="mx-1 mx-3">
            Contact Me
          </li>
          <li className="mx-1 mx-3">
            My Work
          </li>
          <li className="mx-1 mx-3">
            Resume
          </li>
        </ul>
        </h5>
      </nav>
    </header>
  );
}

export default Nav;
