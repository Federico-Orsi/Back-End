import { Router } from "express";
import { enviarMail } from "../controllers/userControllers/enviarMail.js";
import { shiftUser } from "../controllers/userControllers/shiftUser.js";
import { updatePassword } from "../controllers/userControllers/updatePassword.js";
import { userController } from "../controllers/userControllers/userController.js";

const routerUsers = Router();



routerUsers.post('/', userController);
  
routerUsers.put('/premium/:uid', shiftUser);

routerUsers.put('/actualizar_password', updatePassword);

routerUsers.post('/enviar-mail', enviarMail); 
  
  
  export default routerUsers