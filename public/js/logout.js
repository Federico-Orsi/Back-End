const logOut = document.getElementById('logOut')


    logOut.onclick = () => {

        fetch('/api/sessions/logout/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/handlebars/login')
                }
            })
    
        }
    