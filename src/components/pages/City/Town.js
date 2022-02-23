import React from "react";
import "./Town.css";

import IconoContinente from "../../Imagen/IconoContinente.png";
import IconoLengua from "../../Imagen/IconoLengua.png";
import IconoMoneda from "../../Imagen/IconoMoneda.png";



function Town(props) {

  const city = props.citySelecter
  
  return (
    city.map(data=>
    <div className="contairnerTown">

      <div className="townImg">
        <img src={process.env.PUBLIC_URL + `/Imagenes/City/${data.img}`}  alt="" width={1110} height={350} />
      </div>
      <div className="townfather">
        <div className="town">

          <div className="townTitleLg">
            <h2>{data.name}/</h2>
            <div className="townTitleM">
              <h3>{data.country}</h3>

            </div>
          </div>
          <div className="townTitleXs">
            <p >{data.description}</p>
          </div>

        </div>
        <div className="townItems">

          <div className="items">
            <img src={IconoContinente} width="40px" height="40px" />
            <p>{data.continents}</p>
          </div>

          <div className="items">
            <img src={IconoLengua} width="50px" height="50px" />
            <p>{data.language}</p>
          </div>

          <div className="items">
            <img src={IconoMoneda} width="40px" height="40px" />
            <p>{data.currency}</p>
          </div>
        </div>
      </div>
    </div>
    )
  );
}

export default Town;
