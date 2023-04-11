import { Router } from "express";
import { userCollection } from "../dao/managers/managerMongoose.js";
import { hashear } from "../utils/crypto.js";



const routerUsers = Router();

routerUsers.post('/', async (req, res) => {

   
  
   
    
      
    const {Nombre, Apellido, Edad, rol } = req.body
    const e_mail = req.body.e_mail
    const password = hashear(req.body.password)
    console.log(e_mail)
    const exist = await userCollection.findOne({e_mail})
    if (exist) return res.status(422).json({ status: "error", error: "User already exists" })
    const user = {
        Nombre,
        Apellido,
        e_mail,
        Edad,
        password,
        rol
    }
    await userCollection.guardar(user)
    res.json({ status: "success", message: "User registered" })

    
  });


  
  
  
  
  export default routerUsers