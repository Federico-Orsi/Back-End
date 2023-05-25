import { productsModel } from "./models/schemas/schemaProducto.js";

 class DaoProducto {
    
    
    async guardar (nuevoProducto) {
        return await productsModel.create(nuevoProducto)
       }
       
       
       
       async findById (productId){
        return await productsModel.findById(productId)   
       }
       
       async findOne(campo){
           return await productsModel.findOne(campo)
          }
          
       
       async find (){
           return await productsModel.find()
          }
          
          async paginate (criterioBusqueda, opcionesPaginado){
           return await productsModel.paginate(criterioBusqueda, opcionesPaginado)
          }
       
          async replaceOne ({filtro}, {objetoNuevo}){
           return await productsModel.replaceOne({filtro}, {objetoNuevo})
          }
       
          async deleteOne ({item}){
           return await productsModel.deleteOne({item})
          }
       
          async findByIdAndUpdate (id, datosActualizados){
       
           return await productsModel.findByIdAndUpdate(id, datosActualizados, {new: true}).lean()
          }
       
          async findOneAndUpdate (filtro, nuevoCampo){
       
           return await productsModel.findOneAndUpdate(filtro, nuevoCampo, {new: true}).lean()
          }

          async insertMany (products){
            return await productsModel.insertMany(products)
           }

}

export const daoProduct = new DaoProducto();