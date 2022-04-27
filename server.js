require("dotenv").config()
const express = require("express") //equivalente al import de React
const cors = require("cors")
const Router = require("./routes/routes")// verificar si esta bien esta ruta
const passport = require("passport")
const app = express ()
require("./config/database")

const path = require('path')
const PORT=process.env.PORT || 4000
const HOST=process.env.HOST || '0.0.0.0'


//middlewares:servicios intermedios usados para realizar ciertas funciones, ejm usar respuestas en formato json
//el express, utilizar los cors,etc
app.use(express.json())// pasa datos de una api externa y ser transformados dentro de una variable
app.use(cors())
app.use(passport.initialize())
app.use("/api",Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))

    })
    
} 

app.listen(PORT, HOST, ()=> console.log("Servidor Inicializado en Puerto 4000"))