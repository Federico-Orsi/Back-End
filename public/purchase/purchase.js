
const showProducts = document.getElementById("showProducts")
const divProducts = document.getElementById("products") 
const cartId = document.getElementById("cartId")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const rol = document.getElementById("rol")
const usuarioLoggeado = document.getElementById("usuarioLoggeado") 
const divCart = document.getElementById("divCart") 
const ticket = document.getElementById("ticket") 
const containerTicket = document.getElementById("containerTicket") 





let cid;
let pid;

const allProductsMongoURL = "http://localhost:8080/api/products/mongoose"

const bringUserURL = "http://back-end-production-3da5.up.railway.app/api/sessions/current"

const cartIdURL = "http://localhost:8080/api/carts/printCartId"


let allProductsMongo = []

const addToCart = async (prodId) =>{
 
  let qty = document.getElementById(`input${prodId}`) 
  cid = cartId.innerHTML;
  pid = prodId;
  const dto = {qty: qty.value}

  const res = await fetch(`http://localhost:8080/api/carts/${cid}/products/${pid}`, {
    method:"POST",
    body: JSON.stringify(dto),
    headers: {
      "Content-Type": "application/json"
    }

  })
  
  const json = await res.json()
  alert(`Su producto: ${prodId}, ha sido agregado al carrito correctamente.`)

}

const printProducts = (products) => {
products.forEach(prod => {
  
  divProducts.innerHTML += `  
  
  <div style="border: solid; width: fit-content; margin-top: 2%; padding: 1%;">
  <h4>${prod.title}</h4>
  <p>${prod.description}</p>
  <p>${prod?.owner}</p>
  <p>${prod._id}</p>
  <span>Cantidad: </span><input id="input${prod._id}" style="width: 30%;" type="text" value="">
  <button onclick=addToCart("${prod._id}") style="background-color: darkkhaki; color: white;">Agregar al carrito</button>

  
 </div>
  `
});

  
}


showProducts.onclick = () =>{

  fetch(allProductsMongoURL)
  .then(res => res.json()) 
  .then(data => {
   allProductsMongo = [...allProductsMongo, ...data]
   printProducts(allProductsMongo)
  })
}


async function showUser() {
//  aca traigo el EmailUser
 const res = await fetch(bringUserURL)
 const json = await res.json()
 usuarioLoggeado.innerHTML = json.username;
 rol.innerHTML = json.rol;
 nombre.innerHTML = json.Nombre;
 apellido.innerHTML = json.Apellido;


//  luego con el emailUser busco el carrito de ese Usuario
const userEmail = {username: usuarioLoggeado.innerHTML }

 const response = await fetch(cartIdURL, {
  method: "POST",
  body: JSON.stringify(userEmail),
  headers: {
   'Content-Type': 'application/json'
  }
})

const jsonn = await response.json()
cartId.innerHTML = jsonn?._id

divCart.onclick = () => {
  window.location.replace(`http://localhost:8080/api/carts/${cartId.innerHTML}/showCart`)
}

ticket.onclick = () => {
  fetch(`http://localhost:8080/api/carts/${cartId.innerHTML}/purchase`)
  .then(res=>res.json())
  .then(data =>{

    containerTicket.innerHTML = `  
  
  <div style="border: solid; width: fit-content; margin-top: 2%; padding: 1%;">
  <p>Cart ID: ${data?.cart}</p>
  <p>Código de transacción: ${data?.code}</p>
  <p>Monto total de la compra: ${data?.order_total}</p>
  <p>Cantidad de items comprados: ${data?.productos?.length} (*se indican los items comprados, no la cantidad total de productos.)</p>
  <p>Fecha de la orden: ${data?.purchase_dateTime}</p>
  <p>e-mail del comprador: ${data?.purchaser}</p>
  <p>Ticket ID: ${data._id}</p>
  
  <p>Muchas gracias por su compra.</p>
  <p>Que tenga un hermoso día</p>
 
  

 </div>
  `
  })
}

}

showUser()


