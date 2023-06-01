import crypto from "crypto";
import { cartsRepository } from "../repository/cartsRepository.js";
import { ticketsRepository } from "../repository/ticketsRepository.js";
import { actualizarStocks } from "./actualizarStocks.js";
import { sinStockCart } from "./sinStockCart.js";
import { totalAmountCart } from "./totalAmountCart.js";
 
 class TicketService {

     async create(cid) {
      
        const cartById = await cartsRepository.findById(cid) 
        const arr = cartById.products
        const stock_OK = arr.filter(item => item.qty < item.product?.stock )  
        
        const amountCart = await totalAmountCart(cid)
         
        const newTicketData = {
          code: crypto.randomUUID(),
          purchase_dateTime: new Date(),
          purchaser: cartById.user,
          cart: cartById._id,
          productos: stock_OK,
          order_total: "$"+" "+ amountCart
          
        }
        const ticket = await ticketsRepository.guardar(newTicketData)

        await actualizarStocks(cid)
        await sinStockCart(cid)
        
        return ticket
        
        
      }
    
    }
    
    export const ticketService = new TicketService()

