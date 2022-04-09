import React from "react";
import { useStateValue } from "../../../StateProvider";
import "../City/CityItinerary.css";
import MundoN from "../../Imagen/MundoN.gif";



function CityItinerary(props) {

    const city = props.citySelecter
    return (
        <>
            <div class="heading">
                {city.map(data => (
                    <div className="headingItem">

                        <div className=" headingItem1">
                            <div className="heading-Items">
                                <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`} />

                            </div>

                            <div className="heading-Items">
                                <h1>Itineraries</h1>
                            </div>

                            {/* <div className="heading-Items">
                            <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`}/>

                             </div> */}

                            <div className="heading-Items">
                                <img src={process.env.PUBLIC_URL + `/Imagenes/Flags/${data.flag}`} />
                            </div>
                        </div>
                        {/* <div className="haedingTitle">
                            <img src={mundo}  alt="" />
                        </div> */}
                        <div className="haedingTitle">
                            <img src={MundoN}  alt="" />
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




