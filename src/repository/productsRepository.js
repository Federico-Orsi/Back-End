import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


class ProductsRepo {
   
    constructor(collection, schema){
        this.collection = mongoose.model(collection, new mongoose.Schema(schema).plugin(mongoosePaginate))
    }

    async guardar (nuevoProducto) {
        return await this.dao.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await this.dao.findById(productId)   
       }
       
       async findOne(campo){
           return await this.dao.findOne(campo)
          }
          
       
       async find (){
           return await this.dao.find()
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await this.dao.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await this.dao.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await this.dao.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await this.dao.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await this.dao.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }
       
}


export const productsRepository = new ProductsRepo("products", ({
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    code: {type: Number, required: true}, 
    price: {type: Number, required: true}, 
    status: {type: String, required: true}, 
    stock: {type: Number, required: true}, 
    category: {type: String, required: true}, 
    thumbnails: {type: String, required: true}
}))