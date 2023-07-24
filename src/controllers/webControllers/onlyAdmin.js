import { usersRepository } from "../../repository/usersRepository.js";

export const onlyAdmin = async (req, res) => {

  const allUsers = await usersRepository.find()


  const test = [
    {
      nombre: "juan",
      apellido: "gomez"
    },
    {
      nombre: "ana",
      apellido: "lopez"
    }
  ]


  if (req.user?.rol == "Admin") {

    res.render('onlyAdmin', { SessionName: req.user?.Nombre, SessionLastName: req.user?.Apellido, SessionEmail: req.user?.username, SessionRol: req.user?.rol, UserId: req.user?._id, Users: allUsers, test });
  } else {
    res.render('redirecting')

  }






}