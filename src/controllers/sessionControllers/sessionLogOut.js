

export const sessionLogOut = async (req, res, next) => {

    // try {
    //     req.session.destroy(err =>{
    //         if(!err) res.send('logout ok')
    //         else res.json({status: 'logout error', body: err})
    //     })
    // } catch (error) {
    //     next(error)
    // } 

    try {
        req.logout(err =>{
            if(!err) res.send('logout ok')
            else res.json({status: 'logout error', body: err})
        })
    } catch (error) {
        next(error)
    } 

  }