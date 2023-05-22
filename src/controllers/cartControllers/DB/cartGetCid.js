import { testCart } from "../../../services/cartService.js"


export const cartGetCid = async (req, res) =>{
        
  
 const x = await testCart.testCart(req.params.cid, req.body.id, req.body.qty)

 res.json(x) 
  

 }