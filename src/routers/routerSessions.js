import { Router } from "express";
import { userCollection } from "../dao/managers/managerMongoose.js";



const routerSessions = Router();

routerSessions.post('/', async (req, res) => {

   
    const { e_mail, password} = req.body
    const user = await userCollection.findOne({ e_mail, password})
    if (!user) {
        
        res.status(401).send({ status: "error", error: "Invalid credentials" });
        
    } else {
    req.session['user'] = {
        name: `${user.Nombre} ${user.Apellido}`,
        email: user.e_mail,
        age: user.Edad,
        rol: user.rol
    }
    console.log(req.session['user'])
    res.json({ status: "success", payload: req.session['user'], message: "¡1st loguin babyyyy!! :)" })
    
    }
  });


  
  routerSessions.get('/logout', async (req, res, next) => {

    try {
        req.session.destroy(err =>{
            if(!err) res.send('logout ok')
            else res.json({status: 'logout error', body: err})
        })
    } catch (error) {
        next(error)
    } 
    

  });
  
  
  export default routerSessions