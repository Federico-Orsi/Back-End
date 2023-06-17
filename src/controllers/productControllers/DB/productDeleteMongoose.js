import { NotFoundError } from "../../../errors/errors.js"
import { productsRepository } from "../../../repository/productsRepository.js"


export const productDeleteMongoose = async (req, res) => {

 try {
    const prod = await productsRepository.findById(req.params.pid)

    if(!prod) throw new NotFoundError
    
    if((prod?.owner == req.user.username) || (req.user?.rol == "Admin") ){
        
        await productsRepository.deleteOne({_id: req.params.pid})
        res.send(`El producto bajo el id:${req.params.pid} fue eliminado correctamente.`)
    } else{
        res.send(`Upss, la acción no pudo procesarse!! Recuerde que solamente puede eliminar productos que le pertenezcan a usted.`)
    }

    
 } catch (error) {
    console.log(error)
    
 }
    
   

    
    

}