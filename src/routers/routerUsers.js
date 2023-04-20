import { Router } from "express";
import passport from 'passport';
import { userController } from "../controllers/api/userController.js";



const routerUsers = Router();

routerUsers.post('/userController', userController);

routerUsers.post('/', passport.authenticate("local", {failWithError: true}), userController);
  
  
  
  
  export default routerUsers