// import mongoose from 'mongoose';
// import { uriAtlas } from './main';



// await mongoose.connect(uriAtlas);
// const prodSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     price: { type: Number, required: true }
// });
// const productsDb = mongoose.model("products", prodSchema);
// const cartSchema = new mongoose.Schema({
//     cartProducts: { type: [{}], required: true },
// });
// const cartsDb = mongoose.model("carts", cartSchema);
// await cartsDb.create({
//     cartProducts: [{
//         Producto1: "gato",
//         qty: 5
//     }, {
//         Producto2: "perro",
//         qty: 3
//     }]
// });
// await productsDb.create({
//     title: "Producto 1",
//     price: 200
// });
// await productsDb.create({
//     title: "Producto 2",
//     price: 300
// });
// mongoose.connection.close();
