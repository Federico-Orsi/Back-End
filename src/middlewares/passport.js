import passport from 'passport'
import { Strategy } from 'passport-local'


passport.use('register', new Strategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
   
    try {
        const { username, password, datosPersonales } = req.body
        const user = new User({ username, password: hashear(password), ...datosPersonales })
        await userManager.guardar(user)
        done(null, user)
    } catch (error) {
        done(error)
    }
}))

passport.use('login', new Strategy({
    // usernameField: 'usuario',
    //  passwordField: 'contrasenia'
}, async (username, password, done) => {
    // esto es lo que estaba en el controller de login
    try {
        const buscado = await userManager.buscarPorUsername(username)
        if (!buscado)
            return done(new ErrorDeAutenticacion())
        if (!validarQueSeanIguales(password, buscado.password))
            return done(new ErrorDeAutenticacion())
        delete buscado.password
        done(null, buscado)
    } catch (error) {
        done(error)
    }
}))

// esto lo tengo que agregar para que funcione passport! copiar y pegar, nada mas.
passport.serializeUser((user, next) => {
    next(null, user['username'])
})

passport.deserializeUser((username, next) => {
    const user = userManager.buscarPorUsername(username)
    next(null, user)
})
