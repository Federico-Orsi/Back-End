import { ManagerHandler } from "../../../borrador/clases1raEntrega.js";

export const cartGetRaizMemoria = (req, res)  =>{
      
   

    res.json(ManagerHandler.getCarts());
    
    
     
   
     }