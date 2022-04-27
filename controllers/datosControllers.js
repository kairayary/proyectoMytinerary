const Cities = require("../models/cities.js")
const Itinerary = require("../models/itinerary.js")

const datosController = {
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

  ObtenerItinerarios: async (req, res) => {
    console.log(req.params)
    let itinerary;

    const city = req.params.city
    let error = null
    try {
      itinerary = await Itinerary.find({ city: city })
      //  console.log(itinerary)

    } catch (err) {
      error = err
      console.log(error)
    }
    res.json({
      response: error ? "ERROR" : { itinerary },
      success: error ? false : true,
      error: error
    })
  },

  likeDislike: async (req, res) => {
    const id = req.params.id;
    const user= req.user.id

    console.log(id)
    console.log(user)
    let itinerary

    try {//aqui buscamos el itinerario
      itinerary = await Itinerary.findOne({ _id: id })
     
      //si include, vemos si el id esta y si lo encuentra al hacer click hace un dislike
      if (itinerary.likes.includes(user)) {
                                            //metodos para modificar bases de datos(pull:elimina)
        Itinerary.findOneAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
        .then(response=>res.json({success:true,response:response.likes}))
        .catch(error=>console.log(error))
      }else{
                                            //push:agrega o empuja
        Itinerary.findOneAndUpdate({_id:id},{$push:{likes:user}},{new:true})
        .then(response=>res.json({success:true,response:response.likes}))
        .catch(error=>console.log(error))
      }
     

    } catch (err) {
      error = err
     res.json({success:false,response:error})
    }
   
  },

}



module.exports = datosController