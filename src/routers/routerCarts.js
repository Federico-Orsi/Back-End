import { Router } from "express";
import { cartCidPurchase } from "../controllers/cartControllers/DB/cartCidPurchase.js";
import { cartDeleteCidPid } from "../controllers/cartControllers/DB/cartDeleteCidPid.js";
import { cartPostCidPid } from "../controllers/cartControllers/DB/cartPostCidPid.js";
import { cartPostMongoose } from "../controllers/cartControllers/DB/cartPostMongoose.js";
import { cartGetRaizMemoria } from "../controllers/cartControllers/enMemoria/cartGetRaizMemoria.js";
import { cartPostRaizMemoria } from "../controllers/cartControllers/enMemoria/cartPostRaizMemoria.js";
import { userAndPremium } from "../middlewares/auth.js";
import { premiumCart } from "../middlewares/premiumCart.js";
      
      const routerCarts = Router();

      

      // -- en Memoria--------------------------------------
      routerCarts.get('/', cartGetRaizMemoria );
      routerCarts.post('/', userAndPremium, cartPostRaizMemoria);
      
      
       // -- en DB-------------------------------------------

      routerCarts.get('/:cid/purchase', cartCidPurchase );
   

      routerCarts.put('/:cid', userAndPremium,  );

    

      routerCarts.post('/mongoose', userAndPremium, cartPostMongoose );


      routerCarts.post('/:cid/products/:pid', userAndPremium, premiumCart, cartPostCidPid);
  

      
      routerCarts.delete('/:cid/products/:pid', userAndPremium,  cartDeleteCidPid);
  
   
   export default routerCarts