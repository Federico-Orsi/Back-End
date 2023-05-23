import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ticketSchema = new mongoose.Schema ({
    code: {type: String, required: true}, 
    purchase_dateTime: {type: Date, required: true}, 
    // amount: {type: Number, required: true}, 
    purchaser: {type: String, required: true} ,
    rol: {type: String, required: true},
    cart: {type: Object, required: true} 
    
}).plugin(mongoosePaginate)


export const ticketsModel = mongoose.model("tickets", ticketSchema)