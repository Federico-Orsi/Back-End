import { Router } from "express";
import { cartCidPurchase } from "../controllers/cartControllers/DB/cartCidPurchase.js";
import { cartDeleteCidPid } from "../controllers/cartControllers/DB/cartDeleteCidPid.js";
import { cartPostCidPid } from "../controllers/cartControllers/DB/cartPostCidPid.js";
import { cartPostMongoose } from "../controllers/cartControllers/DB/cartPostMongoose.js";
import { cartPutCidDb } from "../controllers/cartControllers/DB/cartPutCid.js";
import { cartGetRaizMemoria } from "../controllers/cartControllers/enMemoria/cartGetRaizMemoria.js";
import { cartPostRaizMemoria } from "../controllers/cartControllers/enMemoria/cartPostRaizMemoria.js";
import { soloUser } from "../middlewares/auth.js";
      
      const routerCarts = Router();

      

      // -- en Memoria--------------------------------------
      routerCarts.get('/', cartGetRaizMemoria );
      routerCarts.post('/', soloUser, cartPostRaizMemoria);
      
      
       // -- en DB-------------------------------------------

      routerCarts.get('/:cid/purchase', cartCidPurchase );
   

      routerCarts.put('/:cid', soloUser, cartPutCidDb );

    

      routerCarts.post('/mongoose', soloUser, cartPostMongoose );


      routerCarts.post('/:cid/products/:pid', soloUser, cartPostCidPid);
  

      
      routerCarts.delete('/:cid/products/:pid', soloUser,  cartDeleteCidPid);
  
   
   export default routerCarts