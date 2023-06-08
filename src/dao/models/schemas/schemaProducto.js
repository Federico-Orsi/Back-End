import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema ({
    title: {type: String, required: true}, 
    description: {type: String, required: true},
    owner: {type: String, required: true, default:'Admin'},
    code: {type: Number, required: true}, 
    price: {type: Number, required: true}, 
    status: {type: String, required: true}, 
    stock: {type: Number, required: true}, 
    category: {type: String, required: true}, 
    thumbnails: {type: String, required: true}
}).plugin(mongoosePaginate)


export const productsModel = mongoose.model("products", productSchema)