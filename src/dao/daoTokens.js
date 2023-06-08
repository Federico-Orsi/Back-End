
import { tokensModel } from "./models/schemas/schemaToken.js";


 class DaoToken {
    
    
    async guardar (nuevoToken) {
        
        return await tokensModel.create(nuevoToken)
       }
       
       
       
       async findById (productId){
        return await tokensModel.findById(productId)   
       }
       
       async findOne(campo){
           return await tokensModel.findOne(campo)
          }
          
       
       async find (){
           return await tokensModel.find()
          }
          
        
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await tokensModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await tokensModel.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await tokensModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
         

          
}

export const daoToken = new DaoToken();