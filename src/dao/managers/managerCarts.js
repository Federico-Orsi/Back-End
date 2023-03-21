import { cartsCollection } from "./managerMongoose.js"


export const pasarCart = async () => {

 
    await cartsCollection.guardar({
    
    cart:[{Producto: "Arnold Rules babyyy",
    qty: 1000}
        
]})
    
    }
    