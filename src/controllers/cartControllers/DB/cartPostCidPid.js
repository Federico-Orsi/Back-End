import { cartsRepository } from "../../../repository/cartsRepository.js";
import { productsRepository } from "../../../repository/productsRepository.js";

export const cartPostCidPid = async (req, res) =>{
        
   
    const prodById = await productsRepository.findById(req.params.pid)  
    
    const cartById = await cartsRepository.findById(req.params.cid)

    

    await cartById.products.push({product: prodById, qty: req.body.qty })
    const cartActualizado = await cartById?.save();

    
    console.log(cartActualizado)
    
    res.json(cartActualizado)



    
     // const cartActualizado = await cartsRepository.replaceOne({_id: req.params.cid }, pushProduct)
     // const prodConQty = {...prodById, qty: req.body.qty}
    // const cartById = await cartsRepository.findOneAndUpdate(criterio, { $push: { products: prodById}})
    // let qty = 1 ;
   
    // const objetoAPushearalCartEspecifico = {Product: prodById, qty:qty}
    
    // if(prodById && userById){
        
    //  const foundEnArrayInterno = arrayCarrito.find(prod => prod._id == req.params.pid)
      
    //  foundEnArrayInterno? foundEnArrayInterno.qty+=1 : arrayCarrito.push(objetoAPushearalCartEspecifico);
     
    // }
     
    
    // res.json(`Su Producto: ${prodById.title}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
  }