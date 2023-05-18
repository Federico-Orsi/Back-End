import { Producto } from "../../../dao/models/plantillaProducto.js"
import { productsRepository } from "../../../repository/productsRepository.js"

export const productPostMongoose = async (req, res)  =>{
      
     
       try {
              const nuevoProducto = new Producto(req.body)
          
              const nuevoProdMongo = await productsRepository.guardar(nuevoProducto)
          
              const prodMongoID = await productsRepository.findById(nuevoProdMongo._id)
          
              
              res.status(202).json(prodMongoID)
            } catch (error) { console.log(error) }
       
     
       }