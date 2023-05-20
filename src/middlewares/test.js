export const test = async (req, res, next) => {


   
    console.log(req.user?.rol)
 
    next();

}