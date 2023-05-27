import crypto from "crypto";
import { cartsRepository } from "../repository/cartsRepository.js";
import { ticketsRepository } from "../repository/ticketsRepository.js";
import { totalAmountCart } from "./totalAmountCart.js";

class TicketService {

    async create(cid) {
      
        const cartById = await cartsRepository.findById(cid) 
        
        // const cart = await cartsRepository.findOne({ _id: cid })
        // const wantedProducts = productIds.map(pid => {
        //   const wanted = business.products.find(bp => bp.id === pid)
        //   if (!wanted) {
        //     throw new Error('productos invalidos para el negocio seleccionado')
        //   }
        //   return wanted
        // })
        const amountCart = await totalAmountCart(cid)
        
        // const totalPrice = wantedProducts.reduce((accum, prod) => prod.price + accum, 0)
        const newTicketData = {
          code: crypto.randomUUID(),
          purchase_dateTime: new Date(),
          purchaser: cartById.user,
          cart: cartById._id,
          productos: cartById.products,
          order_total: amountCart
          
        }
        const ticket = await ticketsRepository.guardar(newTicketData)
        
        return ticket
        
        
      }
    
    }
    
    export const ticketService = new TicketService()

