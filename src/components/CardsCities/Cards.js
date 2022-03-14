import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "../CardsCities/CardStyle.css";

function Cards() {
    const [{filterCity}, dispatch] = useStateValue()
    //const cities = props.cities;

    return (
        <>
            {filterCity?.map((city) =>( 
                <div className="card">
                    <div className="card_body">
                        <img src={process.env.PUBLIC_URL + `/Imagenes/City/${city.img}`} className="card_image" />
                        <h2 className="card_title">{city.name}</h2>
                        <p className="card_description">{city.description}</p>
                    </div>
                    <Linkrouter to={`/City/${city._id}`}>
                        <button className="card_btn">See More</button>
                    </Linkrouter>
                </div>
            ))}
            
        </>
    );
}

export default Cards;
