import { Router } from "express";
import { getLogin } from "../controllers/webControllers/getLogin.js";
import { getMongoose } from "../controllers/webControllers/getMongoose.js";
import { getPrueba } from "../controllers/webControllers/getPrueba.js";
import { getRaiz } from "../controllers/webControllers/getRaiz.js";
import { getRegistro } from "../controllers/webControllers/getRegistro.js";


const webRouter = Router();



webRouter.get('/', getRaiz);

webRouter.get('/prueba', getPrueba);


webRouter.get('/mongoose', getMongoose);


webRouter.get('/registro', getRegistro);

webRouter.get('/login', getLogin);




export default webRouter;
