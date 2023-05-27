import { ticketService } from "../../../services/ticketService.js"

export const cartCidPurchase = async (req, res) =>{
        
  
// await testCart.testCart(req.params.cid, req.body.id, req.body.qty)

const ticket = await ticketService.create(req.params.cid)
 
 console.log(ticket)
 res.json(ticket)
 

 }