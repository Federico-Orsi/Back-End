import { cartsRepository } from "../../../repository/cartsRepository.js";
import { productsRepository } from "../../../repository/productsRepository.js";

export const cartDeleteCidPid = async (req, res) =>{
        
  const prod =  await productsRepository.findById(req.body.pid) // Este es el ID del producto almacenado en la DB

    cartsRepository.updateOne(
      { _id: req.params.cid}, // Este es el filtro para encontrar el Cart
      { $pull: { products: { _id: req.params.pid } } } //Con $pull eliminamos el objeto(Producto) del array products
    )
      

    // Tener en cuenta que el pid del Body es el ID del Producto, mientras que el pid(params) es el ObjectID de ese Producto pero dentro del Carrito!!

    res.send(`Su producto "${prod?.title}" fue eliminado correctamente del Cart bajo el ID: "${req.params.cid}"`);
  }