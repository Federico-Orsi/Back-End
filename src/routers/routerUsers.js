import { Router } from "express";
import { userController } from "../controllers/userControllers/userController.js";



const routerUsers = Router();



routerUsers.post('/', userController);
  
  
  
  
  export default routerUsers