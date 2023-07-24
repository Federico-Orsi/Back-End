import { usersRepository } from "../../repository/usersRepository.js"






export async function userGetRaiz (req, res, next) {

 const allUsers = await usersRepository.find()
 


 const allUserDto = allUsers.map(user =>  {
  return {"Nombre":user.Nombre, 
    "UserName":user.username, 
    "Rol":user.rol}
 })
      
   

    res.json(allUserDto)
    
  }