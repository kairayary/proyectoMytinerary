//require() para poder solicitar el archivo de estilos css, en el parentesis colocar el nombre del archivo
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
// const { response } = require("express")
const jwt = require("jsonwebtoken")

async function sendEmail(email, uniqueText) {

    const transporter = nodemailer.createTransport({

        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {

            user: "kaira.mytinerary@gmail.com",
            pass: "prueba1234"
        }

    })

    const sender = "kaira.mytinerary@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "Verificacion de usuario",
        html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log("Message send")//parametros que se envian al usuario
        }
    })
}


const usersControllers = {

    verifyEmail: async (req, res) => {//controlador que recibe el clip del email, y busca el usuario en la base(emailverificado, lo pasa de false a true)
        const { uniqueText } = req.params// toma el parametro de la clave
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/login")
        } else {
            res.json({ success: false, response: "It has not been possible to verfy your email" })
        }
    },
    nuevoUsuario: async (req, res) => {

        const { firstname, lastname, email, password } = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const UsuarioExiste = await User.findOne({ email })

            if (UsuarioExiste) {
                res.json({ success: "falseUE", response: "User already exists, login" })
            }
            else {

                const uniqueText = crypto.randomBytes(15).toString("hex")// genera un texto de 15 caracteres hexagecimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,//busca la coincidencia del texto, no se pasa nunca password
                    emailVerificado,
                    connected:false,

                })
                if (!emailVerificado) {
                    
                    await NewUser.save()
                    await sendEmail(email, uniqueText)// esperamos que se cree el usuario nuevo
                    res.json({ success: "trueUE", response: "An email has been sent to verify your email" })
                }


            }

        }
        catch (error) {
            res.json({ success: "falseUE", response: null, error: error })
        }

    },
    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData//recibe el logueo
        try {
            const usuario = await User.findOne({email })//almacena valor de la respuesta

            if (!usuario) {//sino coincide devuelve un error
                res.json({ success: false, from: "controller", error: "Usuario y/o contraseña es incorrecta" })
            } else {
                if (usuario.emailVerificado) {//compara el email y la contreseña
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)// como guardamos encryptada utilizando el metodo compareSync la encryptamos y comoaramos con la que guardamos
                    if (passwordCoincide) {// creamos un token y lo guardamos en el localstore
                        const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,   
                        }
                        usuario.connected= true // cambiamos el estado cuando accede
                        await usuario.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } })
                    } else { res.json({ success: false, from: "controller", error: "The username and/or password is incorrect" }) }
                } else { res.json({ success: false, from: "controller", error: "Please check your email to validate it" }) }
            }
        } 
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }
    },
    cerrarSesion: async (req,res)=>{
       const email =req.body.email//aqui quite el closeUser
       console.log(req.body.email)//prueba
       const user= await User.findOne({email})
       user.connected = false
       await user.save()
       res.json({success:true, response:"Sesion cerrada"})

       

    }
}

module.exports = usersControllers
