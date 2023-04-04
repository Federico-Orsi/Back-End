import { Router } from "express";
import { randomUUID } from "crypto";
import { Carrito } from "../dao/managers/clases1raEntrega.js";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";
import { cartsCollection } from "../dao/managers/managerMongoose.js";
import mongoose from 'mongoose';
import { productsCollection } from "../dao/managers/managerMongoose.js";


      
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

        
       
        try{ 
       const nuevoCart = {
    
      
        cart:[prodById]
      }




       await cartsCollection.guardar(nuevoCart)
        

        res.status(202).json(`Su Producto ${prodById.title}, fue agregado al Carrito cuyo CID se guardó en la base de datos de Mongo DB.`);
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