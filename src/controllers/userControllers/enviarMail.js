import jwt from 'jsonwebtoken'
import { createTransport } from "nodemailer"
import { SECRET_TOKEN } from "../../../config.js"
import { usersRepository } from "../../repository/usersRepository.js"

const NodeMailer = createTransport({
    service: 'gmail',
    port: 586,
    auth: {
        user:"federicoantonio.orsi@gmail.com",
        pass:"pjtlfajinvhryexc"
    }
})



export async function enviarMail(req, res, next) {

    const user = await usersRepository.findById(req.body.id)
    const userId = user._id

    const token = jwt.sign({ userId }, SECRET_TOKEN, { expiresIn: "40s" })

    const { destinatario, mensaje } = req.body

    const mailOptions = {
        from: 'Enviador de mails molesto',
        to: destinatario,
        subject: 'Mail molesto!',
        // text: mensaje, (La opción text: sirve para enviar mensajes simples sin ser HTML)
        html: `<h1 style="color: aqua;">Probando</h1>
        <h2 style="color: blue;">Node Mailer</h2>
        <p style="color: black">${mensaje}</p>
        <a href="http://localhost:8080/handlebars/new_password?token=${token}" target="_blank" style="color: white; background-color: black; padding: 1%; border-radius: 5%; padding-bottom: 1%;" rel="noopener noreferrer">Reestablecer Contraseña</a>
        `
    }
    try {
        const info = await NodeMailer.sendMail(mailOptions)
        console.log(info)
        
    } catch (error) {
        console.log(error)
        throw error
    }

  
  res.send(`e-mail enviado con token: ${token}`)

}