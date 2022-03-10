

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
  const [{ cities, itineraries}, dispatch] = useStateValue()
  //const data =[]

  async function test() { }

  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({// manda el dato al entorno
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })
        // axios.get("http://localhost:4000/api/itinerary")
        //   .then(response => {
        //     dispatch({
        //       type: actionType.ITINERARIESDB,
        //       itineraries: response.data.response.itinerary // este itinerary es el declarado en datocontroller 
        //     })
        //     console.log(itineraries)
        //   });
         })
  }, [])







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
