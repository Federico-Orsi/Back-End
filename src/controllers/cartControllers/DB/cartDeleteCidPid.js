import { cartsRepository } from "../../../repository/cartsRepository.js"

export const cartDeleteCidPid = async (req, res) =>{
        
    // const prodById = await productsCollection.findById(req.body.pid)
    const cartById = await cartsRepository.findById(req.body.cid) 
    const test = cartById.cart[0]
    
    await cartsRepository.deleteOne({test})

    res.json(`Su Producto: ${""}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
  }