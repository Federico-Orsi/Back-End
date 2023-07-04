import { cartsRepository } from "../../repository/cartsRepository.js";


export async function sessionRaiz (req, res) {

  const userName = req.user.username
  const user = await cartsRepository.findOne({user:userName})
  const usuario = req.user
  
  usuario.last_connection = new Date().getTime();

  usuario.save()

  if(!user){
    
    const nuevoCart = {

        user: req.user.username
      }

    const cart = await cartsRepository.guardar(nuevoCart)
  }

   
    
    res.json({ status: "success", payload: req['user'], message: "¡1st loguin babyy!! :)" })
    
    }
  


  //--- Ejemplo de req.session sin Passport -----------------------------------------
   
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

     //--------------------------------------------------------------------------------