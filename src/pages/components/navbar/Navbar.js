import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div class="nav-title">A41 Datum</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="" target="_blank">
          Choice 1
        </a>
        <a href="" target="_blank">
          Choice 2
        </a>
        <a href="" target="_blank">
          Choice 3
        </a>
        <a href="" target="_blank">
          Choice 4
        </a>
        <a href="" target="_blank">
          Choice 5
        </a>
      </div>
    </div>
  );
}

export default Navbar;
