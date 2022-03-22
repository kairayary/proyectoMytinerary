import React from "react";


import Slideshow from "../Slide/Slideshow";
import styled from "styled-components";
import Search from "../SearchInput/Search";

import Cards from "../CardsCities/Cards";
import "./Cities.css";

function Cities(props) {
 
  
const cities = props.data

  return (
  
    <div className="containercities">
      <main>
        <h1>THE BEST CITIES IN THE WORLD !!!</h1>
         <Slideshow /> 
      </main>
      <div>
        <Search />
      </div>
      <div className="textocities">
          <h2>FIND THE BEST DESTINATIONS </h2>
        </div>
      <div className="wrapper">
        
        <Cards />
         
        
        
        {/* <Cards
          img={Australia}
          alt=""
          title="AUSTRALIA"
          description="It is a young country and that can be seen in the architecture of its cities and the character of its inhabitants, cheerful and festive."
        /> */}
       
       
      </div>
    </div>
  );
}


const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export default Cities;
