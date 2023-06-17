import { Router } from "express";
import { cartCidPurchase } from "../controllers/cartControllers/DB/cartCidPurchase.js";
import { cartDeleteCidPid } from "../controllers/cartControllers/DB/cartDeleteCidPid.js";
import { cartPostCidPid } from "../controllers/cartControllers/DB/cartPostCidPid.js";
import { cartGetRaizMemoria } from "../controllers/cartControllers/enMemoria/cartGetRaizMemoria.js";
import { userAndPremium } from "../middlewares/auth.js";
import { premiumCart } from "../middlewares/premiumCart.js";
      
      const routerCarts = Router();

      

      // -- en Memoria--------------------------------------
      routerCarts.get('/', cartGetRaizMemoria );
      
       // -- en DB-------------------------------------------

      routerCarts.get('/:cid/purchase', cartCidPurchase );
   

      routerCarts.post('/:cid/products/:pid', userAndPremium, premiumCart, cartPostCidPid);
  

      
      routerCarts.delete('/:cid/products/:pid', userAndPremium,  cartDeleteCidPid);
  
   
   export default routerCarts