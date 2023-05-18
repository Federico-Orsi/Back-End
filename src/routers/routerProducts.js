import { Router } from "express";
import { productGetMongoose } from "../controllers/productControllers/DB/productGetMongoose.js";
import { productPostMongoose } from "../controllers/productControllers/DB/productPostMongoose.js";
import { productPutMongoose } from "../controllers/productControllers/DB/productPutMongoose.js";
import { productDeleteMemoria } from "../controllers/productControllers/enMemoria/productDeleteMemoria.js";
import { productGetRaizMemoria } from "../controllers/productControllers/enMemoria/productGetRaizMemoria.js";


const routerProducts = Router();


routerProducts.get('/', productGetRaizMemoria);


routerProducts.get('/mongoose', productGetMongoose);



routerProducts.post('/mongoose', productPostMongoose);




routerProducts.put('/mongoose', productPutMongoose);



routerProducts.delete('/:pid', productDeleteMemoria);






export default routerProducts