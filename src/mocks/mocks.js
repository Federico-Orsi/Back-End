import { faker } from "@faker-js/faker"
import { Producto } from "../dao/models/plantillaProducto.js"



const crearMock = () =>{

return new Producto({
    title: faker.commerce.productName(), 
    description: faker.commerce.productDescription() , 
    code: faker.number.int(), 
    price: faker.commerce.price() , 
    status: faker.lorem.text() , 
    stock: faker.number.int({ max: 100 })  , 
    category: faker.commerce.department() , 
    thumbnails: faker.image.url() 
})    
}

export function pushArray() {
    const arr = []
    
    for (let index = 0; index < 100; index++) {
    arr.push(crearMock())
}

return arr
}