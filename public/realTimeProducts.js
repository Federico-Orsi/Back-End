
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
   



