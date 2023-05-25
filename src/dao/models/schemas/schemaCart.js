import { Schema, model } from "mongoose";

 const cartSchema = new Schema({
    
    user: {type:String, required: false},
    products: {
        type: [
            {
                product:{
                    // type: Schema.Types.ObjectId ,
                    type: Object,
                    ref: "products"
                }
            }
        ],
        default:[],
    },
})

cartSchema.pre(/^find/, function (next) {
    this.populate('products.product')
    next()
})


export const cartsModel = model("carts", cartSchema)
