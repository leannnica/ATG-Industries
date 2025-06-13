function register(event) {
    event.preventDefault();
    let usuario_nuevo = document.getElementById("usuario").value
    let password_nuevo = document.getElementById("password").value
    
    fetch("https://atg-industries-backend-production.up.railway.app/register_page/registrarse",  
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                usuario: usuario_nuevo,
                password: password_nuevo
            })
        }
    )
    .then(response => {
        if (!response.ok) {
            console.log("Error de respuesta");
        }
        return response.json();
    })
    .then(data => { 
        if (data.error){
            alert(data.error);
        } else{
            alert(data.mensaje);
            window.location.href = `/inicio.html`;
        }
    })
}

function login(event) {
    event.preventDefault()
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    fetch("https://atg-industries-backend-production.up.railway.app/login_page/login",        
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                usuario: usuario,
                password: password
            })
        }
    )
    .then(response => {
        if (!response.ok) {
            console.log("Error de respuesta");
        }
        return response.json();
    })
    .then(data => {
        if(data.usuario){
            window.location.href = `index.html?n_usuario=${data.usuario}`;
                } else{
            alert(data.error)
        }
        
    })
    .catch(error => {
        console.error('Error:', error)
    })
}

function cambiar_contraseña(event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let new_password = document.getElementById('new_password').value;
    fetch("https://atg-industries-backend-production.up.railway.app/cambio_contraseña/cambiar_contraseña", 
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                new_password: new_password
            })
        }
    )
    .then(response => {
        if (!response.ok) {
            console.log("Error de respuesta");
        }
        return response.json();
    })
    .then(data => {
        if (data.error){
            alert(data.error); 
        }else{
            alert(data.mensaje);
            window.location.href = '/inicio.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}