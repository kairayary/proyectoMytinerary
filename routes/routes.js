const Router = require("express").Router();
const passport=require("../config/passport")
const datosController = require ("../controllers/datosControllers")// revisar esta ruta
const{ObtenerDatosCompletos, ObtenerItinerarios, likeDislike}= datosController// extrae la constante obtenerDatosCompletos destructuracion
const usersControllers =require("../controllers/usersControllers")
const{nuevoUsuario, verifyEmail, accesoUsuario,cerrarSesion,verificarToken} = usersControllers
const validator = require("../controllers/validator")
const commentControllers =require ("../controllers/comentariosControllers");
const {cargarComentarios, obtenerComentarios, borrarComentario,modificarComentario} = commentControllers


Router.route("/datos")// datos es parte de la url de la consulta
.get(ObtenerDatosCompletos)
 Router.route("/itinerary/:city")
 .get(ObtenerItinerarios)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signin")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)

Router.route("/comments")
.post(cargarComentarios)

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signinToken")
.get(passport.authenticate("jwt",{session:false}),verificarToken)
// cuando la ruta venga por singinToken va a llamar a la configuración del pasporte y llama al método auntenticar, el primer pa´rametro q se le pasa es jwt
// el session es una verificación y una vez q pase ´por ese objeto va a llamar el controlador de verificar token
 Router.route("/likesDislike/:id")//se pasa el passport porque si el usuario esta verificado podrá hacer el likes y dislikes
 .put(passport.authenticate("jwt",{session:false}),likeDislike)


module.exports = Router