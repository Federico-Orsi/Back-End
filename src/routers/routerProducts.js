import { Router } from "express";
import { productDeleteMongoose } from "../controllers/productControllers/DB/productDeleteMongoose.js";
import { productGetMongoose } from "../controllers/productControllers/DB/productGetMongoose.js";
import { productPostMongoose } from "../controllers/productControllers/DB/productPostMongoose.js";
import { productPostPaginado } from "../controllers/productControllers/DB/productPostPaginado.js";
import { productPutMongoose } from "../controllers/productControllers/DB/productPutMongoose.js";
import { productDeleteMemoria } from "../controllers/productControllers/enMemoria/productDeleteMemoria.js";
import { productGetRaizMemoria } from "../controllers/productControllers/enMemoria/productGetRaizMemoria.js";
import { adminAndPremium } from "../middlewares/auth.js";


const routerProducts = Router();


  // -- en Memoria--------------------------------------

routerProducts.get('/', productGetRaizMemoria);

routerProducts.delete('/:pid', adminAndPremium, productDeleteMemoria);

  
// -- en DB-------------------------------------------
routerProducts.get('/mongoose', productGetMongoose);


routerProducts.post('/mongoose/paginado',adminAndPremium, productPostPaginado);


routerProducts.post('/mongoose', adminAndPremium, productPostMongoose);



routerProducts.put('/mongoose', adminAndPremium, productPutMongoose);



routerProducts.delete('/mongoose/:pid', adminAndPremium, productDeleteMongoose);



export default routerProducts