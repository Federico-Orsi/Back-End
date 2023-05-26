import { io } from "../../main.js";
import { messagesRepository } from "../../repository/messagesRepository.js";
import { Message } from "../models/plantillaMessage.js";


export const pasarMessages = async (req) => {

 
   
    io.on('connection', socket => {
          
        
        socket.on('MongooseMessage', data => {
          // if(req.user?.rol != "User") throw new UnauthorizedError();
            messagesRepository.guardar(new Message(
    
               data[0],
               data[1]
            ))
            

        })
        
      })
 
    
    
    }
    
    