const loginForm = document.getElementById('loginForm')
const e_mail = document.getElementById('email')
const password = document.getElementById('password')
const logFail = document.getElementById('logFail')



if(logFail) {
    logFail.style.color = "red";
} 

if (loginForm instanceof HTMLFormElement) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const obj = {
            username: e_mail.value,
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