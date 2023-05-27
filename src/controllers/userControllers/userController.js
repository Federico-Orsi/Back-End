import { usersRepository } from "../../repository/usersRepository.js";
import { hashear } from "../../utils/crypto.js";


export async function userController (req, res, next) {


    
      
    const {Nombre, Apellido, Edad, rol } = req.body
    const username = req.body.username
    const password = hashear(req.body.password)
    console.log(username)
    const exist = await usersRepository.findOne({username})
    if (exist) return res.status(422).json({ status: "error", error: "User already exists" })
    
    const user = {
        Nombre,
        Apellido,
        username,
        Edad,
        password,
        rol
    }
    await usersRepository.guardar(user)
    // res.json({ status: "success", message: "User registered" })
    // req.user = user
    res.json(user)
    
  }