import mongoose from 'mongoose';



export class ManagerMongoose {

constructor(collection, schema){
this.collection = mongoose.model(collection, new mongoose.Schema(schema))
}

async guardar (nuevoProducto) {
 return await this.collection.create(nuevoProducto)
}

}


export const productsCollection = new ManagerMongoose("products", ({
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    code: {type: Number, required: true}, 
    price: {type: Number, required: true}, 
    status: {type: String, required: true}, 
    stock: {type: String, required: true}, 
    category: {type: String, required: true}, 
    thumbnails: {type: String, required: true}
}))


export const messagesCollection = new ManagerMongoose("messages", ({
    user: {type: String, required: false}, 
    message: {type: String, required: false} 
    
}))


export const cartsCollection = new ManagerMongoose("carts", ({
    cart: {type:Object, required: true}
    
    
}))