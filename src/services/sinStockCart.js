import { cartsRepository } from "../repository/cartsRepository.js"

   
      export async function sinStockCart (cid) {


      const cartById = await cartsRepository.findById(cid)
      const arr = cartById.products
      const sinStock = arr.filter(item => item.qty > item.product?.stock )  
      await cartsRepository.findByIdAndUpdate(cid, {products: sinStock } )
     
     

     }      

     

     
  
    
 