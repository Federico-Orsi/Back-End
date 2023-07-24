import { usersRepository } from "../../repository/usersRepository.js";



export async function updateOneUser(req, res, next) {

  try {
    const user = await usersRepository.findById(req.body.id)
    
    if (user) {
      user.rol = req.body.rol
      user.save()
    }


    await res.json(`El rol del usuario ${user?.username}, ha sido actualizado a ${req.body.rol} correctamente en la DB.`)

  } catch (error) {

    console.log(error);
  }


}


