import { cartsRepository } from "../../../repository/cartsRepository.js"
import { productsRepository } from "../../../repository/productsRepository.js"

export const cartPostCidPid = async (req, res) =>{
        
    const prodById = await productsRepository.findById(req.params.pid)  
        
    const cartById = await cartsRepository.findById(req.params.cid) 
    const arrayCarrito = cartById.cart
    console.log(arrayCarrito)
    
    let qty = 1 ;
   
    const objetoAPushearalCartEspecifico = {Product: prodById, qty:qty}
    
    if(prodById && cartById){
        
     const foundEnArrayInterno = arrayCarrito.find(prod => prod._id == req.params.pid)
      
     foundEnArrayInterno? foundEnArrayInterno.qty+=1 : arrayCarrito.push(objetoAPushearalCartEspecifico);
     
    }
    console.log(arrayCarrito)
    
    res.json(`Su Producto: ${prodById.title}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
  }