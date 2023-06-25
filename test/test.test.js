import assert from 'assert';
import mongoose from 'mongoose';
import supertest from 'supertest';



const PORT = 8080
const serverBaseUrl = `http://localhost:${PORT}`
const httpClient = supertest.agent(serverBaseUrl)

describe('router de productos', () => {

    before(async () => {
        // await mongoose.connection.close();
        await mongoose.disconnect();
        await mongoose.connect("mongodb://localhost:27017/test")
        //     await mongoose.connection.collection('usuarios').deleteMany({})
        //     await mongoose.connection.collection('usuarios').insertOne(mocks.documentoUsuario)
    })

    after(async () => {
        //     await mongoose.connection.collection('usuarios').deleteMany({})
        await mongoose.connection.close();
    })

    let passwordConHash 

    const user = {
        Nombre: "Martinnnn",
        Apellido: "Tatantan",
        username: "p9@gmail.com",
        Edad: 48,
        password: "p9",
        rol: "Admin"
    }
   

    describe('POST', () => {
        describe('Primero registro al nuevo Usuario.', () => {
            it('Generar nuevo Usuario.', async () => {

                

                const { statusCode, ok, body } = await httpClient.post('/api/users').send(user)
                passwordConHash = body.password
                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 200)
                assert.deepStrictEqual({
                    "Nombre": body.Nombre,
                    "Apellido": body.Apellido,
                    "username": body.username,
                    "Edad": body.Edad,
                    "password": body.passwordSinHash,
                    "rol": body.rol
                }, {
                    "username": user.username,
                    "Nombre": user.Nombre,
                    "Apellido": user.Apellido,
                    "username": user.username,
                    "Edad": user.Edad,
                    "password": user.password,
                    "rol": user.rol
                })

            })
        })
    })


    describe('POST', () => {
        describe('Luego hago el Loggin', () => {
            it('me loggeo correctamente como Admin o Usuario Premium', async () => {


                const loggin = {
                    "username": user.username,
                    "password": user.password
                }

                const { statusCode, ok, body } = await httpClient.post('/api/sessions').send(loggin)
                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 200)
                assert.deepStrictEqual({
                    "username": body.payload.username,
                    "password": body.payload.password
                }, {
                    "username": loggin.username,
                    // "password": '$2b$10$s9QPk/lh6zWfKuRKKWL1wujbi3jea2YFyNFtXpoasu0CQMgumydw2'
                    "password": passwordConHash
                })

            })
        })
    })


    describe('POST', () => {
        describe('Datos correctos para generar un nuevo Producto.', () => {
            it('crea un Producto en la DB', async () => {
                const newProduct = {
                    "title": "DBZ Nameku",
                    "description": "4 estrellas",
                    "code": 123,
                    "price": 1500,
                    "status": "ki",
                    "stock": 200,
                    "category": "life",
                    "thumbnails": "goku.jpg"
                }




                const { statusCode, ok, body } = await httpClient.post('/api/products/mongoose').send(newProduct)

                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 202)
                const bodySin_idYSin__v = {
                    "title": body.title,
                    "description": body.description,
                    "code": body.code,
                    "price": body.price,
                    "status": body.status,
                    "stock": body.stock,
                    "category": body.category,
                    "owner": body.owner,
                    "thumbnails": body.thumbnails
                }

                assert.deepStrictEqual(bodySin_idYSin__v, {
                    ...newProduct,
                    "owner": "Admin"
                })
            })
        })

    })
})

