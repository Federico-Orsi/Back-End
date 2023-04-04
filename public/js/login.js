const loginForm = document.getElementById('loginForm')
const e_mail = document.getElementById('email')
const password = document.getElementById('password')


if (loginForm instanceof HTMLFormElement) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const obj = {
            e_mail: e_mail.value,
            password: password.value
        };
        fetch('/api/sessions/', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/handlebars/mongoose')
                }
            })
    })
}