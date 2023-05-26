  
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
   const paginado = document.getElementById("paginado"); 
   const nextPage = document.getElementById("nextPage");
   const nextLink = document.getElementById("nextLink");

  //  emailSend.onclick = async () =>{
    
   

  //  socket.sockets.emit('MongooseUser', userEmail.value)    

  //  }

   messageSend.onclick = (req) =>{
   
    // pUsuario.innerHTML = userEmail.value ;
    pUsuario.innerHTML +=`<p> Usuario: ${userEmail.value}</p>`
    pMessage.innerHTML = message.value ;
   
    socket.emit('MongooseMessage', 
   [userEmail.value,
   message.value
   ])   
   }

  

   socket.on('paginado', data => {
      
    if (data.nextLink) {


    paginado.innerHTML = ""   
    nextLink.innerHTML = `<a href=http://localhost:8080/handlebars/mongoose?page=${data.nextPage}&limit=${data.limit}&category=${data.docs[0].category} target=_blank>Next Page</a>`
    data.docs.map(prod => 
    paginado.innerHTML += `
    <li><strong><span>ID:</span></strong> ${prod?._id}</li>
    <li><strong><span>Title:</span></strong> ${prod?.title}</li>
    <li><strong><span>Description:</span></strong> ${prod?.description}</li>
    <li><strong><span>Price:</span></strong> $ ${prod?.price}</li>
    <li><strong><span>Stock:</span></strong> ${prod?.stock}</li>
    <li><strong><span>Status:</span></strong> ${prod?.status}</li>
    <li><strong><span>Category:</span></strong> ${prod?.category}</li>
    `
    )
    
  
  } 
  })