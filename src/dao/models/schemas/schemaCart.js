import { Schema, model } from "mongoose";

 const cartSchema = new Schema({
    
    user: {type:String, required: false},
    products: 
              [
            {
                product:{
                    // type: Schema.Types.ObjectId ,
                    // ref: "products",
                    // foreignField: '_id',
                    // required: true
                    type: Object
                },
                qty: {type:Number}
            }
        ]      
})

// cartSchema.pre(/^find/, function (next) {
//     this.populate('products.product')
//     next()
// })


export const cartsModel = model("carts", cartSchema)
