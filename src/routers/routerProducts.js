import { Router } from "express";
import { productDeleteMongoose } from "../controllers/productControllers/DB/productDeleteMongoose.js";
import { productGetMongoose } from "../controllers/productControllers/DB/productGetMongoose.js";
import { productPostMongoose } from "../controllers/productControllers/DB/productPostMongoose.js";
import { productPutMongoose } from "../controllers/productControllers/DB/productPutMongoose.js";
import { productDeleteMemoria } from "../controllers/productControllers/enMemoria/productDeleteMemoria.js";
import { productGetRaizMemoria } from "../controllers/productControllers/enMemoria/productGetRaizMemoria.js";
import { adminAndPremium } from "../middlewares/auth.js";


const routerProducts = Router();


routerProducts.get('/', productGetRaizMemoria);


routerProducts.get('/mongoose', productGetMongoose);



routerProducts.post('/mongoose', adminAndPremium, productPostMongoose);



routerProducts.put('/mongoose', adminAndPremium, productPutMongoose);



routerProducts.delete('/:pid', adminAndPremium, productDeleteMemoria);


routerProducts.delete('/mongoose/:pid', adminAndPremium, productDeleteMongoose);



export default routerProducts