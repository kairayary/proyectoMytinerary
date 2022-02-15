import React from "react";
import "../Register/Register.css";
import {Link as Linkrouter} from "react-router-dom";

function Register (){
    return (
        <div className="containerRegiter">
        <div className="register">
          <span className="registerTitle">Register</span>
          <form className="registerForm">
            <label>User Name</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Enter your username..."
            /><label>Email</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Enter your email..."
            />
            <label> Confirm your Email</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Comfirm your email..."
            />
            <label>Password</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Enter your password..."
            />
            <label> Confirm your Password</label>
            <input
              className="registerInput"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="registerButton">Register</button>
          </form>
        <Linkrouter to="/login">
          <button className="registerLoginButton">Login</button>
        </Linkrouter>
        </div>
      </div>
    )
}
export default Register;