import { Router } from "express";
import { getLogin } from "../controllers/webControllers/getLogin.js";
import { getMongoose } from "../controllers/webControllers/getMongoose.js";
import { getPrueba } from "../controllers/webControllers/getPrueba.js";
import { getRaiz } from "../controllers/webControllers/getRaiz.js";
import { getRegistro } from "../controllers/webControllers/getRegistro.js";
import { jwtExpirado } from "../controllers/webControllers/jwtExpirado.js";
import { newPassword } from "../controllers/webControllers/newPassword.js";
import { onlyAdmin } from "../controllers/webControllers/onlyAdmin.js";
import { admin } from "../middlewares/auth.js";


const webRouter = Router();



webRouter.get('/', getRaiz);

webRouter.get('/prueba', getPrueba);


webRouter.get('/mongoose', getMongoose);


webRouter.get('/registro', getRegistro);

webRouter.get('/login', getLogin);

webRouter.get('/new_password', newPassword);

webRouter.get('/jwt_expirado', jwtExpirado);

webRouter.get('/onlyAdmin', admin, onlyAdmin);





export default webRouter;
