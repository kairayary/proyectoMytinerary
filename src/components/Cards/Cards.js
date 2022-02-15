import React from "react";
import { Link as Linkrouter } from "react-router-dom";

function Cards(props) {
    
    const cities = props.cities;

    return (
        <>
            {cities.map((city) =>
                <div className="card">
                    <div className="card_body">
                        <img src={process.env.PUBLIC_URL+`/Imagenes/City/${city.img}`} className="card_image"  />
                        <h2 className="card_title">{city.name}</h2>
                        <p className="card_description">{city.description}</p>
                    </div>
                    <Linkrouter to="/City">
                        <button className="card_btn">See More</button>
                    </Linkrouter>
                </div>
            )}
        </>
    )
};

export default Cards;
