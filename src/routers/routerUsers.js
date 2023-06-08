import { Router } from "express";
import { enviarMail } from "../controllers/userControllers/enviarMail.js";
import { userController } from "../controllers/userControllers/userController.js";



const routerUsers = Router();



routerUsers.post('/', userController);
  


routerUsers.post('/enviar-mail', enviarMail); 
  
  
  export default routerUsers