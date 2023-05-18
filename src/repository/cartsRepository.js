import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


class CartsRepo {
    
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



export const cartsRepository = new CartsRepo("carts", ({
    
    cart: {type:Array, required: true},
    user: {type:String, required: true}    
    
}))