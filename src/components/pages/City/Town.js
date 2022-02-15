import React from "react";
import "./Town.css";

import IconoContinente from "../../Imagen/IconoContinente.png";
import IconoLengua from "../../Imagen/IconoLengua.png";
import IconoMoneda from "../../Imagen/IconoMoneda.png";
import puertoPrincesa from "../../Imagen/puertoPrincesa.jpg"


function Town() {
  return (
    <div className="contairnerTown">

      <div className="townImg">
        <img src={puertoPrincesa }  alt="" width={1300} height={350} />
      </div>
      <div className="townfather">
        <div className="town">

          <div className="townTitleLg">
            <h2>PORT PRINCESS /</h2>
            <div className="townTitleM">
              <h3>PHILIPPINES</h3>

            </div>
          </div>
          <div className="townTitleXs">
            <p >
              A coastal city on the island of Palawan, in the west of Philippines,
              it offers many spas and seafood restaurants as a tourist city.
            </p>
          </div>

        </div>
        <div className="townItems">

          <div className="items1">
            <img src={IconoContinente} width="40px" height="40px" />
            <p>CONTINENT</p>
          </div>

          <div className="items1">
            <img src={IconoLengua} width="50px" height="50px" />
            <p>LANGUAGES</p>
          </div>

          <div className="items1">
            <img src={IconoMoneda} width="40px" height="40px" />
            <p>CURRENCY</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Town;
