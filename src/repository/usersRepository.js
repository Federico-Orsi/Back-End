import { daoUser } from '../dao/daoUsers.js';


class UsersRepo {
    
        constructor(dao){
        this.dao = dao
    }

    async guardar (nuevoProducto) {
        return await this.dao.guardar(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await this.dao.findById(productId)   
       }
       
       async findOne(campo){
           return await this.dao.findOne(campo)
          }
          
       
       async find (){
           return await this.dao.find({lean:true})
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await this.dao.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await this.dao.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne (item){
           return await this.dao.deleteOne(item)
          }

          async deleteMany (){
            return await this.dao.deleteMany()
           }

           async insertMany (arr){
            return await this.dao.insertMany(arr)
           }
       
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await this.dao.findByIdAndUpdate(id, datosActualizados, {new: true})
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await this.dao.findOneAndUpdate(filtro, nuevoCampo, {new: true})
          }
       
}



export const usersRepository = new UsersRepo(daoUser)