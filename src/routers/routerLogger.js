import { Router } from "express";
import { loggerTest } from '../controllers/logControllers/loggerTest.js';




const routerLogger = Router();


routerLogger.get('/loggerTest', loggerTest);



export default routerLogger