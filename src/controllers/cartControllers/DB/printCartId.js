import { cartsRepository } from "../../../repository/cartsRepository.js";



export const printCartId = async (req, res) =>{
        
  const userName = req.body.username
  const cartUser = await cartsRepository.findOne({user:userName})

    res.json(cartUser);
  }