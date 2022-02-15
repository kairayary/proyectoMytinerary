const mongoose = require ("mongoose")// trae los datos de las ciudades y la conecta

const citiesSchema = new mongoose.Schema({

     name:{ type: String, requiere: true},
     country:{ type: String, requiere: true},
     description:{ type: String, requiere: true},
     currency:{ type: String, requiere: true},
     language:{ type: String, requiere: true},
     continents:{ type: String, requiere: true},
     region:{ type: String, requiere: true},
     demonym:{ type: String, requiere: true},
     img:{ type: String, requiere: true},
})

const City= mongoose.model("Cities", citiesSchema)

module.exports = City;