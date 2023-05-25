import { pushArray } from "../../mocks/mocks.js"
import { productsRepository } from "../../repository/productsRepository.js"

export const postMocking = async (req, res) =>{
   
  const arr = pushArray() 
    
  await productsRepository.insertMany(arr)

    await res.json(arr) 
   
    }