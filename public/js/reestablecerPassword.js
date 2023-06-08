
const formPassword = document.getElementById('formPassword')
const oldPassword = document.getElementById('oldPassword')
const newPassword = document.getElementById('newPassword')



formPassword.onsubmit = (e, req, res, next) =>{

    e.preventDefault()
    
    console.log(oldPassword.value)
    console.log(newPassword.value)
   
}


// export async function reestablecerPassword(req, res, next) {

   
//     // setTimeout(() => {  
//     // }, 3000);

//     const payload = jwt.verify(token, SECRET_TOKEN)
//     console.log(payload["userId"])

//     res.json(token)

// }