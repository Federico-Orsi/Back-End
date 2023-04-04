import { Router } from "express";
import { userCollection } from "../dao/managers/managerMongoose.js";



const routerSessions = Router();

routerSessions.post('/', async (req, res) => {

   
    const { e_mail, password} = req.body
    const user = await userCollection.findOne({ e_mail, password})
    if (!user) return res.status(401).send({ status: "error", error: "Invalid credentials" })
    req.session['user'] = {
        name: `${user.Nombre} ${user.Apellido}`,
        email: user.e_mail,
        age: user.Edad,
        rol: user.rol
    }
    console.log(req.session['user'])
    res.json({ status: "success", payload: req.session['user'], message: "¡1st loguin babyyyy!! :)" })
   
    
      
    
   

  });


  
  
  
  
  export default routerSessions