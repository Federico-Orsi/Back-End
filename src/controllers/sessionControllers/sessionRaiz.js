import { cartsRepository } from "../../repository/cartsRepository.js"


export async function sessionRaiz (req, res) {

    const nuevoCart = {

        user: req.user.username
      }

    const cart = await cartsRepository.guardar(nuevoCart)
    
    // const { e_mail, password} = req.body
    // const user = await userCollection.findOne({ e_mail, password})
    // if (!user) {
        
    //     res.status(401).send({ status: "error", error: "Invalid credentials" });
        
    // } else {
    // req.session['user'] = {
    //     name: `${user.Nombre} ${user.Apellido}`,
    //     email: user.e_mail,
    //     age: user.Edad,
    //     rol: user.rol
    // }
    // console.log(req.session['user'])
    res.json({ status: "success", payload: req['user'], message: "¡1st loguin babyy!! :)" })
    
    }
  