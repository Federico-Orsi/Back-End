import { createTransport } from "nodemailer";
import { usersRepository } from "../../repository/usersRepository.js";


const NodeMailer = createTransport({
  service: 'gmail',
  port: 586,
  auth: {
      user:"federicoantonio.orsi@gmail.com",
      pass:"pjtlfajinvhryexc"
  }
})



export async function timerDelete (req, res, next) {

 const allUser = await usersRepository.find()
 
 const hoy = new Date();

 const usersLeft = allUser.filter(user => ((hoy - user.last_connection) < 172800000 )  )

 const usersGone = allUser.filter(user => (hoy - user.last_connection) > 172800000   )
 
 

usersGone.forEach(element => {
  try {
    const mailOptions = {
      from: 'Mongo Account',
      to: element?.username,
      subject: 'Eliminación por Inactividad!!',
      // text: mensaje, (La opción text: sirve para enviar mensajes simples sin ser HTML)
      html: `
      <h2 style="color: blue;">Su cuenta ha sido eliminada por inactividad</h2>
      <br/>
      <p style="color: black;">Si tiene alguna duda o reclamo, puede dirigirse a Avenida Siempre Viva, Springfield - USA</p>
      <p style="color: black;">Servirle es nuestro compromiso...</p>
      
      `
    }


     NodeMailer.sendMail(mailOptions)
  
    
  } catch (error) {
    console.log(error)
   
  }
});


 await usersRepository.deleteMany()
 await usersRepository.insertMany(usersLeft)


   

    res.json(usersLeft)
    
  }



  