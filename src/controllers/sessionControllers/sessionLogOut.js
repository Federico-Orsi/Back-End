import { usersRepository } from "../../repository/usersRepository.js";


export const sessionLogOut = async (req, res, next) => {

    // try {
    //     req.session.destroy(err =>{
    //         if(!err) res.send('logout ok')
    //         else res.json({status: 'logout error', body: err})
    //     })
    // } catch (error) {
    //     next(error)
    // } 
    
    const userName = req.user.username
    const user = await usersRepository.findOne({username:userName})
    user.last_connection = new Date()

    await user?.save();

    try {
        req.logout (err => {
            if (!err) {

                
                
                res.send('logout ok')
            }
            else res.json({ status: 'logout error', body: err })
        })

    } catch (error) {
        next(error)
    }

    
}