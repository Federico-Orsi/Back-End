import { Router } from "express";
import { randomUUID } from "crypto";
import { Product } from "../dao/managers/clases1raEntrega.js";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";

import { Producto } from "../dao/models/plantillaProducto.js";
import { productsCollection } from "../dao/managers/managerMongoose.js";
import mongoose from 'mongoose';

      
      const routerProducts = Router();

      
      routerProducts.get('/', (req, res)  =>{
      
      const cantidad = req.query.limit
      const arrayProd = ManagerHandler.getProducts();  
      const limitFilter = arrayProd.slice(0, cantidad)
       
      if(cantidad){
        res.send(limitFilter);
       }else {res.send(ManagerHandler.getProducts())}
        } );
     

      routerProducts.get('/:pid', (req, res) =>{

        const arrayProd = ManagerHandler.getProducts();
        const found = arrayProd.find(prod => prod.id == req.params.pid)
        
        if (found){
           res.send(found) 
     
        } else { 
        res.send({"Error":'Product Not Found'})
        
       }  
      

     });
   
        
    
      routerProducts.post('/', (req, res) =>{
        const datosBody = req.body ;
        const newProduct = new Product(datosBody);
        
        let ID = randomUUID();
        
        const nuevoProductoConID = {...newProduct, id: ID}
        ManagerHandler.addProduct(nuevoProductoConID);

        req.io.on('connection', socket => {
          
          const arrayProd = ManagerHandler.getProducts();  
          const found = arrayProd.find(prod => prod.id === nuevoProductoConID.id)
          
          
          req.io.sockets.emit('socketPostProducto', found)
          
        })
        
        

        res.status(202).json(`Su Producto: ${req.body.title}, fue agregado exitosamente.`);

      });


       routerProducts.post('/mongoose', async (req, res)  =>{
        
        const uri = "mongodb://localhost:27017/ecommerce"

        await mongoose.connect(uri)
        
       
        try{ 
       const nuevoProducto = new Producto(req.body)
       
       await productsCollection.guardar(nuevoProducto)
        

        res.status(202).json(`Su Producto: ${req.body.title}, fue agregado exitosamente.`);
       } catch(error){console.log(error)}
      });


      routerProducts.put('/:pid', (req, res) =>{
        const datosBody = req.body ;
        const infoToUpdateProduct = new Product(datosBody);
        
        
        const arrayProd = ManagerHandler.getProducts();    
        const found = arrayProd.find(prod => prod.id == req.params.pid)
        const newProductConID = {...infoToUpdateProduct, id: found.id}
            
            if(found){
                
                 const foundIndex = arrayProd.indexOf(found)
                 arrayProd.splice(foundIndex,1, newProductConID);
                
                res.json(newProductConID);
            } else{res.json({"Error":'El producto que intenta actualizar no se encuentra en el Array'})}
        
      });


      routerProducts.delete('/:pid', (req, res) =>{
        
        const arrayProd = ManagerHandler.getProducts();    
        const found = arrayProd.find(prod => prod.id == req.params.pid)
        
            
            if(found){
                
                 const foundIndex = arrayProd.indexOf(found)
                 arrayProd.splice(foundIndex,1);
                
                res.send(`El producto ${found.title}, ha sido eliminado correctamente.`);
            } else{res.json({"Error":'El producto que intenta eliminar no se encuentra en el Array'})}
        
        
        

        
        
      });




   
   
   export default routerProducts