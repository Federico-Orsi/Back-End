import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


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

async findOne(campo){
    return await this.collection.findOne(campo)
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

   async findByIdAndUpdate (id, datosActualizados){

    return await this.collection.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
   }

   async findOneAndUpdate (filtro, nuevoCampo){

    return await this.collection.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
   }

}


// export const daoProductsCollection = new ManagerMongoose("products", ({
//     title: {type: String, required: true}, 
//     description: {type: String, required: true}, 
//     code: {type: Number, required: true}, 
//     price: {type: Number, required: true}, 
//     status: {type: String, required: true}, 
//     stock: {type: Number, required: true}, 
//     category: {type: String, required: true}, 
//     thumbnails: {type: String, required: true}
// }))


// export const messagesCollection = new ManagerMongoose("messages", ({
//     user: {type: String, required: false}, 
//     message: {type: String, required: false} 
    
// }))


// export const cartsCollection = new ManagerMongoose("carts", ({
//     cart: {type:Array, required: true},
//     user: {type:String, required: true}
//     // products: {
//     //     type: [
//     //         {
//     //             product:{
//     //                 type: Schema.Types.ObjectId ,
//     //                 ref: "products"
//     //             }
//     //         }
//     //     ]
//     // }
    
    
// }))


// export const daoUserCollection = new ManagerMongoose("user", ({
//     Nombre: {type: String, required: true}, 
//     Apellido: {type: String, required:true},
//     username: {type: String, required: true},
//     Edad: {type: Number},
//     password: {type: String, required: true},
//     cart: {type: Object, required: true},
//     rol: {type: String, required: true}
    
// }))