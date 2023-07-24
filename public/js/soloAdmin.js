
const rol = document.getElementById('rol')
const userId = document.getElementById('userId')
const updateUser = document.getElementById('updateUser')
const deleteUser = document.getElementById('deleteUser')
const handleElem = document.querySelector('[name="UserId"]')
const userEmail = document.getElementById('userEmail') 





rol.onmouseout = () => {
alert("Debes seleccionar el nuevo Rol deseado y luego clickear en 'Actualizar Usuario'")
}

 
updateUser.onclick = () =>{
  const rolUser = {
    rol: rol.value,
    id: userId.innerHTML
   
}
fetch('/api/users/actualizarUnUsuario', {
    method: 'PUT',
    body: JSON.stringify(rolUser),
    headers: {
        'Content-Type': 'application/json'
    }
})

alert(`El rol del usuario ${userEmail?.innerHTML}, ha sido actualizado a ${rol.value} correctamente en la DB.`)

 
}


deleteUser.onclick = () =>{

  const obj = {
    id: userId.innerHTML
   
}
fetch('/api/users/deleteOneUser', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-Type': 'application/json'
    }
})

alert(`El usuario ${userEmail?.innerHTML}, ha sido eliminado correctamente de la DB.`)

setTimeout(()=>{
  window.location.replace('/handlebars/login')

}, 1000)

}


