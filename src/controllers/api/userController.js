import { userCollection } from "../../dao/managers/managerMongoose.js";
import { hashear } from "../../utils/crypto.js";



export async function userController (req, res, next) {


    
      
    const {Nombre, Apellido, Edad, rol } = req.body
    const username = req.body.username
    const password = hashear(req.body.password)
    console.log(username)
    const exist = await userCollection.findOne({username})
    if (exist) return res.status(422).json({ status: "error", error: "User already exists" })
    const user = {
        Nombre,
        Apellido,
        username,
        Edad,
        password,
        rol
    }
    await userCollection.guardar(user)
    // res.json({ status: "success", message: "User registered" })
    res.json(req.user)
    
  }