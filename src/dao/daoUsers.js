import { usersModel } from "./models/schemas/schemaUser.js"
 

class DaoUser {
    
    
    async guardar (nuevoProducto) {
        return await usersModel.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await usersModel.findById(productId)   
       }
       
       async findOne(campo){
           return await usersModel.findOne(campo)
          }
          
       
       async find (){
           return await usersModel.find()
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await usersModel.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await usersModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne (item){
           return await usersModel.deleteOne(item)
          }

          async deleteMany (){
            return await usersModel.deleteMany()
           }

           async insertMany (arr){
            return await usersModel.insertMany(arr)
           }
       
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await usersModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await usersModel.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }

}

export const daoUser = new DaoUser();