import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';


const messageSchema = new mongoose.Schema ({
    
    user: {type: String, required: false}, 
    message: {type: String, required: false} 
}).plugin(mongoosePaginate)


export const messagesModel = mongoose.model("messages", messageSchema)