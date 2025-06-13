document.addEventListener('mousemove', (event) => {
    let distancia_borde;
    if(sidebar.classList.contains('hidden')){
        distancia_borde = 200;
    }else{
        distancia_borde = 340;
    }
    if (event.clientX > window.innerWidth - distancia_borde) {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('show');
       
        document.getElementById('sidebarIndicator').style.display = 'none';
    } else {
        sidebar.classList.remove('show');
        sidebar.classList.add('hidden');
       
        document.getElementById('sidebarIndicator').style.display = 'block';
    }
});

function eliminar_cuenta(event) {
    event.preventDefault();
    let confirmar = confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.");

    if (confirmar) {
        let usuario = document.getElementById("btn_eliminar").getAttribute("data-usuario");

        fetch(`/${usuario}/eliminar_cuenta`, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) {
                console.log("Error de respuesta");
            }
            return response.json();
        })
        .then(data => {
            alert(data.mensaje);
            window.location.href = '/login_page';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        console.log("Eliminación de cuenta cancelada.");
    }
}

const params = new URLSearchParams(window.location.search);
const n_usuario = params.get("n_usuario");

const nombreUsuario = document.getElementById("nombre_usuario");
const navLogin = document.getElementById("nav_login");
const navGaraje = document.getElementById("nav_garaje");
const navLogout = document.getElementById("nav_logout");
const navEliminar = document.getElementById("nav_eliminar");
const navNoSesion = document.getElementById("nav_no_sesion");
const linkDiseñaAuto = document.querySelector("link_disenar");
const linkGaraje = document.getElementById("link_garaje");
const btnEliminar = document.getElementById("btn_eliminar");

if (n_usuario) {
    nombreUsuario.innerText = n_usuario;
    navLogin.style.display = "none";
    navGaraje.style.display = "list-item";
    navLogout.style.display = "list-item";
    navEliminar.style.display = "list-item";
    navNoSesion.style.display = "none";
    linkGaraje.href = `garage.html?n_usuario=${encodeURIComponent(n_usuario)}`;
    btnEliminar.dataset.usuario = n_usuario;
} else {
    nombreUsuario.innerHTML = `<a href="inicio.html" class="nav_boton">Sin iniciar sesión</a>`;
    navLogin.style.display = "list-item";
    navGaraje.style.display = "none";
    navLogout.style.display = "none";
    navEliminar.style.display = "none";
    navNoSesion.style.display = "list-item";
}  

if (linkDiseñaAuto && n_usuario) {
    linkDiseñaAuto.href = `disena_auto.html?n_usuario=${encodeURIComponent(n_usuario)}`;
} else if (linkDiseñaAuto) {
    linkDiseñaAuto.href = `disena_auto.html`;
}