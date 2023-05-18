import { cartsRepository } from "../../../repository/cartsRepository.js"
import { productsRepository } from "../../../repository/productsRepository.js"

export const cartPostMongoose = async (req, res) =>{
        
    // const prodById = await productsCollection.findById(req.body.id)
        
        // const prodConQty = {...prodById, qty: req.body.qty} 
        const reqQty = req.body.qty
        const prodConQty = await productsRepository.findOneAndUpdate({_id: req.body.id}, {qty: reqQty}) 
        console.log(prodConQty)
       
        try{ 
       
       const nuevoCartGuardado = await cartsRepository.guardar(nuevoCart)
        

        res.status(202).json(`Su Producto ${prodConQty?.title}, fue agregado exitosamente al Carrito cuyo CID es: ${nuevoCartGuardado._id}.`);
       } catch(error){console.log(error)}
      }

 