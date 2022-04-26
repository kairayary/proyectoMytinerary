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
      <h1>The Best Cities in the World !!!</h1>
      <main>

        <Slideshow />
      </main>
      <div>

        <div className="styleTexto">
          <p>For those who travel, for those who traveled, for those who will travel, for those who go, for those who return,
            for those who want to go, for those who do not want to return, and also for those who do not travel, so that they know what that are lost, perhaps they will change their minds.</p>
        </div>
        <div className="styleTexto1"><p>Here there are places for everyone... you just have to choose yours</p></div>
        
        <div className="styleSearch">

          <Search />
        </div>
        <div className="textocities">
          <h2>Find the Best Destinations</h2>
        </div>
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
