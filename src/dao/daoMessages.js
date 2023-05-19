import { messagesModel } from "./models/schemas/schemaMessage.js"

 class DaoMessage {
    
    
    async guardar (nuevoProducto) {
        return await messagesModel.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await messagesModel.findById(productId)   
       }
       
       async findOne(campo){
           return await messagesModel.findOne(campo)
          }
          
       
       async find (){
           return await messagesModel.find()
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await messagesModel.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await messagesModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await messagesModel.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await messagesModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await messagesModel.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }

}

export const daoMessage = new DaoMessage();