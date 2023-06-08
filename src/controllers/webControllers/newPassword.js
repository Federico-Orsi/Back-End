import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from '../../../config.js'

export const newPassword = async (req, res) => {

    const token = req.query.token
    

    try {
        const payload = jwt.verify(token, SECRET_TOKEN)


        res.render('newPassword', { token: token });
        console.log(payload["userId"])
        console.log(payload)


    } catch (error) {
        res.redirect('http://localhost:8080/handlebars/jwt_expirado');
        console.log(error)
    }

    
 

}
