import { cartsRepository } from "../repository/cartsRepository.js"

export const totalAmountCart = async (cidParams) =>{

const cartById = await cartsRepository.findById(cidParams)
const arr = cartById.products
const stock_OK = arr.filter(item => item.qty < item.product?.stock ) 

const amountProds_OK = stock_OK.map(p =>p.qty*p.product?.price) 
 

const total = amountProds_OK.reduce((acc, elem) =>{return acc + elem},0)
console.log(total) 
return total
}