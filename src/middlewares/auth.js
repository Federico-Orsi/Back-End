import { UnauthorizedError } from "../errors/errors.js";



export const soloAdmin = async (req, res, next) => {

    if (req.user?.rol != "Admin") throw new UnauthorizedError();
      
       next();
   
   }


   export const soloUser = async (req, res, next) => {

    if (req.user?.rol != "User") throw new UnauthorizedError();
      
       next();
   
   }