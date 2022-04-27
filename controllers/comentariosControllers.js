const nodemailer = require("nodemailer")
const crypto = require("crypto")
const Comments = require("../models/commenst")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const commentControllers = {

    cargarComentarios: async (req, res) => {//cuando es llamada recibe a traves de req.body los datos desde comentarios

        const { itinerario, mensaje, user } = req.body.dataComments;// este dataComments es del front en la parte de comments lo q mete el usuario
        console.log(req.body.dataComments)

        new Comments({// el comentario q se me va a cargar a la base de datos, este es modelo

            itinerario: itinerario,
            user: user,
            comment: mensaje
        }).save()

        let comentario
        // creamos el dato y traemos el dato correspondientes a ese itinerario y le sumamos los datos del usuario
        try {
            comentario = await Comments.find({ itinerario: itinerario }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response: {comentario }, message:"Your message has been sent"})

    },
    obtenerComentarios: async (req, res) => {
        console.log(req.body)
        let id = req.params.id;

        let comentario
        // creamos el dato y traemos el dato correspondientes a ese itinerario y le sumamos los datos del usuario
        try {
            comentario = await Comments.find({ itinerario: id }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response: { comentario } })

    },


    borrarComentario: async (req, res) => {
        let id = req.params.id;

        let comentario

        try {
            comentario = await Comments.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response: { comentario }, message:"Your commment has been deleted" })


    },

    modificarComentario:async(req, res) => {
       
        let id = req.params.id;
        console.log(req.body)
        let newComments= {comment:req.body.data}
        console.log(newComments)
        let comentario

        try {
            comentario = await Comments.findOneAndUpdate({ _id:id},newComments)
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response:{comentario},message:"Your comment has been modified "})

    }
}
module.exports = commentControllers;