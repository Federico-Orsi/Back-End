import passport from 'passport'
import { Strategy } from 'passport-local'
import { UnauthorizedError } from '../errors/errors.js'
import { usersRepository } from '../repository/usersRepository.js'
import { validarQueSeanIguales } from '../utils/crypto.js'


passport.use('local', new Strategy(async (username, password, done) => {
    try{
    const buscado = await usersRepository.findOne({username})
    if (!buscado)
        return done(new UnauthorizedError())
    if (!validarQueSeanIguales(password, buscado.password))
        return done(new UnauthorizedError())
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