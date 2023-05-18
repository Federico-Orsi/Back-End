import { randomUUID } from "crypto";
import { Router } from "express";
import { ManagerHandler } from "../borrador/clases1raEntrega.js";
import { cartsRepository } from "../repository/cartsRepository.js";
import { productsRepository } from "../repository/productsRepository.js";

      
      const routerCarts = Router();

      

      
      routerCarts.get('/', (req, res)  =>{
      
     
     res.json(ManagerHandler.getCarts());
     
     
      
    
      } );
     

        routerCarts.get('/:cid/purchase', async (req, res) =>{
        
        try{
          const cartById = await cartsRepository.findById(req.params.cid) 
          const arrayCarrito = cartById.cart
          const reqBody = req.body.id
          const found = arrayCarrito.find(elem => elem._id == reqBody )
          const foundIndex = arrayCarrito.indexOf(found)
          const stockRestante = arrayCarrito[foundIndex]?.stock-req.body.qty
        
          if (cartById){
             console.log(cartById.cart[foundIndex]?.stock-req.body.qty)
             await productsRepository.findByIdAndUpdate(reqBody, {stock: stockRestante } ) 
             res.json(cartById) 
          } 
        } catch(error){
          res.send({error:'Cart Not Found'})
        }
        

     });
   

     routerCarts.put('/:cid', async (req, res)  =>{
      
      const queryCid = req.query.cid

      const cartById = await cartsRepository.findById("6422264d4c43580d4d4f2fdd") 
      const prodDentroDelCart = await cartById.cart._id
      
      await cartsRepository.replaceOne({prodDentroDelCart}, { name: 'Jean Valjean' }) 
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
        
        
        // const prodById = await productsCollection.findById(req.body.id)
        
        // const prodConQty = {...prodById, qty: req.body.qty} 
        const reqQty = req.body.qty
        const prodConQty = await productsRepository.findOneAndUpdate({_id: req.body.id}, {qty: reqQty}) 
        console.log(prodConQty)
       
        try{ 
       




       const nuevoCartGuardado = await cartsRepository.guardar(nuevoCart)
        

        res.status(202).json(`Su Producto ${prodConQty?.title}, fue agregado exitosamente al Carrito cuyo CID es: ${nuevoCartGuardado._id}.`);
       } catch(error){console.log(error)}
      });

      
      routerCarts.delete('/:cid/products/:pid', async (req, res) =>{
        
        
        // const prodById = await productsCollection.findById(req.body.pid)
        const cartById = await cartsRepository.findById("64221bdd6e9c88a567b55352") 
        const test = cartById.cart[0]
        
        await cartsRepository.deleteOne({test})

        res.json(`Su Producto: ${""}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
      });
  




      routerCarts.post('/:cid/products/:pid', async (req, res) =>{
        
        const prodById = await productsRepository.findById(req.params.pid)  
        
        const cartById = await cartsRepository.findById(req.params.cid) 
        const arrayCarrito = cartById.cart
        console.log(arrayCarrito)
        
        let qty = 1 ;
       
        const objetoAPushearalCartEspecifico = {Product: prodById, qty:qty}
        
        if(prodById && cartById){
            
         const foundEnArrayInterno = arrayCarrito.find(prod => prod._id == req.params.pid)
          
         foundEnArrayInterno? foundEnArrayInterno.qty+=1 : arrayCarrito.push(objetoAPushearalCartEspecifico);
         
        }
        console.log(arrayCarrito)
        
        res.json(`Su Producto: ${prodById.title}, fue agregado exitosamente al Carrito: ${req.params.cid}`);
      });
  

      
     


   
   
   export default routerCarts