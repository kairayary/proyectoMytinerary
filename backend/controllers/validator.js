const joi = require("joi")
const {nuevoUsuario} = require("./usersControllers")

const validator = (req,res,next)=>{
    console.log(req.body.NuevoUsuario)

    const Schema=joi.object({

        firstname:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min": "Name must contain at least 3 charracters",
            "string.empty": "Field cannot be empty"
        }),
        lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min": "Last Name must contain at least 3 charracters",
            "string.empty": "Field cannot be empty"
        }),
        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email": "The format is wrong"

        }),
        password:joi.string().max(18).min(6).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
            "string.pattern.base":"The password must contain at least one uppcarse letter, one lowercase letter and one number",
            "string.min":"The password must contain at least 6 alphanumeric characters",
            "string.max":"The password must not exceed 18 characters"
        }),
    })
    const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if(validation.error){
        return res.json({success:"falseVAL",response:validation})
    }
    next()
}
module.exports = validator