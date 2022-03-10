const Router = require("express").Router();
const datosController = require ("../controllers/datosControllers")// revisar esta ruta
const{ObtenerDatosCompletos, ObtenerItinerarios}= datosController// extrae la constante obtenerDatosCompletos destructuracion
const usersControllers =require("../controllers/usersControllers")
const{nuevoUsuario, verifyEmail, accesoUsuario,cerrarSesion} = usersControllers
const validator = require("../controllers/validator")


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



module.exports = Router