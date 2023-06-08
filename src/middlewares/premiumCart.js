import { cartsRepository } from "../repository/cartsRepository.js"
import { productsRepository } from "../repository/productsRepository.js"


export const premiumCart = async (req, res, next) => {

    
    const prodById = await productsRepository.findById(req.params.pid)  
    
    const cartById = await cartsRepository.findById(req.params.cid)

    if(prodById?.owner != cartById.user) {
        next()
    } else{
       res.send("Lo siento!! Un Usuario Premium no puede agregar a su Carrito productos que le pertenecen.")
    }
    

    

   

   
    
   }
