import { cartsRepository } from "../../../repository/cartsRepository.js"

export const cartPutCidDb = async (req, res) =>{
        
    const queryCid = req.query.cid

    const cartById = await cartsRepository.findById("6422264d4c43580d4d4f2fdd") 
    const prodDentroDelCart = await cartById.cart._id
    
    await cartsRepository.replaceOne({prodDentroDelCart}, { name: 'Jean Valjean' }) 
    res.send("probando Update")


 }