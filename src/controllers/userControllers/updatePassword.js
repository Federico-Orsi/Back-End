import { UnauthorizedError } from "../../errors/errors.js"
import { usersRepository } from "../../repository/usersRepository.js"
import { validarQueSeanIguales } from "../../utils/crypto.js"

export async function updatePassword(req, res, next) {
    
   const user = await usersRepository.findById(req.body.uid)
   
   
   

   if(!validarQueSeanIguales(req.body.oldPass, user.password)){
    throw new UnauthorizedError("Ha habido un error con alguna de sus claves")
   } else if(validarQueSeanIguales(req.body.newPass, user.password)){
    res.json("La nueva contraseña no puede ser igual a la anterior");
    throw new UnauthorizedError("Ha habido un error con alguna de sus claves")
    
   }

  res.json(user)
    

}