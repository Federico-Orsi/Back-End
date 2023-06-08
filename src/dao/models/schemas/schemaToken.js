import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

export const tokenSchema = new mongoose.Schema({
    userId: {type: String, required: true}, 
    token: {type: String, required: true}
    
}).plugin(mongoosePaginate)


export const tokensModel = mongoose.model("tokens", tokenSchema)
