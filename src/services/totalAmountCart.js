import { cartsRepository } from "../repository/cartsRepository.js"

export const totalAmountCart = async (cidParams) =>{

const cartById = await cartsRepository.findById(cidParams)
const arr = cartById.products
const amountProds = arr.map(p =>p.qty*p.product.price) 
console.log(amountProds)
const total = amountProds.reduce((acc, elem) =>{return acc + elem},0)
console.log(total) 
return total
}