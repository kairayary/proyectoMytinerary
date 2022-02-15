const Router = require("express").Router();
const { ObtenerItinerarios } = require("../controllers/datosControllers");
const citiesController = require ("../controllers/datosControllers")// revisar esta ruta
const{ObtenerDatosCompletos}= citiesController// extrae la constante obtenerDatosCompletos destructuracion

Router.route("/datos")// datos es parte de la url de la consulta
.get(ObtenerDatosCompletos)
 Router.route("/itinerary")
 .get(ObtenerItinerarios)




module.exports = Router