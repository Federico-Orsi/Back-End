import { Router } from "express";
import passport from 'passport';
import { currentSession } from "../controllers/sessionControllers/currentSession.js";
import { sessionLogOut } from "../controllers/sessionControllers/sessionLogOut.js";
import { sessionRaiz } from "../controllers/sessionControllers/sessionRaiz.js";



const routerSessions = Router();




  routerSessions.post('/', passport.authenticate("local", {failWithError: true}), sessionRaiz);


  
  routerSessions.get('/logout', sessionLogOut);
  
 
  routerSessions.get('/current', currentSession );

  
  export default routerSessions