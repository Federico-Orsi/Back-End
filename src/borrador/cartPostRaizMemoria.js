import crypto from "crypto";
import { ManagerHandler } from "./clases1raEntrega.js";

export const cartPostRaizMemoria = (req, res)  =>{
      
     
        
        let ID = crypto.randomUUID();
        console.log(Number(ID));
        
        const randomNumber = crypto.randomInt(1000, 9999)
        const orderNumber = Number(`${Date.now()}${randomNumber}`)
        console.log(orderNumber)

        console.log(Date.now())
        console.log(new Date())
        
        const products = []
        
        const nuevoCartConID = {cid: ID,products}
        
        ManagerHandler.addCart(nuevoCartConID);

        
        res.status(202).json(nuevoCartConID);
      }
    