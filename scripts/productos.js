let productoss = [
  { id: 1, img:"../images/algo.webp" , nombre: "algo 11111", precio: 5000 },
  { id: 2, img:"../images/algo.webp", nombre: "algo 2", precio: 6000 },
  { id: 3, img:"../images/algo.webp", nombre: "algo 3", precio: 7000 },
  { id: 4, img:"../images/algo.webp", nombre: "algo 4", precio: 7000 }
];

function mostrarProductos() {
  let product = document.getElementById("productos");
  product.innerHTML = "";
  for (const producto of productoss) {
    product.innerHTML += `
      <div class="caluga">
        <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
      </div>
    `;
  }
}
