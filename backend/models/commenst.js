const mongoose = require ("mongoose")// trae los datos de las ciudades y la conecta

const commentsSchema = new mongoose.Schema({

    itinerario:{type:mongoose.Types.ObjectId,ref:"itineraries", requiere:true},
    user:{type:mongoose.Types.ObjectId,ref:"users", requiere:true},
    comment:{type:String, requiere: true},
   
})

const Comments= mongoose.model("comments", commentsSchema)

module.exports = Comments;