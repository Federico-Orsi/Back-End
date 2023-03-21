import { messagesCollection } from "./managerMongoose.js";
import { io } from "../../main.js";
import mongoose from "mongoose";
import { Message } from "../models/plantillaMessage.js";


export const pasarMessages = async () => {

    const uri = "mongodb://localhost:27017/ecommerce"

    mongoose.connect(uri) 
   
    io.on('connection', socket => {
          
        
        socket.on('MongooseMessage', data => {
            
            messagesCollection.guardar(new Message(
    
               data[0],
               data[1]
            ))
            

        })
        
      })
 
    
    
    }
    
    