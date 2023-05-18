import { Router } from "express";
import { cartDeleteCidPid } from "../controllers/cartControllers/DB/cartDeleteCidPid.js";
import { cartGetCid } from "../controllers/cartControllers/DB/cartGetCid.js";
import { cartPostCidPid } from "../controllers/cartControllers/DB/cartPostCidPid.js";
import { cartPostMongoose } from "../controllers/cartControllers/DB/cartPostMongoose.js";
import { cartPutCidDb } from "../controllers/cartControllers/DB/cartPutCid.js";
import { cartGetRaizMemoria } from "../controllers/cartControllers/enMemoria/cartGetRaizMemoria.js";
import { cartPostRaizMemoria } from "../controllers/cartControllers/enMemoria/cartPostRaizMemoria.js";
      
      const routerCarts = Router();

      

      // -- en Memoria--------------------------------------
      routerCarts.get('/', cartGetRaizMemoria );
      routerCarts.post('/', cartPostRaizMemoria);
     

       // -- en DB-------------------------------------------

      routerCarts.get('/:cid/purchase', cartGetCid );
   

      routerCarts.put('/:cid', cartPutCidDb );

    

      routerCarts.post('/mongoose', cartPostMongoose );


      routerCarts.post('/:cid/products/:pid', cartPostCidPid);
  

      
      routerCarts.delete('/:cid/products/:pid', cartDeleteCidPid);
  
   
   export default routerCarts