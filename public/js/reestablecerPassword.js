
const formPassword = document.getElementById('formPassword')
const oldPassword = document.getElementById('oldPassword')
const newPassword = document.getElementById('newPassword')
const userId = document.getElementById('userId')




formPassword.onsubmit = async (e) =>{

    e.preventDefault()
    
    
    const password = {
        uid: userId.value,
        oldPass: oldPassword.value,
        newPass: newPassword.value
    };
    fetch('/api/users/actualizar_password', {
        method: 'PUT',
        body: JSON.stringify(password),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    

   
}


