import { ManagerHandler } from "../../../borrador/clases1raEntrega.js";

export const productDeleteMemoria = (req, res)  =>{
      
    const arrayProd = ManagerHandler.getProducts();
    const found = arrayProd.find(prod => prod.id == req.params.pid)
  
  
    if (found) {
  
      const foundIndex = arrayProd.indexOf(found)
      arrayProd.splice(foundIndex, 1);
  
      res.send(`El producto ${found.title}, ha sido eliminado correctamente.`);
    } else { res.json({ "Error": 'El producto que intenta eliminar no se encuentra en el Array' }) }
  
  
  
 
   
     }