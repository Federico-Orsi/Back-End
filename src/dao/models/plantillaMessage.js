
export class Message{


    constructor(user, message){
        
        this.user=user,
        this.message=message
        
       
    
       if (user == undefined) {
    
        throw new Error('Falta el usuario');
       } 
    
      
    
    }
    }
    
    