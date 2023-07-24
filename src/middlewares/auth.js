import { UnauthorizedError } from "../errors/errors.js";


export const admin = async (req, res, next) => {

    try {

        if (req.user?.rol == "Admin") {
            next();
        } else {
            throw new UnauthorizedError("Solo los Admin están autorizados para acceder a esta vista");
        }
    } catch (error) {
        
        console.log(error)
        next()
    }

}



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