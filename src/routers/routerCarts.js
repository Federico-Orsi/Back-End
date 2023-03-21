import { Router } from "express";
import { randomUUID } from "crypto";
import { Carrito } from "../dao/managers/clases1raEntrega.js";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";
import { cartsCollection } from "../dao/managers/managerMongoose.js";
import mongoose from 'mongoose';


      
      const routerCarts = Router();

      
      routerCarts.get('/', (req, res)  =>{
      
     
     res.json(ManagerHandler.getCarts());
     
     
      
    
      } );
     

        routerCarts.get('/:cid', (req, res) =>{

        const arrayCart = ManagerHandler.getCarts();
        const found = arrayCart.find(cart => cart.cid == req.params.cid)
        
        if (found){
           res.json(found) 
     
        } else { 
        res.send({"Error":'Cart Not Found'})
        
       }  
      

     });
   

     routerCarts.put('/', (req, res)  =>{
      
      ManagerHandler.write();
      res.send("Se generaron efectivamente los archivos Productos.json y Carritos.json , los cuales respaldan en persistencia todas las operaciones realizadas previamente.")

        } );


      
    
     routerCarts.post('/', (req, res) =>{
        
        
        let ID = randomUUID();
        
        const products = []
        
        const nuevoCartConID = {cid: ID,products}
        
        ManagerHandler.addCart(nuevoCartConID);

        
        res.status(202).json(nuevoCartConID);
      });

    
      routerCarts.post('/mongoose', async (req, res)  =>{
        
        const uri = "mongodb://localhost:27017/ecommerce"

        await mongoose.connect(uri)
        
       
        try{ 
       const nuevoCart = {
    
        cart:[{Producto: req.body.Producto,
        qty: req.body.qty}
            
    ]}




       await cartsCollection.guardar(nuevoCart)
        

        res.status(202).json(`Su Producto ${req.body.Producto}, fue agregado al Carrito cuyo CID se guardó en la base de datos de Mongo DB.`);
       } catch(error){console.log(error)}
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