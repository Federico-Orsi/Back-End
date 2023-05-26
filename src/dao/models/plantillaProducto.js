

export class Producto{


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
    
    