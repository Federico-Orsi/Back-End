import { Router } from "express";
import { postMocking } from "../controllers/mocksControllers/postMocking.js";



const routerMocks = Router();


routerMocks.post('/mockingproducts', postMocking);



export default routerMocks