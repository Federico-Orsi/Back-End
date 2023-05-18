import mongoose from "mongoose";
import { io } from "../../main.js";
import { messagesRepository } from "../../repository/messagesRepository.js";
import { Message } from "../models/plantillaMessage.js";


export const pasarMessages = async () => {

    const uri = "mongodb://localhost:27017/ecommerce"

    mongoose.connect(uri) 
   
    io.on('connection', socket => {
          
        
        socket.on('MongooseMessage', data => {
            
            messagesRepository.guardar(new Message(
    
               data[0],
               data[1]
            ))
            

        })
        
      })
 
    
    
    }
    
    