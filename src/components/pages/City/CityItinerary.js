import React from "react";
import "../City/CityItinerary.css";
import viajar from "../../Imagen/viajar.jpeg";
import viaje1 from "../../Imagen/viaje1.jpg";
import viaje3 from "../../Imagen/viaje3.jpg";


function CityItinerary() {
    return (
        <>
            <div class="heading">
                <div className="headingItem">

                    <div className="heading-Items">
                        <img src={viajar}   />

                    </div>

                    <div className="heading-Items">
                        <img src={viaje1}  />

                    </div>

                    <div className="heading-Items">
                        <img src={viaje3}  />

                    </div>
                </div>
                <div className="haedingTitle">
                    <h1>ITINERARIES</h1>
                </div>

            </div>
            <div className="headingText">
                <span>Select the options and find the perfect itineraries for you... THE ADVENTURE BEGINS!</span>
            </div>
        </>
    );


};

export default CityItinerary;




