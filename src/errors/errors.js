export class NotFoundError extends Error {
    constructor() {
        super('Recurso no encontrado')
        this.name = 'NotFoundError'
        this.statusCode = 404
    }
}

export class InvalidArgumentError extends Error {
    constructor() {
        super('Argumento no válido')
        this.name = 'InvalidArgumentError'
        this.statusCode = 400
    }
}

export class UnauthorizedError extends Error {
    constructor() {
        super('Acceso no autorizado.')
        this.name = 'UnauthorizedError'
        this.statusCode = 401
    }
}

export class ForbiddenError extends Error {
    constructor() {
        super('Acceso prohibido')
        this.name = 'ForbiddenError'
        this.statusCode = 403
    }
}

export class InvalidIntegerError extends Error {
    constructor() {
        super('Tiene que ingresar un número entero')
        this.name = 'InvalidIntegerError'
        this.statusCode = 400
    }
}

export class InvalidNumberError extends Error {
    constructor() {
        super('Tiene que ingresar un número')
        this.name = 'InvalidNumberError'
        this.statusCode = 400
    }
}

export class InvalidStringError extends Error {
    constructor() {
        super('El campo debe ser una cadena de caracteres')
        this.name = 'InvalidStringError'
        this.statusCode = 400
    }
}

export class EmptyFieldError extends Error {
    constructor() {
        super('El campo no puede estar vacío')
        this.name = 'EmptyFieldError'
        this.statusCode = 400
    }
}


export class InvalidFormatError extends Error {
    constructor() {
        super('El formato no es válido')
        this.name = 'InvalidFormatError'
        this.statusCode = 400
    }
}

export class InvalidLengthError extends Error {
    constructor() {
        super('La longitud no es válida')
        this.name = 'InvalidLengthError'
        this.statusCode = 400
    }
}

export class UserExistsError extends Error {
    constructor() {
        super('El usuario ya existe');
        this.name = 'UserExistsError';
        this.statusCode = 422;
    }
}