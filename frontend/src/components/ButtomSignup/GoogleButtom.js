import React from "react";
import GoogleLogin from "react-google-login";
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import swal from 'sweetalert';
import "./ButtonSign.css";

function Google() {

    const responseGoogle = async (response) => {
        console.log(response);


        const NuevoUsuario = {
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.googleId + "Ka",
            from: "Google", //controladores
        }
        await axios.post("https://kairamytinerary.herokuapp.com/api/signup", { NuevoUsuario })
            .then(response => //alert(response.data.response))

                displayMessages(response.data) //para validar los datos

            )
        function displayMessages(data) {
            if (data.success === "falseVal") {

                //  swal(data.response.error.details.map(error => error.message), "You clicked the button!", "error");
                alert(data.response.error.details.map(error => error.message))

            } else if (data.success === true) {
                console.log(response.profileObj.name)

                swal({

                    title: data.response,
                    text: response.profileObj.name,
                    icon: "success",
                });
            }


        }
    }



    return (

        <div className='google mt-3'>


            <GoogleLogin

                clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="StyleButtom"><FcGoogle />  Login with GOOGLE</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )

}
export default Google;