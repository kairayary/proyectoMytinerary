const mongoose = require ("mongoose")// trae los datos de las ciudades y la conecta

const itinerarySchema = new mongoose.Schema({

       
        city:{ type: String, requiere: true},
        name:{ type: String, requiere: true},
        description:{ type: String, requiere: true},
        price:{ type: String, requiere: true},
        time:{ type: String, requiere: true},
        img:{ type: String, requiere: true},
        
})

const Itinerary= mongoose.model("itineraries", itinerarySchema)

module.exports = Itinerary;