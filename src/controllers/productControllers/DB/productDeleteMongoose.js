import { createTransport } from "nodemailer";
import { NotFoundError } from "../../../errors/errors.js";
import { productsRepository } from "../../../repository/productsRepository.js";



export const productDeleteMongoose = async (req, res) => {

    try {

        const NodeMailer = createTransport({
            service: 'gmail',
            port: 586,
            auth: {
                user: "federicoantonio.orsi@gmail.com",
                pass: "pjtlfajinvhryexc"
            }
        })


        const prod = await productsRepository.findById(req.params.pid)

        if (!prod) {
            throw new NotFoundError
        }

        if ((prod?.owner == req.user.username) || (req.user?.rol == "Admin")) {

            await productsRepository.deleteOne({ _id: req.params.pid })
            
            if (req.user?.rol == "Admin") {
                res.send(`El producto bajo el id:${req.params.pid} fue eliminado correctamente.`)
            }

            if (prod.owner != "Admin" && req.user?.rol != "Admin" ) {

                const mailOptions = {
                    from: 'Mongo Account',
                    to: prod.owner,
                    subject: 'Producto Eliminado!!',
                    // text: mensaje, (La opción text: sirve para enviar mensajes simples sin ser HTML)
                    html: `
                <h2 style="color: blue;">Su producto "${prod.title}" ha sido eliminado correctamente de la DB.</h2>
                <br/>
                
                <p style="color: black;">Que tenga un hermoso día.</p>
                
                `
                }
                NodeMailer.sendMail(mailOptions)
                res.send(`El producto bajo el id:${req.params.pid} fue eliminado correctamente.`)

            }
           
        } else {
            res.send(`Upss, la acción no pudo procesarse!! Recuerde que solamente puede eliminar productos que le pertenezcan a usted.`)
        }


    } catch (error) {
        console.log(error)
        res.send(`Upss!! El producto solicitado no fue encontrado!!`)

    }

}














