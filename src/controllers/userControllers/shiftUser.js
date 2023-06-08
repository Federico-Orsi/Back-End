import { usersRepository } from "../../repository/usersRepository.js";



export async function shiftUser(req, res, next) {
    
    const user = await usersRepository.findById(req.params.uid)

    if(user.rol == "User"){ 
        user.rol = "Premium"
    } else if(user.rol == "Premium") {
        user.rol = "User"
    }
    
    user?.save()


    res.json(`Listo!! Su nuevo rol es: ${user.rol}`);

}

