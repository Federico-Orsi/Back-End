const formJwtExpirado = document.getElementById('formJwtExpirado')
const userId = document.getElementById('userId')
const destinatario = document.getElementById('destinatario')
const mensaje = document.getElementById('mensaje')



formJwtExpirado.onsubmit = (e, req, res, next) =>{

    e.preventDefault()
    
    const correo = {
        id: userId.value,
        destinatario: destinatario.value,
        mensaje: mensaje.value
    };
    fetch('/api/users/enviar-mail', {
        method: 'POST',
        body: JSON.stringify(correo),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    alert("Gracias, te hemos enviado el correo nuevamente.")
}


