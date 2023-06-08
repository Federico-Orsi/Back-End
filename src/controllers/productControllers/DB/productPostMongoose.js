import { Producto } from "../../../dao/models/plantillaProducto.js"
import { productsRepository } from "../../../repository/productsRepository.js"
import { usersRepository } from "../../../repository/usersRepository.js"


export const productPostMongoose = async (req, res) => {


       try {
              const nuevoProducto = new Producto(req.body)
              const owner = nuevoProducto.owner
              const user = await usersRepository.findOne({username:owner})

              if (user?.rol == "Premium") {

                     const nuevoProdMongo = await productsRepository.guardar(nuevoProducto)
                     const prodMongoID = await productsRepository.findById(nuevoProdMongo._id)
                     res.status(202).json(prodMongoID)
              } else{
                     res.status(401).send("El campo Owner solo admite Usuarios Premium")
              }



              


              
       } catch (error) { console.log(error) }


}