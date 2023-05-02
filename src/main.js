import express from 'express';
import { engine } from 'express-handlebars';
import session from "express-session";
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { PORT, SessionSecretWord, uri } from '../config.js';
import { ManagerHandler } from './dao/managers/clases1raEntrega.js';
import { pasarCart } from './dao/managers/managerCarts.js';
import { pasarMessages } from './dao/managers/managerMessages.js';
import { pasarProd } from './dao/managers/managerProductos.js';
import { passportInitialize, passportSession } from './middlewares/passport.js';
import routerCarts from './routers/routerCarts.js';
import routerProducts from './routers/routerProducts.js';
import routerSessions from './routers/routerSessions.js';
import routerUsers from './routers/routerUsers.js';
import webRouter from './routers/webRouter.js';


 


await mongoose.connect(uri)

const app = express();
const conexionPuerto = app.listen(PORT, () => {
    console.log(`Eschuchando en Puerto ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(session({
    
    secret: SessionSecretWord,
    resave: false,
    saveUninitialized: false
}))

app.use(passportInitialize);
app.use(passportSession);

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







