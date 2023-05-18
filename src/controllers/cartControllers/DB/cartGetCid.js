import { cartsRepository } from "../../../repository/cartsRepository.js"
import { productsRepository } from "../../../repository/productsRepository.js"


export const cartGetCid = async (req, res) =>{
        
    try{
      const cartById = await cartsRepository.findById(req.params.cid) 
      const arrayCarrito = cartById.cart
      const reqBody = req.body.id
      const found = arrayCarrito.find(elem => elem._id == reqBody )
      const foundIndex = arrayCarrito.indexOf(found)
      const stockRestante = arrayCarrito[foundIndex]?.stock-req.body.qty
    
      if (cartById){
         console.log(cartById.cart[foundIndex]?.stock-req.body.qty)
         await productsRepository.findByIdAndUpdate(reqBody, {stock: stockRestante } ) 
         
         res.json(cartById) 
      } 
    } catch(error){
      res.send({error:'Cart Not Found'})
    }
    

 }