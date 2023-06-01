import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ticketSchema = new mongoose.Schema ({
    code: {type: String, required: true}, 
    purchase_dateTime: {type: Date, required: true}, 
    order_total: {type: String, required: true}, 
    purchaser: {type: String, required: true} ,
    cart: {type: Object, required: true},
    productos: {type: Array, required: true}
    
}).plugin(mongoosePaginate)


export const ticketsModel = mongoose.model("tickets", ticketSchema)