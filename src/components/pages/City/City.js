import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import Town from "../City/Town";
import "../City/City.css";
import CityItinerary from "../City/CityItinerary";
import axios from "axios";
import { useParams } from "react-router-dom";
import Itineraries from "./Itineraries";


function City() {
  const [itineraries, setItineraries] = useState([])

  const [{ cities}, dispatch] = useStateValue()

  const { id } = useParams()
  const citySelecter = cities.filter(city => city._id === id)
 

  useEffect(() => {

    citySelecter.map(city =>
      axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
        .then(response => setItineraries(response.data.response.itinerary)
        )
    )
     
    window.scrollTo(0, 0);



  }, [])

  // const itinerarySelecter= itineraries.filter(itin =>itin.city=== citySelecter[0].name)

  return (
    <div className="city">

      <Town citySelecter={citySelecter} />
      <CityItinerary citySelecter={citySelecter}/>
      <Itineraries itineraries={itineraries}/>
      {/* itinerarySelecter={itinerarySelecter} */}
      


    </div>
  );
};
export default City;