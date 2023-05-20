import { Router } from "express";
import { productGetMongoose } from "../controllers/productControllers/DB/productGetMongoose.js";
import { productPostMongoose } from "../controllers/productControllers/DB/productPostMongoose.js";
import { productPutMongoose } from "../controllers/productControllers/DB/productPutMongoose.js";
import { productDeleteMemoria } from "../controllers/productControllers/enMemoria/productDeleteMemoria.js";
import { productGetRaizMemoria } from "../controllers/productControllers/enMemoria/productGetRaizMemoria.js";
import { test } from "../middlewares/test.js";


const routerProducts = Router();


routerProducts.get('/', productGetRaizMemoria);


routerProducts.get('/mongoose', productGetMongoose);



routerProducts.post('/mongoose', productPostMongoose);


routerProducts.post('/', test, async (req, res) =>{

  console.log("Probando req.user!!")
  console.log(req.user?.rol)
  res.send(req.user?.rol)

});



routerProducts.put('/mongoose', productPutMongoose);



routerProducts.delete('/:pid', productDeleteMemoria);






export default routerProducts