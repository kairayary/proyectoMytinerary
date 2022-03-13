import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";


function Google() {

    const responseGoogle = async (response) => {
        console.log(response);


        const NuevoUsuario = {
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.googleId + "Ka",
            from:"Google", //controladores
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
                alert(data.response.error.details.map(error => error.message))
            } else if (data.success === true) {
                console.log(data)
            }

        }
    }

   
    
    return(

        <div className='facebook mt-5'>
        <GoogleLogin
        clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
    )

}
export default Google;