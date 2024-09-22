// Función para agregar productos al carrito
function agregarCarrito(producto) {
    // Redirige a la página del carrito con el nombre del producto en la URL
    window.location.href = "carrito.html?producto=" + encodeURIComponent(producto);
}

function cargarCategoria(categoria) {
    // Evitamos la carga del inicio porque ya está en el HTML principal
    if (categoria === 'Inicio') return;

    const productosDiv = document.getElementById('productos');
    const ruta = `categorias/${categoria}.html`;

    console.log("Ruta:", ruta); // Para verificar la ruta
    fetch(ruta)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            productosDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar la categoría:', error);
        });
}


