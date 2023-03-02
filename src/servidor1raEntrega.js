import express from 'express';
import routerProducts from '../routerProducts.js';
import routerCarts from '../routerCarts.js';
import webRouter from '../webRouter.js';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io';
import { ManagerHandler} from '../clases1raEntrega.js'
 


const app = express();
const conexionPuerto = app.listen(8080, () => {
    console.log("Eschuchando en Puerto 8080")
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const io = new Server(conexionPuerto);

function postSocket (req, res, next) {
    req.io = io 
    next()
}

app.use(postSocket)


app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);
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





