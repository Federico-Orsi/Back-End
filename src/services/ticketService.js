import crypto from "crypto";
import { ticketsRepository } from "../repository/ticketsRepository.js";
import { usersRepository } from "../repository/usersRepository.js";

class TicketService {

    async create(userId) {
        const user = await usersRepository.findOne({ _id: userId })
        // const cart = await cartsRepository.findOne({ _id: cid })
        // const wantedProducts = productIds.map(pid => {
        //   const wanted = business.products.find(bp => bp.id === pid)
        //   if (!wanted) {
        //     throw new Error('productos invalidos para el negocio seleccionado')
        //   }
        //   return wanted
        // })

        
        // const totalPrice = wantedProducts.reduce((accum, prod) => prod.price + accum, 0)
        const newTicketData = {
          code: crypto.randomUUID(),
          purchase_dateTime: new Date(),
          purchaser: user.username,
          cart: user.cart,
          rol: user.rol
          
        }
        const ticket = await ticketsRepository.guardar(newTicketData)
        
        
        return ticket
      }
    
    }
    
    export const ticketService = new TicketService()

