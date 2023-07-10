import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <img class="logo" src="https://www.datumhq.com/static/20e0cec1d5e27ebef7b881c14d7b5d0d/d3749/largeIcon.png" />
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
          Home
        </a>
        <a href="" target="_blank">
          Spending Request
        </a>
        <a href="" target="_blank">
          Fund Record
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
