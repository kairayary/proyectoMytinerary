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
         {/*  img={Japon}
          alt=""
          title="JAPAN"
          description="In the LAND OF THE RISING SUN, ancient temples pose alongside neon wonders and shrines offer peace between the great metropolises"
       
        
        
        <Cards
          img={Australia}
          alt=""
          title="AUSTRALIA"
          description="It is a young country and that can be seen in the architecture of its cities and the character of its inhabitants, cheerful and festive."
        />
        <Cards
          img={Argentina}
          alt=""
          title="ARGENTINA"
          description="Its cosmopolitan capital, surrounded by buildings from the 19th century, invites you to visit it. Explore its beautiful natural landscapes such as mountains in the Andes, glacial lakes and meadows."
        />
        <Cards
          img={Sudafrica}
          alt=""
          title="SOUTH AFRICA"
          description="With its fascinating cultural and geographical diversity, its nature and salt life make it a destination that attracts many."
        />
        <Cards
          img={Paris}
          alt=""
          title="PARIS"
          description="One of the most visited destinations in the world thanks to its history, its cultural activities and its gastronomy. Wonderful places to visit."
        />*/}
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
