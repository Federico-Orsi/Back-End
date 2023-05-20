export const currentSession = async (req, res) => {


    console.log(req.user?.rol)
   if(req.user?.rol == "Admin"){
    res.send(req.user?.rol)
   } else {
    throw new Error("UnAuthorized")
   }
    
}