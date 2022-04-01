//require() para poder solicitar el archivo de estilos css, en el parentesis colocar el nombre del archivo
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
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
        html: `<div style="margin:20px; padding:30px; background:#64b2ff; border-radius:5px solid #e07924;">
           <p style="color:e07924; font-family:Oswald ; font-size: 80px; text-align: center;">The longest journey...begins with a single step</p>
           </br>
           </br>
           <h1 style="color:e07924; font-family:Oswald ; font-size: 80px; text-align: center;">MyTinerary</h1>
           </br>
           <h2 style="color:#000000; font-style: 20px; text-align:center;"> Click<a 
           style ="color:#23394d; font-style:"Oswald"
           PRESS<a href=http://localhost:4000/api/verify/${uniqueText}>HERE</a>TO VALIDATE YOUR E-MAIL
           </br>
           </br>
           <h6 style="color: #a03a9e; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>
           </div>`
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
         //mando un objeto 
        const { firstname, lastname, email, password, from } = req.body.NuevoUsuario//este NuevoUsuario es el parámetro de axios
        console.log(req.body)
        try {//busca el usuario en la base de datos el email
            const UsuarioExiste = await User.findOne({ email })
           // si encuentra el email genera la respuesta de que ya existe
            if (UsuarioExiste) {
                //  res.json({ success: "falseUE", response: "User already exists, login" })se saca porque ahora se trabaja desde los condiconales internos


                // else { //aqui es si el usuario exite, para que cada vez que acceda lo haga con su cuenta google
                if (from !== "signup") {

                    const passwordHash = bcryptjs.hashSync(password, 10)
                    UsuarioExiste.password = passwordHash
                    UsuarioExiste.emailVerificado = true
                    UsuarioExiste.from = from
                    UsuarioExiste.connected = false

                    UsuarioExiste.save()
                    res.json({ success: true, response: "We update your signIn so you can do it with " + from })
                }
                else {// si el usuario no esta logueado con google y se quiere dar de alta
                    res.json({ success: false, response: "This email is in use, please Sign In" })
                }
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
                    connected: false,
                    from,
                })

                if (from !== "signup") {// si el usuario no existe y viene de una red social
                    NewUser.emailVerificado = true
                    NewUser.from = from
                    NewUser.connected = false

                    await NewUser.save()
                    res.json({ success: true, data: { NewUser }, response: "Welcome, we have created your user with " + from })
                }

                else {//!emailVerificado
                    NewUser.emailVerificado = false
                    NewUser.from = from
                    NewUser.connected = false
                    await NewUser.save()
                    await sendEmail(email, uniqueText)// esperamos que se cree el usuario nuevo
                    res.json({ success: true, response: "An email has been sent to verify your email", data: { NewUser } })
                }
            }
        }

        catch (error) { res.json({ success: false, response: null, error: error }) }

    },
    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData//recibe el logueo
        try {
            const usuario = await User.findOne({ email })//almacena valor de la respuesta

            if (!usuario) {//sino coincide devuelve un error
                res.json({ success: false, from: "controller", error: "Username and/or password is incorrect" })
            } else {
                if (usuario.emailVerificado) {//compara el email y la contreseña
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)// como guardamos encryptada utilizando el metodo compareSync la encryptamos y comoaramos con la que guardamos
                   
                    if (passwordCoincide) {// creamos un token y lo guardamos en el localstore
                       
                       
                        const datosUser = {//respuesta cuando creamos un usuario
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id:usuario._id,// aqui me da el id de usuario para usarlo en comments
                        };
                        usuario.connected = true // cambiamos el estado cuando accede (esta parte corresponde payload del token)
                        await usuario.save();

                        const token = jwt.sign({ ...datosUser }, process.env.SECRETKEY,{expiresIn:60*60*24});
                        res.json({
                            success: true,
                             from: "controller",
                            response: { token, ...datosUser},message:"Again" +" " + usuario.firstname})
                    } else { res.json({ success: false, from: "controller", error: "The username and/or password is incorrect"})}
                }      
                else { res.json({ success:false, from:"controller", error:"Please check your email to validate it" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }
    },
    cerrarSesion: async (req, res) => {
        const email = req.body.email//aqui quite el closeUser
        // console.log(req.body.email)//prueba
        const user = await User.findOne({ email })
        user.connected = false
        await user.save()
        res.json({ success: true, response: "Closed Session" })

    },
    verificarToken: async(req,res)=>{
        //sino hay error
        if (!req.error) {
           res.json({success:true,
               respuesta:{//estos datos son los del payload
               firstname:req.user.firstname,
               lastname:req.user.lastname,
               email:req.user.email,
               id:req.user.id,
            },
            response:"Welcome Back " + req.user.firstname}) 
            
        }else{
            res.json({
             success:false,response:"Please Sign In again"
            })
        }
    }
}

module.exports = usersControllers
