import { UnauthorizedError } from "../errors/errors.js";



export const adminAndPremium = async (req, res, next) => {

    try {

        if (req.user?.rol == "Admin" || req.user?.rol == "Premium") {
            next();
        } else {
            throw new UnauthorizedError("Solo Admin y Usuarios Premium");
        }
    } catch (error) {
        
        next(error)
    }

    // if (req.user?.rol == "Admin" || req.user?.rol == "Premium" ){
    //     next();
    // } else{
    //     throw new UnauthorizedError("Solo Admin y Usuarios Premium");
    // }

}


export const soloUser = async (req, res, next) => {

    if (req.user?.rol != "User") throw new UnauthorizedError();

    next();

}


export const userAndPremium = async (req, res, next) => {


    if (req.user?.rol == "User" || req.user?.rol == "Premium") {
        next();
    } else {
        throw new UnauthorizedError("Solo Users y Usuarios Premium");
    }

}