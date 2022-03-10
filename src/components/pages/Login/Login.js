import React from "react";
import axios from "axios";
import { Link as Linkrouter } from "react-router-dom";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import GoogleLogin from 'react-google-login';
import "../Login/Login.css";



function Login() {

  const [{ user }, dispatch] = useStateValue()//estructura para traer datos 

  const responseGoogle = (response) => {
    console.log(response);
  }
  async function loginUser(event) {
    event.preventDefault()
    const userData = {

      email: event.target[0].value,
      password: event.target[1].value,
    }



    await axios.post("http://localhost:4000/api/signin", { userData })
      .then(response =>  //alert(response.data.response))
        //  if (response.success === "falseVAL"){
        // console.log(response.data)
        // }
        displayMessages(response.data), //para validar los datos

      )

    function displayMessages(data) {
      console.log(data)
      if (!data.success) {
        console.log(alert(data.error))
      }
      else { console.log(data.response) }

      dispatch({ //manda el dato al entorno
        type: actionType.USER,
        user: data.response// asi lo envio como se va a guardar en mi base, todo el objeto completo(token,datos,etc)
      })


      //  if(data.success==="falseVAL"){
      //    console.log(data)
      //   console.log(data.response.error.details)
      //  alert(data.response.error.details.map(error=>error.message))
      //  }else if(data.success==="trueUE"){
      //    console.log(data)
      //  }

    }
    console.log(user)//user si se mete dentro del estado de un array tiene q ser un array con un objeto con un length.[0]
  }

  return (
    <div className="containerlogin">
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={loginUser}>
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
          <button type="submit" className="loginButton">Login</button>

          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </form>

        <Linkrouter to="/Register">
          <button type="submit" className="loginRegisterButton">Register</button>
        </Linkrouter>
      </div>
    </div>
  );
}
export default Login;
