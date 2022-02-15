

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cities from "./components/pages/Cities";
import Slideshow from "./components/Slide/Slideshow";
import styled from "styled-components";

import "./components/Cards/CardStyle.css";
import "./App.css";
import Japon from "./components/Imagen/Japon.Asia.jpg";
import Australia from "./components/Imagen/Australia.Oceania.jpg";
import Argentina from "./components/Imagen/Argentina.America.jpg";
import Sudafrica from "./components/Imagen/Sudafrica.Africa.jpg";
import Paris from "./components/Imagen/Paris.Europa.jpg";
import Cards from "./components/Cards/Cards";
import City from "./components/pages/City/City"
import Footer from "./components/Footer/Footer";
import Register from  "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import axios from "axios";


function App() {
  
 const data =[]
 async function test(){}
 
  useEffect(()=> {  

    axios.get("http://localhost:4000/api/datos")
  

  .then(response =>
    data.push(...response.data.response.cities))
    
},[])


// const itinerary =[]

// axios.get("http://localhost:4000/api/itinerary")
// .then(response =>{

// itinerary.push(...response.data.response.itineary)

// },[])
    

  return (
    

    <BrowserRouter>
    
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities data ={data}/>} />
        <Route path = "/login" element ={<Login/>} />
        <Route path ="/register" element = {<Register/>} />
        <Route path = "/city" element = {<City/>} />
      </Routes>

      
      <Footer />
    </BrowserRouter>
     
  );

}
export default App;
