import { cartsRepository } from "../../repository/cartsRepository.js";
import { usersRepository } from "../../repository/usersRepository.js";
import { hashear } from "../../utils/crypto.js";


export async function userController (req, res, next) {


    
      
    const {Nombre, Apellido, Edad, rol } = req.body
    const username = req.body.username
    const password = hashear(req.body.password)
    console.log(username)
    const exist = await usersRepository.findOne({username})
    if (exist) return res.status(422).json({ status: "error", error: "User already exists" })
    const nuevoCart = {
    
      
        cart:"",
        user: username
      }

    const idCart = await cartsRepository.guardar(nuevoCart)
    const user = {
        Nombre,
        Apellido,
        username,
        Edad,
        password,
        cart: idCart,
        rol
    }
    await usersRepository.guardar(user)
    // res.json({ status: "success", message: "User registered" })
    res.json(req.user)
    
  }