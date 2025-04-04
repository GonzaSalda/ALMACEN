
document.addEventListener("DOMContentLoaded", () => {
    const listaProductos = document.getElementById("lista-productos");

    fetch("../productos.json")
        .then(response => response.json())
        .then(productos => {
            productos.forEach(producto => {
                const li = document.createElement("li");
                li.classList.add("producto");

                li.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                    <strong>${producto.nombre}</strong><br>
                    <span>Precio: $${producto.precio.toLocaleString()}</span>
                </div>
                <div class="detalles">
                  ${producto.detalles ? ` <p>${producto.detalles}</p>` : ""} 
                    ${producto.extras ? ` <p>${producto.extras}</p>` : ""}
                </div>
            `;
                li.addEventListener("mouseover", () => {
                    li.querySelector(".detalles").style.display = "block";
                });

                li.addEventListener("mouseleave", () => {
                    li.querySelector(".detalles").style.display = "none";
                });
                listaProductos.appendChild(li);
            });
        })
        .catch(error => console.error("Error cargando productos:", error));
});
