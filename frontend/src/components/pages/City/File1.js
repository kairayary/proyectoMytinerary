import React from 'react';

import puertoPrincesa from "../../Imagen/puertoPrincesa.jpg";


function File1() {
    
    return (

        <div className="containerItinerary">

            <div>
                <File 
                    img={puertoPrincesa}
                    name="Underground River Tour with Buffet Lunch"
                    description="Incredible experience exploring the caves of the underground river of Puerto Princesa considered one of the seven wonders of nature."
                    price="USD27/apiece"
                    time="8 hours" />
            </div>

            <div>
                <File 
                    name="Swim With The Whale Sharks"
                    description="Discover the whale sharks, which are called-Butanding- in Filipino."
                    price="USD24/apiece"
                    time="7 hours" />
            </div>

            <div>
                <File 
                    name="River cruise and snorkeling tour."
                    description="Peaceful Jungle River cruise through the mangrove forest. See the Philippine long-tailed macaque and other jungle creatures like the water monitor lizard. Dive into the ocean for a refreshing snorkeling experience."
                    price="USD10/apice"
                    time="6 hours" />
            </div>

        </div>
    );
}


export default File1;

