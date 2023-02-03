console.log("Hola Mundo");
// node persistencia-FS.js

const fs = require('fs');




class ProductManager{

constructor(path){

 this.path = path,
 this.Products = []

}    

  addProduct = (productoX) => {
     
       
     if (this.Products.find(prod => prod.code === productoX.code ) == undefined){
       
        this.Products.push(productoX) ;
     } else { 
        
        console.log("Este producto ya fue agregado al Array. No puede repetirse ya que no deben repetirse los IDs") ;
    }
} 
    
    
    getProducts = () => {
    
     return console.log(this.Products);
    } 
    
    getProductById = (item) => {
    
     const found = this.Products.find(prod => prod.code === item.code)
       
     if (found){
        console.log(found);

     } else { 
        throw new Error;
    }
        
  } 

  updateProduct(prodAactualizar, newProduct){
    const found = this.Products.find(prod => prod.code === prodAactualizar.code);
    
    if(found){
        const foundIndex = this.Products.indexOf(found)
        this.Products.splice(foundIndex,1, newProduct);
    } else{console.log("UPPS!! El producto que intenta actualizar no se encuentra en el Array")}
    
    
    
  }

  write = () => {
  fs.promises.writeFile(this.path, JSON.stringify(this.Products));
  }

  async read(){
    const readFile = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
    console.log("El Array que viene ahora aquí debajo es el que está leyendo con el ReadFile(Asincronicamente):");
    console.log(readFile);
}

 deleteProduct(item){
    const found = this.Products.find(prod => prod.code === item.code);
    
    if(found){
        const foundIndex = this.Products.indexOf(found)
        this.Products.splice(foundIndex,1);
        console.log(this.Products);
    } else{console.log("UPPS!! El producto que intenta eliminar no se encuentra en el Array")}
    
    
    
  }



}




class Product{


constructor(title, description, price,thumbnail,code, stock){
    this.title=title,
    this.description=description,
    this.price=price,
    this.thumbnail=thumbnail,
    this.code=code,
    this.stock=stock


    

   if (title == undefined) {

    throw new Error;
   } 

   if (description == undefined) {

    throw new Error;
   } 

   if (price == undefined) {

    throw new Error;
   } 

   if (thumbnail == undefined) {

    throw new Error;
   } 

   if (code == undefined) {

    throw new Error;
   } 

   if (stock == undefined) {

    throw new Error;
   } 
   

}


}



let idCode = 122;

const producto1 = new Product("Piense y hágase rico", "Excelente libro de Finanzas", "$4000", "thinkRich.jpg", idCode, 750);
const producto2 = new Product("El Alquimista", "Excelente libro de Auto conocimiento", "$3000", "alquimista.jpg", idCode+=1, 550);
const producto3 = new Product("El arte de la Guerra", "Tácticas Militares", "$4500", "warArt.jpg", idCode+=1, 400);
// const producto4 = new Product("PruebaParaError","Este producto no contiene Stock, si lo descomentamos y lo incorporamos al array con la funcion AddProduct lanzaría ERROR", "$500", "error.jpg", idCode+=1);
const producto5 = new Product("El poder del pensamiento positivo", "Desarrollo personal", "$4300", "thinkPositive.png", idCode+=1, 150);
const producto6 = new Product("El Hombre en busca de Sentido", "Gran libro de Viktor Frankl que nos invita a reflexionar y buscar el sentido de nuestras vidas.", "$3500", "ViktorFrankl.jpg", idCode+=1, 99);
const producto7 = new Product("Tus zonas erróneas", "Autoayuda", "$3200", "WrongZones.jpg", idCode+=1, 102);

const ProductHandler = new ProductManager('./persistencia.json');


ProductHandler.addProduct(producto1);
ProductHandler.addProduct(producto3);
ProductHandler.addProduct(producto2);
// ProductHandler.addProduct(producto4);



ProductHandler.getProducts();
ProductHandler.getProductById(producto1);

ProductHandler.addProduct(producto1);
ProductHandler.addProduct(producto3);
ProductHandler.addProduct(producto2);
ProductHandler.addProduct(producto5);
ProductHandler.getProducts();

ProductHandler.updateProduct(producto3, producto6);


ProductHandler.write();
ProductHandler.read();

ProductHandler.deleteProduct(producto2);
ProductHandler.deleteProduct(producto1);
ProductHandler.deleteProduct(producto7);