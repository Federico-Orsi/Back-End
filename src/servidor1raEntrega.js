import express from 'express';
import routerProducts from '../routerProducts.js';
import routerCarts from '../routerCarts.js';

const app = express();
app.listen(8080)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);



