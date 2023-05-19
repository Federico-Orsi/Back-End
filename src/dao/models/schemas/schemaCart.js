import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

export const cartSchema = new mongoose.Schema({
    cart: {type:Array, required: true},
    user: {type:String, required: true}
    // products: {
    //     type: [
    //         {
    //             product:{
    //                 type: Schema.Types.ObjectId ,
    //                 ref: "products"
    //             }
    //         }
    //     ]
    // }
}).plugin(mongoosePaginate)


export const cartsModel = mongoose.model("carts", cartSchema)
