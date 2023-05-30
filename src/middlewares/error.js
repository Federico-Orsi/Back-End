import { EmptyFieldError, ForbiddenError, InvalidArgumentError, InvalidFormatError, InvalidIntegerError, InvalidLengthError, InvalidNumberError, InvalidStringError, NotFoundError, UnauthorizedError, UserExistsError } from "../errors/errors.js"

export const error = (error, req, res, next) => {
    

    if (error instanceof NotFoundError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof InvalidArgumentError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof UnauthorizedError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof ForbiddenError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof InvalidIntegerError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof InvalidNumberError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof InvalidStringError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof EmptyFieldError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof InvalidFormatError) {
        res.status(error.statusCode).json({ error: error.message })
    }  else if (error instanceof InvalidLengthError) {
        res.status(error.statusCode).json({ error: error.message })
    } else if (error instanceof UserExistsError) {
        res.status(error.statusCode).json({ error: error.message })
    }else {
        res.status(500).json({ error: 'Error interno del servidor' })
    }
}