const Router = require("express").Router();
const datosController = require ("../controllers/datosControllers")// revisar esta ruta
const{ObtenerDatosCompletos, ObtenerItinerarios}= datosController// extrae la constante obtenerDatosCompletos destructuracion

Router.route("/datos")// datos es parte de la url de la consulta
.get(ObtenerDatosCompletos)
 Router.route("/itinerary/:city")
 .get(ObtenerItinerarios)




module.exports = Router