import assert from 'assert';
import mongoose from 'mongoose';
import supertest from 'supertest';



const PORT = 8080
const serverBaseUrl = `http://localhost:${PORT}`
const httpClient = supertest.agent(serverBaseUrl)

describe('Testeo varios routers a la vez', () => {

    before(async () => {
        
        await mongoose.disconnect();
        await mongoose.connect("mongodb://localhost:27017/test")
        
    })

    after(async () => {
        
        await mongoose.connection.close();
    })

    let passwordConHash

    //Aquí harcodeo los datos para enviar a los Tests!!
    const user = {
        Nombre: "Platon",
        Apellido: "Greece",
        username: "elBanquete@gmail.com",
        Edad: 1000,
        password: "123",
        rol: "User"
    }

    const testProduct = {
        "title": "Auto",
        "description": "Coche",
        "code": 123,
        "price": 2000,
        "status": "c3",
        "stock": 200,
        "category": "Car",
        "thumbnails": "c3.jpg"
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



                //para que este testeo sea Exitoso, previamente se debe loggear un Admin!!
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
                });

            })
        })

    })

    describe('test Error', () => {
        it('el middleware deberia lanzar un error 401', async () => {
            //en este testeo se debe loggear previamente un Usuario con rol User para que lance un error 401 generado en el middleware de AdminAndPremium!!
            const { statusCode } = await httpClient.post('/api/products/mongoose').send(testProduct)
            assert.strictEqual(statusCode, 401);



        })
    })


    describe('POST', () => {
        describe('Agrego un Producto al Carrito.', () => {
            it('Agrego producto.', async () => {



                const { statusCode, ok, body } = await httpClient.post('/api/carts/6499e0ce7ee177f68edf47ee/products/6499c67d42a6f7d1ef0596fa').send({ "qty": 3 })

                console.log(body);
                assert.ok(ok, 'la peticion no fue exitosa')


            })
        })
    })


    describe('GET', () => {
        describe('Finalizo la compra de un carrito en particular.', () => {
            it('Ticket de la compra con resultado OK.', async () => {



                const { statusCode, ok, body } = await httpClient.get('/api/carts/6499e0ce7ee177f68edf47ee/purchase')

                console.log(body);
                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 200);


            })
        })
    })

    describe('GET', () => {
        describe('Genero un error al finalizar la compra de un carrito en particular.', () => {
            it('Ticket de la compra con error 404 (Not Found).', async () => {


                //en este testeo se debe pasar un :cid inválido para que lance un error 404!!
                const { statusCode, ok } = await httpClient.get('/api/carts/6499e0ce7e/purchase')

                assert.strictEqual(statusCode, 404);


            })
        })
    })






})


