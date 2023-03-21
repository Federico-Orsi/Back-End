// import { ManagerMongoose } from "./managerMongoose.js";
import { productsCollection } from "./managerMongoose.js";
import { Producto } from "../models/plantillaProducto.js";


export const pasarProd = async () => {

 
await productsCollection.guardar(new Producto({

    title: "Rocko Rules babyyy", 
    description: "best movie ever", 
    code: 123, 
    price: 10000, 
    status: "rogerThat", 
    stock: 500, 
    category: "action", 
    thumbnails: "rocko.jpg"  
}))

}

