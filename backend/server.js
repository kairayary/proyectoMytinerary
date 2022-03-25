require("dotenv").config()
const express = require("express") //equivalente al import de React
const cors = require("cors")
const Router = require("./routes/routes")// verificar si esta bien esta ruta
const passport = require("passport")
const app = express ()
require("./config/database")


//middlewares:servicios intermedios usados para realizar ciertas funciones, ejm usar respuestas en formato json
//el express, utilizar los cors,etc
app.use(express.json())// pasa datos de una api externa y ser transformados dentro de una variable
app.use(cors())
app.use(passport.initialize())
app.use("/api",Router)

app.listen("4000",() => console.log("Servidor Inicializado en Puerto 4000"))