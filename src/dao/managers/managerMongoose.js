import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'


export class ManagerMongoose {

constructor(collection, schema){
this.collection = mongoose.model(collection, new mongoose.Schema(schema).plugin(mongoosePaginate))

}

async guardar (nuevoProducto) {
 return await this.collection.create(nuevoProducto)
}

async findById (productId){
 return await this.collection.findById(productId)   
}

async find (){
    return await this.collection.find()
   }
   
   async paginate (criterioBusqueda, opcionesPaginado){
    return await this.collection.paginate(criterioBusqueda, opcionesPaginado)
   }

   async replaceOne ({filtro}, {objetoNuevo}){
    return await this.collection.replaceOne({filtro}, {objetoNuevo})
   }

   async deleteOne ({item}){
    return await this.collection.deleteOne({item})
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