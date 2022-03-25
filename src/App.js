

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cities from "./components/pages/Cities";

import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

// import "./components/Cards/CardStyle.css";
import "./App.css";

import City from "./components/pages/City/City"
import Footer from "./components/Footer/Footer";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import axios from "axios";


function App() {
  const [{ cities, itineraries }, dispatch] = useStateValue()
  //const data =[]

  // async function test() { }

  useEffect(() => {

    axios.get("http://localhost:4000/api/datos").then(response => {
      dispatch({// manda el dato al entorno
        type: actionType.CITIESDB,
        cities: response.data.response.cities
      })
    });

    //busca si el elemento token existe en el localStorage
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token") //aqui capturo el valor del token
      // si existe hace una llamada a axios
        axios.get("http://localhost:4000/api/signinToken", {
        // aqui pasamos un valor llamado las cabeceras de envio,(veniamos pasando params al final de las rutas, un objeto cuando dabamos de alta un usuario)
        headers: {

          "Authorization": "Bearer " +token//método de autorización estandar q permite autenticar y autorizar al usuario
        }
      })
      .then(user=>{
       
      if (user.data.success) {

        dispatch({// si viene autorizado, guarda los datos
          type: actionType.USER,
          user: user.data.respuesta
        })
        //sino viene autorizado, no viene success la repuesta
      } else {
        localStorage.removeItem("token")//elimina el token si el token no es válido
      }
     });
    }

  }, []);


  return (


    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/city/:id" element={<City />} />
      </Routes>


      <Footer />
    </BrowserRouter>

  );

}
export default App;
