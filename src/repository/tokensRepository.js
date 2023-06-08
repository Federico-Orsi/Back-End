import jwt from 'jsonwebtoken'
import { daoToken } from "../dao/daoTokens.js"


class TokenRepo {
   
    constructor(dao){
        this.dao = dao
    }

    async guardar (nuevoToken) {
        return await this.dao.guardar(nuevoToken)
       }

       async generarToken (userId, secret, ttl) {
        jwt.sign(userId, secret, ttl)
       }  

       async decodificarToken (nuevoToken) {
        return await this.dao.guardar(nuevoToken)
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
       
           return await this.dao.findByIdAndUpdate(id, datosActualizados, {new: true})
          }
       
          
}


export const tokensRepository = new TokenRepo(daoToken)