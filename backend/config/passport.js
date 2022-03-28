//aqui creamos la estrategia para autentificar el token del usuario
const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy//esta constante es igual a jwt en su constructor de estrategias
const extractJwt = require("passport-jwt").ExtractJwt//llama al cosntructor de extracciones

const User = require("../models/user")//hay q comparar el payloard de token con el id del usuario para ver si son iguales traerlos sino son iguales es q el token no corresponde a ningún usuario

module.exports = passport.use(new jwtStrategy({

    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY//SECRETKEY es el parámetro de encryptado del token
    //de la extración del jwt solo tomamos el payload
}, (jwt_payload, done) => {//una vez q haga la extracción la compare con la clave secreta haga un función anónima y tiene como parámetrp el paiload y la función de retorno done
     console.log(jwt_payload)
    User.findOne({_id:jwt_payload.id})
    .then(user=>{
        // console.log(user)
        if (user) {
            return done(null,user)//el null si no hay un error, sino devuelve la respuesta de la linea 15 
        }else if(error){
            return done(error,false)
        }else{
            return done(null,false)
        }
    }).catch(error=>{return done(error,false)})
}))