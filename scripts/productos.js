let productoss = [
  { id: 1, nombre: "algo 1", precio: 5000 },
  { id: 2, nombre: "algo 2", precio: 6000 },
  { id: 3, nombre: "algo 3", precio: 7000 }
];

function mostrarProductos() {
  let product = document.getElementById("productos");
  product.innerHTML = "";
  for (const producto of productoss) {
    product.innerHTML += `
      <div class="caluga">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
      </div>
    `;
  }
}
