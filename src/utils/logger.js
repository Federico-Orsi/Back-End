import winston from 'winston'
import { NODE_ENV } from '../../config.js'

// const levels = {
//     fatal: 0,
//     error: 1,
//     warning: 2,
//     info: 3,
//     debug: 4,
//     silly:5
// }

let transports

// Condicional para elegir entre entorno Productivo o Desarrollo

if(NODE_ENV == "Producción"){

    transports = [
       
        new winston.transports.File({
            level: "error",
            filename: 'errors.log'
        }),
        new winston.transports.Console({
            level: "info",
        }) 

    ]
} else {
transports = [
    new winston.transports.Console({
        level: "debug",
    }) ,
    new winston.transports.File({
        level: "warn",
        filename: 'errors.log'
    })
]
}

//Función propia de Winston---------------
const winstonLogger = winston.createLogger({
    // levels,
    transports
})

export const logger = (req, res, next) => {
    
    req.logger = winstonLogger
    next()
}
