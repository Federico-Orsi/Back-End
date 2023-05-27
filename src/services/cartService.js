import { cartsRepository } from "../repository/cartsRepository.js"
import { productsRepository } from "../repository/productsRepository.js"

   
     class cartService {

     
     async testCart(cid, pid, qty){
       
        const cartById = await cartsRepository.findById(cid) 
        const arrayCarrito = cartById.products
        const reqBody = pid
        const found = arrayCarrito.find(elem => elem._id == reqBody )
        const foundIndex = arrayCarrito.indexOf(found)
        const stockRestante = arrayCarrito[foundIndex]?.stock-qty
      
        if (cartById){
           console.log(stockRestante)
           await productsRepository.findByIdAndUpdate(reqBody, {stock: stockRestante } ) 
           
           return cartById
        } 
      
    }

     }      

     export const testCart = new cartService();

     
  
    
 