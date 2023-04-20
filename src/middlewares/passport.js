import passport from 'passport'
import { Strategy } from 'passport-local'
import { userCollection } from '../dao/managers/managerMongoose.js'
import { validarQueSeanIguales } from '../utils/crypto.js'


passport.use('local', new Strategy({usernameField: "e_mail"}, async (username, password, done) => {
    try{
    const buscado = await userCollection.findOne({username})
    if (!buscado)
        return done(new Error('Error de autenticación'))
    if (!validarQueSeanIguales(password, buscado.password))
        return done(new Error('Error de autenticación'))
    delete buscado.password
    done(null, buscado)
    } catch (error){
        done(error)
    }
}))

// esto lo tengo que agregar para que funcione passport! copiar y pegar, nada mas.
passport.serializeUser((user, next) => {
    next(null, user)
})

passport.deserializeUser((user, next) => {
   
    next(null, user)
})



export const passportSession = passport.session()
export const passportInitialize = passport.initialize()