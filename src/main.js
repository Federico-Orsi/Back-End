import express from 'express';
import routerProducts from './routers/routerProducts.js';
import routerCarts from './routers/routerCarts.js';
import webRouter from './routers/webRouter.js';
import routerUsers from './routers/routerUsers.js';
import routerSessions from './routers/routerSessions.js';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io';
import { ManagerHandler} from './dao/managers/clases1raEntrega.js'
import mongoose from 'mongoose';
import { pasarProd } from './dao/managers/managerProductos.js';
import { pasarMessages } from './dao/managers/managerMessages.js';
import { pasarCart } from './dao/managers/managerCarts.js';
import session from "express-session"


 

const uriAtlas = "mongodb+srv://FedericoAntonioOrsi:eldiego10@cluster-fao.bbm9xm5.mongodb.net/ecommerce"
const uri = "mongodb://localhost:27017/ecommerce"

await mongoose.connect(uri)

const app = express();
const conexionPuerto = app.listen(8080, () => {
    console.log("Eschuchando en Puerto 8080")
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(session({
    
    secret: 'secretCode',
    resave: false,
    saveUninitialized: false
}))

export const io = new Server(conexionPuerto);

function postSocket (req, res, next) {
    req.io = io 
    next()
}

app.use(postSocket)


app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);
app.use('/api/users', routerUsers);
app.use('/api/sessions', routerSessions);
app.use('/handlebars', webRouter);


app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');


const mjeVar = "helloooooo";



io.on('connection', socket => {
    console.log('Socket Conectadooo Vamooooooo!!')
    

    const arrayProd = ManagerHandler.getProducts(); 
    const showTitle = arrayProd[0]?.title;
    
    socket.emit('1st Socket', mjeVar)
    socket.emit('2nd Socket', "mje harcodeado")
    socket.emit('SocketManagerHandler', showTitle)
    
    socket.on('enviaCliente', data => 
    console.log(data));
})



await pasarProd()
await pasarMessages()
await pasarCart()






// await mongoose.connect(uriAtlas)

// const prodSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     price: {type: Number, required: true}
// })


// const productsDb = mongoose.model("products", prodSchema);


// const cartSchema = new mongoose.Schema({
//     cartProducts: {type: [{}], required: true},
   
// })


// const cartsDb = mongoose.model("carts", cartSchema);

// await cartsDb.create({
//     cartProducts: [{
//         Producto1: "gato",
//         qty: 5
//     },{
//         Producto2: "perro",
//         qty: 3
//     }]
// })

// await productsDb.create({
//     title: "Producto 1",
//     price: 200
// })

// await productsDb.create({
//     title: "Producto 2",
//     price: 300
// })


// mongoose.connection.close();






