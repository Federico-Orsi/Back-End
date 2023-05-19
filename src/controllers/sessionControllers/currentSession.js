export const currentSession = async (req, res, next) => {


    console.log(req.user.rol)
   if(req.user.rol == "Admin"){
    next()
   } else {
    throw new Error("UnAuthorized")
   }
    
}