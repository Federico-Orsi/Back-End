import { ManagerHandler } from "../../../borrador/clases1raEntrega.js";

export const productGetRaizMemoria = (req, res)  =>{
      
     
    const cantidad = req.query.limit
  const arrayProd = ManagerHandler.getProducts();
  const limitFilter = arrayProd.slice(0, cantidad)

  if (cantidad) {
    res.send(limitFilter);
  } else { res.send(ManagerHandler.getProducts()) }
    
     
   
     }