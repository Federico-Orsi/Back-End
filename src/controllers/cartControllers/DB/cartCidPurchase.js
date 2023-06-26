import { ticketService } from "../../../services/ticketService.js"

export const cartCidPurchase = async (req, res) =>{
        
  
 const ticket = await ticketService.create(req.params.cid)

 

 console.log(ticket)
 res.status(200).json(ticket)
 

 }