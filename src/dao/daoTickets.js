import { ticketsModel } from "./models/schemas/schemaTicket.js"

 class DaoTicket {
    
    
    async guardar (nuevoProducto) {
        return await ticketsModel.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await ticketsModel.findById(productId)   
       }
       
       async findOne(campo){
           return await ticketsModel.findOne(campo)
          }
          
       
       async find (){
           return await ticketsModel.find()
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await ticketsModel.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await ticketsModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await ticketsModel.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await ticketsModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await ticketsModel.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }

}

export const daoTicket = new DaoTicket();