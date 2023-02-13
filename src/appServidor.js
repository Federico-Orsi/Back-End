import express from 'express';
import fs from 'fs';
import {ProductManager} from '../persistencia-FS.js';
import {Product} from '../persistencia-FS.js';

const app = express();
// app.use(express.json())
app.listen(8080)

let idCode = 122;

const ProductHandler = new ProductManager('../persistencia.json');

const producto1 = new Product("Piense y hágase rico", "Excelente libro de Finanzas", "$4000", "thinkRich.jpg", idCode, 750);
const producto2 = new Product("El Alquimista", "Excelente libro de Auto conocimiento", "$3000", "alquimista.jpg", idCode+=1, 550);
const producto3 = new Product("El arte de la Guerra", "Tácticas Militares", "$4500", "warArt.jpg", idCode+=1, 400);
const producto4 = new Product("La Paradoja", "liderazgo", "$3800", "laParadoja.jpg", idCode+=1, 200);
const producto5 = new Product("El poder del pensamiento positivo", "Desarrollo personal", "$4300", "thinkPositive.png", idCode+=1, 120 );
const producto6 = new Product("El Hombre en busca de Sentido", "Gran libro de Viktor Frankl que nos invita a reflexionar y buscar el sentido de nuestras vidas.", "$3500", "ViktorFrankl.jpg", idCode+=1, 99);
const producto7 = new Product("Tus zonas erróneas", "Autoayuda", "$3200", "WrongZones.jpg", idCode+=1, 102);
const producto8 = new Product("El poder de los Hábitos", "Autoconocimiento", "$4200", "habitos.jpg", idCode+=1, 300);
const producto9 = new Product("Padre Rico, Padre Pobre", "Finanzas personales", "$5200", "richDadPoorDad.jpg", idCode+=1, 150);
const producto10 = new Product("Llegará un día en el que serás libre", "Psicología", "$4100", "oneDayBeFree.jpg", idCode+=1, 450);

ProductHandler.addProduct(producto1);
ProductHandler.addProduct(producto3);
ProductHandler.addProduct(producto2);
ProductHandler.addProduct(producto4);
ProductHandler.addProduct(producto5);
ProductHandler.addProduct(producto6);
ProductHandler.addProduct(producto7);
ProductHandler.addProduct(producto8);
ProductHandler.addProduct(producto9);
ProductHandler.addProduct(producto10);



const controladorRaiz = (req, res) =>{
 res.send(`Probando...` )
}



const controladorProductoID = (req, res) =>{
    
   
   const arrayProd = ProductHandler.getProducts();
   const found = arrayProd.find(prod => prod.code == req.params.id)
   
   if (found){
      res.send(found) 

   } else { 
   res.send({"Error":'Product Not Found'})
   
  }

}
   
   // `ID Producto: ${req.params.id}`  

   app.get('/', controladorRaiz);
 
   app.get('/productos', (req, res)  =>{
   
   const cantidad = req.query.limit
   const arrayProd = ProductHandler.getProducts();  
   const limitFilter = arrayProd.slice(0, cantidad)
    
   if(cantidad){
     res.send(limitFilter);
    }else {res.send(ProductHandler.getProducts())}
     } );

     app.get('/productos/:id', controladorProductoID);




