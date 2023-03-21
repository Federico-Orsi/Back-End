  
  const socket = io()

  

   const socketP = document.getElementById("pTest"); 
   const socketPp = document.getElementById("pTestt");

   const socketManager = document.getElementById("testManagerHandler");
   const socketPost = document.getElementById("socketPost");

   
   socket.on('1st Socket', test => 
        socketP.innerHTML = test 
    );

    socket.on('2nd Socket', data => {
      socketPp.innerHTML = data 
    });

    socket.on('SocketManagerHandler', data => {
      socketManager.innerHTML = data 
    });

    socket.on('socketPostProducto', data => {
      
      if (data.title) {
      socketPost.innerHTML += `<li>${data.title}</li>`
      } 
     
     socket.sockets.emit('socketPostProducto', data)

    });

    socket.emit('enviaCliente', "enviado x cliente")    
   


   const userEmail = document.getElementById("userEmail"); 
   const pUsuario = document.getElementById("pUsuario");
   const emailSend = document.getElementById("emailSend");
   const pMessage = document.getElementById("pMessage");

   const message = document.getElementById("message");
  //  const messageValue = message.value 
   const messageSend = document.getElementById("messageSend");
   
  
  //  emailSend.onclick = async () =>{
    
   

  //  socket.sockets.emit('MongooseUser', userEmail.value)    

  //  }

   messageSend.onclick = () =>{
    
    // pUsuario.innerHTML = userEmail.value ;
    pUsuario.innerHTML +=`<p> Usuario: ${userEmail.value}</p>`
    pMessage.innerHTML = message.value ;
   
    socket.emit('MongooseMessage', 
   [userEmail.value,
   message.value
   ])   


   }