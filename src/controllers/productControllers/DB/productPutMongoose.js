import { productsRepository } from "../../../repository/productsRepository.js";



export const productPutMongoose = async (req, res)  =>{
      

        const prodEncontrado = await productsRepository.findById(req.body.id)
      
        prodEncontrado.description = req.body.description;
        prodEncontrado.status = req.body.status;
        prodEncontrado.category = req.body.category;
      
        prodEncontrado?.save()
      
      
        res.json(prodEncontrado);
    
       }