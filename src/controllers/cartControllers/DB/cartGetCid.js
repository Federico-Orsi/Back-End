import { testCart } from "../../../services/cartService.js"
import { ticketService } from "../../../services/ticketService.js"

export const cartGetCid = async (req, res) =>{
        
  
 await testCart.testCart(req.params.cid, req.body.id, req.body.qty)

 const ticket = await ticketService.create(req.body.userId)
 
 
 res.json(ticket) 
  

 }