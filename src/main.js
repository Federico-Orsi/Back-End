import express from 'express';
import { engine } from 'express-handlebars';
import session from "express-session";
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { MongoAtlas, PORT, SessionSecretWord } from '../config.js';
import { ManagerHandler } from './borrador/clases1raEntrega.js';
import { error } from './middlewares/error.js';
import { passportInitialize, passportSession } from './middlewares/passport.js';
import routerCarts from './routers/routerCarts.js';
import routerDocs from './routers/routerDocs.js';
import routerLogger from './routers/routerLogger.js';
import routerMocks from './routers/routerMocks.js';
import routerProducts from './routers/routerProducts.js';
import routerSessions from './routers/routerSessions.js';
import routerUsers from './routers/routerUsers.js';
import webRouter from './routers/webRouter.js';
import { logger } from './utils/logger.js';


 


await mongoose.connect(MongoAtlas)

const app = express();
const conexionPuerto = app.listen(PORT, () => {
    console.log(`Eschuchando en Puerto ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger);

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
app.use(error)


app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);
app.use('/api/users', routerUsers);
app.use('/api/sessions', routerSessions);
app.use('/handlebars', webRouter);
app.use('/', routerMocks); 
app.use('/', routerLogger); 
app.use('/docs', routerDocs );

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





// await pasarMessages()








