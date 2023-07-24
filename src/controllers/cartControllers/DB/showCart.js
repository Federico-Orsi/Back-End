import { cartsRepository } from "../../../repository/cartsRepository.js";



export const showCart = async (req, res) => {
  try {
    const cartId = req.params.cid
    const cart = await cartsRepository.findById(cartId)

    res.json(cart);
  } catch (error) {
    console.log(error);
  }

}