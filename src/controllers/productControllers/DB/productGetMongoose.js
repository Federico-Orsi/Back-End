import { productsRepository } from "../../../repository/productsRepository.js";

export const productGetMongoose = async (req, res)  =>{
      
  const showAll = await productsRepository.find()   
  

  res.status(202).json(showAll);

   
   
     }