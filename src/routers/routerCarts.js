import { randomUUID } from "crypto";
import { Router } from "express";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";
import { cartsCollection, productsCollection } from "../dao/managers/managerMongoose.js";


      
      const routerCarts = Router();

      

      
      routerCarts.get('/', (req, res)  =>{
      
     
     res.json(ManagerHandler.getCarts());
     
     
      
    
      } );
     

        routerCarts.get('/:cid/purchase', async (req, res) =>{
        
        try{
          const cartById = await cartsCollection.findById(req.params.cid) 
          const arrayCarrito = cartById.cart
          const reqBody = req.body.id
          const found = arrayCarrito.find(elem => elem._id == reqBody )
          const foundIndex = arrayCarrito.indexOf(found)
          const stockRestante = arrayCarrito[foundIndex]?.stock-req.body.qty
        
          if (cartById){
             console.log(cartById.cart[foundIndex]?.stock-req.body.qty)
             await productsCollection.findByIdAndUpdate(reqBody, {stock: stockRestante } ) 
             res.json(cartById) 
          } 
        } catch(error){
          res.send({error:'Cart Not Found'})
        }
        

     });
   

     routerCarts.put('/:cid', async (req, res)  =>{
      
      const queryCid = req.query.cid

      const cartById = await cartsCollection.findById("6422264d4c43580d4d4f2fdd") 
      const prodDentroDelCart = await cartById.cart._id
      
      await cartsCollection.replaceOne({prodDentroDelCart}, { name: 'Jean Valjean' }) 
      res.send("probando Update")

        } );


      
    
     routerCarts.post('/', (req, res) =>{
        
        
        let ID = randomUUID();
        
        const products = []
        
        const nuevoCartConID = {cid: ID,products}
        
        ManagerHandler.addCart(nuevoCartConID);

        
        res.status(202).json(nuevoCartConID);
      });

    
      routerCarts.post('/mongoose', async (req, res)  =>{
        
        
        const prodById = await productsCollection.findById(req.body.id)
        const prodConQty = {...prodById, qty: req.body.qty}
        console.log(prodConQty)
       
        try{ 
       const nuevoCart = {
    
      
        cart:[prodConQty]
      }




       const nuevoCartGuardado = await cartsCollection.guardar(nuevoCart)
        

        res.status(202).json(`Su Producto ${prodById?.title}, fue agregado exitosamente al Carrito cuyo CID es: ${nuevoCartGuardado._id}.`);
       } catch(error){console.log(error)}
      });

      
      routerCarts.delete('/:cid/products/:pid', async (req, res) =>{
        
        
        // const prodById = await productsCollection.findById(req.body.pid)
        const cartById = await cartsCollection.findById("64221bdd6e9c88a567b55352") 
        const test = cartById.cart[0]
        
        await cartsCollection.deleteOne({test})

        res.json(`Su Producto: ${""}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
      });
  




      routerCarts.post('/:cid/products/:pid', (req, res) =>{
        
        const arrayProd = ManagerHandler.getProducts();    
        const foundProd = arrayProd.find(prod => prod.id == req.params.pid)
        
        const arrayCart = ManagerHandler.getCarts();
        const foundCart = arrayCart.find(cart => cart.cid == req.params.cid)
        
        let qty = 1 ;
        const productsCarrito = foundCart.products;
        const objetoAPushearalCartEspecifico = {ProductID: req.params.pid, qty:qty}
        
        if(foundProd && foundCart){
            
         const foundEnArrayInterno = productsCarrito.find(prod => prod.ProductID == req.params.pid)
          
         foundEnArrayInterno? foundEnArrayInterno.qty+=1 : productsCarrito.push(objetoAPushearalCartEspecifico);
         
        }

        res.json(`Su Producto: ${foundProd.title}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
      });
  

      
     


   
   
   export default routerCarts