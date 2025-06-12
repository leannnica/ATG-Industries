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

  const botonDisenar = document.getElementById("btn-disenar");

  if (n_usuario) {
    // Si hay usuario, lo pasamos como parámetro
    botonDisenar.href = `disena_auto.html?n_usuario=${encodeURIComponent(n_usuario)}`;
  } else {
    // Si no hay usuario, lo dejamos sin datos
    botonDisenar.href = "disena_auto.html";
  }