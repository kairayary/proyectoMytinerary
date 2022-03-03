import React from "react";
import "../Register/Register.css";
import { Link as Linkrouter } from "react-router-dom";
import axios from "axios";

function Register() {

  async function NewUser(event) {
    event.preventDefault()
    const NuevoUsuario = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value
    }
    console.log(NuevoUsuario)
    console.log(event)


       await axios.post("http://localhost:4000/api/signup",{NuevoUsuario})
      .then(response => //alert(response.data.response))
           //  if (response.success === "falseVAL"){
          // console.log(response.data)
           // }
          displayMessages(response.data) //para validar los datos

         )
      function displayMessages(data){
         if(data.success==="falseVAL"){
           console.log(data)
          console.log(data.response.error.details)
         alert(data.response.error.details.map(error=>error.message))
         }else if(data.success==="trueUE"){
           console.log(data)
         }

      }
     }

    return (
      <div className="containerRegiter">
        <div className="register">
          <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit={NewUser}>
            <label>Firstname</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Enter your firstname..."
            /><label>LastName</label>
            <input
              className="regiterInput"
              type="text"
              placeholder="Enter your last name..."
            />
            <label>Email</label>
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
            <button type="submit" className="registerButton">Register</button>
          </form>
          <Linkrouter to="/login">
            <button type="submit" className="registerLoginButton">Login</button>
          </Linkrouter>
        </div>
      </div>
    )
  }
  export default Register;