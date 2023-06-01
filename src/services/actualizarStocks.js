import { cartsRepository } from "../repository/cartsRepository.js"
import { productsRepository } from "../repository/productsRepository.js"

export const actualizarStocks = async (cidParams) =>{

const cartById = await cartsRepository.findById(cidParams)
const arr = cartById.products

for (const prod of arr) {
    const item = prod.product?._id
    const strId = item.toString()
    const prodById = await productsRepository.findById(strId)
    const stockActual = prodById.stock
    const qty = prod.qty

    if (qty < stockActual){
        const stockAfterPurchase = stockActual-qty
        await productsRepository.findByIdAndUpdate(strId, {stock: stockAfterPurchase } )
    } 
    

    
    
    
}

}