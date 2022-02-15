import React from "react";
import "../Login/Login.css";
import {Link as Linkrouter} from "react-router-dom";

function Login() {
  return (
    <div className="containerlogin">
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>
        <Linkrouter to="/Register">
        <button className="loginRegisterButton">Register</button>
        </Linkrouter>
      </div>
    </div>
  );
}
export default Login;
