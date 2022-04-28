import React from "react";
import axios from "axios";
import { Link as Linkrouter } from "react-router-dom";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import GoogleLogin from "react-google-login";
import "../Login/Login.css";
import swal from 'sweetalert';
import {FcGoogle } from "react-icons/fc";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import "./ButtonSign.css";
import {FaFacebookSquare} from "react-icons/fa";


function Login() {

  const [{ user }, dispatch] = useStateValue()//estructura para traer datos 

  //boton de google
  const responseGoogle = async (response) => {
    console.log(response);

    const userData = {

      email: response.profileObj.email,
      password: response.googleId + "Ka",

    }
    await axios.post("https://kairamytinerary.herokuapp.com/api/signin", { userData })
      .then(response =>  //alert(response.data.response))
        //  if (response.success === "falseVAL"){
        // console.log(response.data)
        // }
        displayMessages(response.data), //para validar los datos

      )

    function displayMessages(data) {
      // console.log("estoy en boton d google")
      if (!data.success) {
        // alert(data.error)
        swal({
           title:"error",
           icon:"error",
           text:data.error,
           
        })
      }  else { 
        console.log(data.response)
        localStorage.setItem("token", data.response.token)
        swal({
         title: "Welcome",
         text: data.message,
         icon: "success",
       });
     }
    


      //   console.log(data)
      // console.log(response) }

      dispatch({ //manda el dato al entorno
        type: actionType.USER,
        user: data.response// asi lo envio como se va a guardar en mi base, todo el objeto completo(token,datos,etc)
      })

    }
    console.log(user)

  }//aqui termina google

  async function loginUser(event) {
    event.preventDefault()
    const userData = {

      email: event.target[0].value,
      password: event.target[1].value,
    }

    await axios.post("https://kairamytinerary.herokuapp.com/api/signin", { userData })
      .then(response =>  //alert(response.data.response))
        //  if (response.success === "falseVAL"){
        // console.log(response.data)
        // }
       
        displayMessages(response.data), //para validar los datos

      )

    function displayMessages(data) {
      // console.log(data)
      if (!data.success) {
        // alert(data.error)
        swal({
          title: data.error,
         
          icon: "error",
        });


        console.log(data.error)
      }
      else { 
         console.log(data.response)
         localStorage.setItem("token", data.response.token)
         swal({
          title: "Welcome",
          text: data.message,
          icon: "success",
        });
      }

      dispatch({ //manda el dato al entorno
        type: actionType.USER,
        user: data.response// asi lo envio como se va a guardar en mi base, todo el objeto completo(token,datos,etc)
      })

    }
    console.log(user)//user si se mete dentro del estado de un array tiene q ser un array con un objeto con un length.[0]
  }

  //Desde aqui comienza el boton de Facebook
  const responseFacebook = async (response) => {
    console.log(response);

    const userData = {

      email: response.email,
      password: response.id + "Fa",

    }
    await axios.post("https://kairamytinerary.herokuapp.com/api/signin", { userData })
      .then(response =>  //alert(response.data.response))
        //  if (response.success === "falseVAL"){
        // console.log(response.data)
        // }
        displayMessages(response.data), //para validar los datos

      )

    function displayMessages(data) {
      console.log(data)
      if (!data.success) {
       (alert(data.error))
      } else { 
        console.log(data.response)
        localStorage.setItem("token", data.response.token)
        swal({
         title: "Welcome",
         text: data.message,
         icon: "success",
       });
     }


      dispatch({ //manda el dato al entorno
        type: actionType.USER,
        user: data.response// asi lo envio como se va a guardar en mi base, todo el objeto completo(token,datos,etc)
      })


    }
    // console.log(user)

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
        </form>

        <Linkrouter to="/Register">
          <button type="submit" className="loginRegisterButton">Register</button>
        </Linkrouter>

        
        <div className='google mt-3'>
        
        <GoogleLogin
    
        clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
        render={renderProps => (
          <button onClick={renderProps.onClick} className= "StyleButtom"><FcGoogle/>  Login with GOOGLE</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
       />
          </div>
          
       
        <div className='facebook mt-4'>
          
          <FacebookLogin
              appId="244949647757742"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={renderProps => (
                  <button onClick={renderProps.onClick}className= "StyleButtom" ><FaFacebookSquare/>Login with FACEBOOK</button>
              )}
          />
      </div>
        
      </div>
    </div>
  );
}
export default Login;
