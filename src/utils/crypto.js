import bcrypt from 'bcrypt'

export function hashear(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync())
}

export function validarQueSeanIguales(recibida, almacenada) {
   
    return bcrypt.compareSync(recibida, almacenada)
}