import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import swal from 'sweetalert';


function Facebook() {

    const responseFacebook = async (response) => {
       console.log(response)
        const NuevoUsuario = {
            firstname: response.name,
            lastname: "facebook",
            email: response.email,
            password: response.id + "Fa",
            from: "Facebook"//si el usuario se carga a través de google no se pide la verificación
        }


        await axios.post("http://localhost:4000/api/signup",{NuevoUsuario })
            .then(response => //alert(response.data.response))
                //  if (response.success === "falseVAL"){
                // console.log(response.data)
                // }
                displayMessages(response.data) //para validar los datos

            )
        function displayMessages(data) {
            if (data.success === "falseVAL") {
                //  console.log(data)
                // console.log(data.response.error.details)
                swal(data.response.error.details.map(error => error.message), "You clicked the button!", "error");
                // alert(data.response.error.details.map(error => error.message))

            } else if (data.success === true) {
                // console.log(data)
                swal((data),"You clicked the button!", "success")
            }

        }
    }

    return (
        <div className='facebook mt-5'>
            <FacebookLogin
                appId="244949647757742"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    );

}



export default Facebook;