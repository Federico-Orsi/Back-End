// import mongoose from 'mongoose';
// import { uriAtlas } from './main';



// await mongoose.connect(uriAtlas);
// const prodSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     price: { type: Number, required: true }
// });
// const productsDb = mongoose.model("products", prodSchema);
// const cartSchema = new mongoose.Schema({
//     cartProducts: { type: [{}], required: true },
// });
// const cartsDb = mongoose.model("carts", cartSchema);
// await cartsDb.create({
//     cartProducts: [{
//         Producto1: "gato",
//         qty: 5
//     }, {
//         Producto2: "perro",
//         qty: 3
//     }]
// });
// await productsDb.create({
//     title: "Producto 1",
//     price: 200
// });
// await productsDb.create({
//     title: "Producto 2",
//     price: 300
// });
// mongoose.connection.close();


// {
//     "title": "Leo King4", 
//     "description": "La 3ra",      
//      "code": 123, 
//      "price": 10000, 
//       "status": "rogerThat", 
//       "stock": 500,      
//       "category": "action", 
//       "thumbnails": "rocko.jpg"  
//   }


// routerProducts.put('/:pid', (req, res) =>{
//   const datosBody = req.body ;
//   const infoToUpdateProduct = new Product(datosBody);

//   const arrayProd = ManagerHandler.getProducts();    
//   const found = arrayProd.find(prod => prod.id == req.params.pid)
//   const newProductConID = {...infoToUpdateProduct, id: found.id}

//       if(found){

//            const foundIndex = arrayProd.indexOf(found)
//            arrayProd.splice(foundIndex,1, newProductConID);

//           res.json(newProductConID);
//       } else{res.json({"Error":'El producto que intenta actualizar no se encuentra en el Array'})}

// });


// routerCarts.get('/:cid', (req, res) =>{

//     const arrayCart = ManagerHandler.getCarts();
//     const found = arrayCart.find(cart => cart.cid == req.params.cid)
    
//     if (found){
//        res.json(found) 
 
//     } else { 
//     res.send({"Error":'Cart Not Found'})
    
//    }  
  

//  });


// routerCarts.post('/:cid/products/:pid', (req, res) =>{
        
//     const arrayProd = ManagerHandler.getProducts();    
//     const foundProd = arrayProd.find(prod => prod.id == req.params.pid)
    
//     const arrayCart = ManagerHandler.getCarts();
//     const foundCart = arrayCart.find(cart => cart.cid == req.params.cid)
    
//     let qty = 1 ;
//     const productsCarrito = foundCart.products;
//     const objetoAPushearalCartEspecifico = {ProductID: req.params.pid, qty:qty}
    
//     if(foundProd && foundCart){
        
//      const foundEnArrayInterno = productsCarrito.find(prod => prod.ProductID == req.params.pid)
      
//      foundEnArrayInterno? foundEnArrayInterno.qty+=1 : productsCarrito.push(objetoAPushearalCartEspecifico);
     
//     }

//     res.json(`Su Producto: ${foundProd.title}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
//   });



//   routerProducts.get('/:pid', (req, res) =>{

//     const arrayProd = ManagerHandler.getProducts();
//     const found = arrayProd.find(prod => prod.id == req.params.pid)

//     if (found){
//        res.send(found) 

//     } else { 
//     res.send({"Error":'Product Not Found'})

//    }  


//  });
