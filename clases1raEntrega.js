import fs from 'fs';


export class Manager{

constructor(path1, path2){

 this.path1 = path1,
 this.path2 = path2,
 this.Products = [],
 this.arrayConTodosLosCarts=[]

}    

  addProduct = (productoX) => {
     
       
     if (this.Products.find(prod => prod.id === productoX.id ) == undefined){
       
        this.Products.push(productoX) ;
     } else { 
        
        console.log("Este producto ya fue agregado al Array. No puede repetirse ya que no deben repetirse los IDs") ;
    }
} 

 
addCart = (productoX) => {
     
       
    if (this.arrayConTodosLosCarts.find(prod => prod.cid === productoX.cid ) == undefined){
      
       this.arrayConTodosLosCarts.push(productoX) ;
    } else { 
       
       console.log("Este Carrito ya fue agregado al Array. No puede repetirse ya que no deben repetirse los IDs") ;
   }
} 
   
    
    
    getProducts = () => {
    
      console.log(this.Products);
      return this.Products;
    } 

    getCarts = () => {
    
        return this.arrayConTodosLosCarts;
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
    const found = this.Products.find(prod => prod.id === prodAactualizar.id);
    
    if(found){
        const foundIndex = this.Products.indexOf(found)
        this.Products.splice(foundIndex,1, newProduct);
    } else{console.log("UPPS!! El producto que intenta actualizar no se encuentra en el Array")}
    
    
    
  }

  write = async () => {
  await fs.promises.writeFile(this.path1, JSON.stringify(this.Products));
  await fs.promises.writeFile(this.path2, JSON.stringify(this.arrayConTodosLosCarts));

}

  async read(){
    try{

    const readFileProducts = JSON.parse(await fs.promises.readFile(this.path1, 'utf-8'));
    const readFileCarts = JSON.parse(await fs.promises.readFile(this.path2, 'utf-8'));
    
    return readFileProducts;

    
 } catch (error) {
   console.log(error);
 }   
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




export class Product{


constructor({title, description, code, price, status, stock, category, thumbnails}){
    
    this.title=title,
    this.description=description,
    this.code=code,
    this.price=price,
    this.status=status,
    this.stock=stock,
    this.category=category,
    this.thumbnails=thumbnails
   
    


    

   if (title == undefined) {

    throw new Error('Falta el Title');
   } 

   if (description == undefined) {

    throw new Error('Falta la Description');
   } 

   if (price == undefined) {

    throw new Error('Falta el Price');
   } 

   if (code == undefined) {

    throw new Error('Falta el Code');
   } 

   if (thumbnails == undefined) {

    throw new Error('Falta la imagen');
   } 

   

   if (status == undefined) {

    throw new Error('Falta el Status');
   } 

   if (stock == undefined) {

    throw new Error('Falta el Stock');
   } 

   if (category == undefined) {

    throw new Error('Falta la Category');
   } 
   

}
}




export class Carrito{


    constructor(){
        
        // this.product=product
        
    }

    }
    


export const ManagerHandler = new Manager('./productos.json', './carritos.json');


