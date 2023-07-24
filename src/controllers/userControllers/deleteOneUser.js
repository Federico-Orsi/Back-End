import { usersRepository } from "../../repository/usersRepository.js"



export async function deleteOneUser(req, res, next) {

  try {
    const userId = await usersRepository.findById(req.body.id)


    const filtro = { _id: userId._id }

    await usersRepository.deleteOne(filtro)

    await res.json(`El usuario ${userId?.username}, ha sido eliminado correctamente.`)

  } catch (error) {
    
    console.log(error);
  }


}



