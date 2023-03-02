import { Router } from "express";
import { ManagerHandler } from "./clases1raEntrega.js";



const webRouter = Router();

const arrayProd = ManagerHandler.getProducts();  

webRouter.get('/', (req, res)  =>{
      
   
   res.render('home', {titulo: "handlebars", title:"Hola Mundo!!", productName: arrayProd[1]?.title, arrayProd });
     
      });

webRouter.get('/prueba', (req, res)  =>{
      
   
         res.render('home', {titulo: "Prueba", title:"Hello World", productName: arrayProd[0]?.title, arrayProd });
           
            });
      

      export default webRouter;
   