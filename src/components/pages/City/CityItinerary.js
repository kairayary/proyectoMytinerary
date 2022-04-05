import React from "react";
import { useStateValue } from "../../../StateProvider";
import "../City/CityItinerary.css";
import viajar from "../../Imagen/viajar.jpeg";
import viaje1 from "../../Imagen/viaje1.jpg";
import viaje3 from "../../Imagen/viaje3.jpg";



function CityItinerary(props) {

    const city = props.citySelecter
    return (
        <>
            <div class="heading">
                {city.map(data => (
                    <div className="headingItem">

                        <div className="heading-Items">
                            <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`} />

                        </div>

                        <div className="haedingTitle">
                            <h1>Itineraries</h1>
                        </div>

                        {/* <div className="heading-Items">
                            <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`}/>

                        </div> */}

                        <div className="heading-Items">
                            <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`} />

                        </div>

                    </div>
                ))}


            </div>
            <div className="headingText">
                <h4>"There are too many adventures out there waiting to be lived"</h4>

                <span>Select the options and find the perfect itineraries for you... The Adventure Begins!!!</span>
            </div>


        </>
    );


};

export default CityItinerary;




