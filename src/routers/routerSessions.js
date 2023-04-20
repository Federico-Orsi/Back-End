import { Router } from "express";

import passport from 'passport';
import { sessionController } from "../controllers/api/sessionController.js";




const routerSessions = Router();




  routerSessions.post('/', passport.authenticate("local", {failWithError: true}), sessionController);


  
  routerSessions.get('/logout', async (req, res, next) => {

    // try {
    //     req.session.destroy(err =>{
    //         if(!err) res.send('logout ok')
    //         else res.json({status: 'logout error', body: err})
    //     })
    // } catch (error) {
    //     next(error)
    // } 

    try {
        req.logout(err =>{
            if(!err) res.send('logout ok')
            else res.json({status: 'logout error', body: err})
        })
    } catch (error) {
        next(error)
    } 


    

  });
  
  
  export default routerSessions