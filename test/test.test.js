import assert from 'assert';
import mongoose from 'mongoose';
import supertest from 'supertest';



const PORT = 8080
const serverBaseUrl = `http://localhost:${PORT}`
const httpClient = supertest.agent(serverBaseUrl)

describe('router de productos', () => {

    before(async () => {
        await mongoose.connect("mongodb://localhost:27017/ecommerce")
        //     await mongoose.connection.collection('usuarios').deleteMany({})
        //     await mongoose.connection.collection('usuarios').insertOne(mocks.documentoUsuario)
    })

    after(async () => {
        //     await mongoose.connection.collection('usuarios').deleteMany({})
       await mongoose.connection.close();
    })


    describe('POST', () => {
        describe('Primero hago el Loggin', () => {
            it('me loggeo correctamente como Admin o Usuario Premium', async () => {
                
                
                const loggin = {
                    "username": "btracy@gmail.com",
                    "password": "brain10"
                }

                const { statusCode, ok, body } = await httpClient.post('/api/sessions').send(loggin)
                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 200)
                assert.deepStrictEqual({
                    "username": body.payload.username,
                    "password": body.payload.password
                }, {"username":loggin.username,
                "password": '$2b$10$w25ldVTWzmJvI3ozYdgtJOnMAlSNamZiJcO2ZQb60QNNo3c5CGk9W'
                })
            
            })
        })  
    })


     describe('POST', () => {
        describe('Datos correctos para generar un nuevo Producto.', () => {
            it('crea un Producto en la DB', async () => {
                const newProduct = {
                    "title": "DBZ",
                    "description": "4 estrellas",
                    "code": 123,
                    "price": 1500,
                    "status": "ki",
                    "stock": 200,
                    "category": "life",
                    "thumbnails": "goku.jpg"
                }

                const loggin = {
                    "username": "btracy@gmail.com",
                    "password": "brain10"
                }

                // await httpClient.post('/api/sessions').send(loggin)
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

                assert.deepStrictEqual(bodySin_idYSin__v, {...newProduct,
                    "owner": "Admin"
                })
            })
        })
        
    })
})

