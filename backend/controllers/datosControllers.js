const Cities = require("../models/cities.js")
// const Itinerary = require("../models/itinerary.js")

const citiesController = {
  ObtenerDatosCompletos: async (req, res) => {// recibe una petición y en relación a esta da una repuesta ( req= requiere, res= response)


    let cities
    let error = null

    try {
      cities = await Cities.find()// declaramos primero como función asincrona y luego esperamos la respuesta para no enviar una respuesta vacía
    } catch (err) {

      error = err
      console.log(error)

    }

    res.json({// armamos operardores terniarios que nos indican las respuestas que queremos
      response: error ? "ERROR" : { cities },
      success: error ? false : true,
      error: error
    })
  },

  // ObtenerItinerarios:async(req,res) => {
  //   console.log(res)
  //   let itinerary;
  //   let error = null
  //   try {
  //     itinerary = await Itinerary.find()
  //     console.log(itinerary)
  
  //   } catch (err){
  //     error = err
  //     console.log(error)
  //   }
  //   res.json({
  //     response:error?"ERROR":{itinerary},
  //     success:error?false:true,
  //     error:error
  //   })
  // }
  
}



  module.exports = citiesController