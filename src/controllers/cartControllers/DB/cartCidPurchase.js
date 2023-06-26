import { NotFoundError } from "../../../errors/errors.js"
import { ticketService } from "../../../services/ticketService.js"

export const cartCidPurchase = async (req, res) => {

  try {
    const ticket = await ticketService.create(req.params.cid)
    
    if(ticket){
      console.log(ticket)
      res.status(200).json(ticket)
    } else{
      throw new NotFoundError()
    }
    
  } catch (error) {

    res.status(404).json(error)
  }




}