console.log("Hola Mundo");
// node backEnd-01.js



class ProductManager{

constructor(){
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
// const producto4 = new Product("PruebaParaError","Este producto no contiene Stock, si lo descomentamos lanzaría ERROR", "$500", "error.jpg", idCode+=1);

const ProductHandler = new ProductManager;


ProductHandler.addProduct(producto1);
ProductHandler.addProduct(producto3);
ProductHandler.addProduct(producto2);
// ProductHandler.addProduct(producto4);



ProductHandler.getProducts();
ProductHandler.getProductById(producto1);

ProductHandler.addProduct(producto1);
ProductHandler.addProduct(producto3);
ProductHandler.addProduct(producto2);
