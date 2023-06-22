import assert from 'assert';
import mongoose from 'mongoose';
import supertest from 'supertest';



const PORT = 8080
const serverBaseUrl = `http://localhost:${PORT}`
const httpClient = supertest(serverBaseUrl)

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
                // assert.ok(id, 'la rta no incluye id')
                console.log(body.payload.username)
                console.log(body.payload.password)
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


                const { statusCode, ok, body } = await httpClient.post('/api/products/mongoose').send(newProduct)
                assert.ok(ok, 'la peticion no fue exitosa')
                assert.strictEqual(statusCode, 202)
                // assert.ok(id, 'la rta no incluye id')
                assert.deepStrictEqual(body, newProduct)
            })
        })


    // describe('POST', () => {
    //     describe('Datos correctos para generar un nuevo Producto.', () => {
    //         it('crea un Producto en la DB', async () => {
    //             const newProduct = {
    //                 "title": "DBZ",
    //                 "description": "4 estrellas",
    //                 "code": 123,
    //                 "price": 1500,
    //                 "status": "ki",
    //                 "stock": 200,
    //                 "category": "life",

    //                 "thumbnails": "goku.jpg"
    //             }


    //             const { statusCode, ok, body } = await httpClient.post('/api/products/mongoose').send(newProduct)
    //             assert.ok(ok, 'la peticion no fue exitosa')
    //             assert.strictEqual(statusCode, 202)
    //             // assert.ok(id, 'la rta no incluye id')
    //             assert.deepStrictEqual(body, newProduct)
    //         })
    //     })

        // describe('si se envian todos los datos incluyendo la foto', () => {
        //   it('crea una mascota en el sistema con la ruta de la foto recibida', async () => {
        //     const { statusCode, ok, body: { id, foto, ...restoDeLaMascota } } = await httpClient.post('/api/mascotas')
        //       .field('nombre', mocks.inputMascotaConFoto.nombre)
        //       .field('especie', mocks.inputMascotaConFoto.especie)
        //       .field('fechaNacimiento', mocks.inputMascotaConFoto.fechaNacimiento)
        //       .attach('foto', mocks.inputMascotaConFoto.foto)
        //     assert.ok(ok, 'la peticion no fue exitosa')
        //     assert.strictEqual(statusCode, 201, 'no se obtuvo el codigo de estado esperado')
        //     assert.ok(id, 'la rta no incluye id')
        //     assert.ok(foto, 'la rta no incluye foto')
        //     assert.ok(foto.endsWith(mocks.nombreArchivoFoto), 'no coincide la ruta con el nombre de la foto enviada')
        //     assert.deepStrictEqual(restoDeLaMascota, {
        //       nombre: mocks.inputMascotaConFoto.nombre,
        //       especie: mocks.inputMascotaConFoto.especie,
        //       fechaNacimiento: mocks.inputMascotaConFoto.fechaNacimiento,
        //       adoptada: false,
        //       duenio: null,
        //     })
        //   })
        // })
    })
})

