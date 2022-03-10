const mongoose = require ("mongoose")// trae los datos de las ciudades y la conecta

const usersSchema = new mongoose.Schema({

     firstname:{ type: String, require: true},
     lastname:{ type: String, require: true},
     email:{ type: String, require: true},
     password:{ type: String, require: true},
     uniqueText:{ type: String, require: true},
     emailVerificado:{type:Boolean,require:true},
     connected:{type:Boolean, require:true}
    
})

const User= mongoose.model("users", usersSchema)

module.exports = User;