import { cartsModel } from "./models/schemas/schemaCart.js"

 class DaoCart {
    
    
    async guardar (nuevoProducto) {
        return await cartsModel.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await cartsModel.findById(productId)   
       }
       
       async findOne(campo){
           return await cartsModel.findOne(campo)
          }
          
       
       async find (){
           return await cartsModel.find()
          }
          
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await cartsModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await cartsModel.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await cartsModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await cartsModel.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }

}

export const daoCart = new DaoCart();