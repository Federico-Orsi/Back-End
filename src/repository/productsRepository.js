import { daoProduct } from '../dao/daoProducts.js';


class ProductsRepo {
   
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


export const productsRepository = new ProductsRepo(daoProduct)