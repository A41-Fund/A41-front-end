import React from "react";
import "./LoginStyle.css";

function LoginForm() {
  return (
      <>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form>
          <img src="https://www.datumhq.com/static/20e0cec1d5e27ebef7b881c14d7b5d0d/d3749/largeIcon.png" alt="Logo" />
          <h3>DATUM A41</h3>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Datum Email" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button>Log In</button>
        </form>
      </>
  );
}

export default LoginForm;
