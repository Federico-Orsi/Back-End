import { Router } from "express";
import { userController } from "../controllers/api/userController.js";



const routerUsers = Router();



routerUsers.post('/', userController);
  
  
  
  
  export default routerUsers