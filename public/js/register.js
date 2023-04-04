const registerForm = document.getElementById('registerForm')
const Nombre = document.getElementById('first_name')
const Apellido = document.getElementById('last_name')
const Edad = document.getElementById('age')
const e_mail = document.getElementById('email')
const password = document.getElementById('password')
const rol = document.getElementById('rol')



if (registerForm instanceof HTMLFormElement) {
    registerForm.addEventListener('submit', e => {
        console.log("form enviado")
        e.preventDefault()
        const user = {
            Nombre : Nombre.value,
            Apellido : Apellido.value,
            e_mail: e_mail.value,
            Edad: Edad.value,
            rol: rol.value,
            password: password.value
        }
        // const data = new FormData(registerForm)
        // const obj = {}
        // data.forEach((value, key) => obj[key] = value)
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/handlebars/login')
                }
            })
    })
}