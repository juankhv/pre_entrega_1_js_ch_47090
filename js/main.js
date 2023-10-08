let precioScooter = 1000;
let precioBicicleta = 2000;
let precioPatines = 500;


let carrito = "";
let total = 0




function comprarProducto() {
    let opcion = parseInt(prompt("Ingrese el número del producto que desea comprar (1, 2 o 3), o 0 para finalizar la compra:"));

    if (opcion === 0) {
        document.getElementById("carrito").innerHTML = carrito;
        document.getElementById("total").textContent = total;
        alert("¡Gracias por su compra!");
    } else if (opcion === 1) {
        carrito += "Scooter - $" + precioScooter + "<br>";
        total += precioScooter;
        comprarProducto();
    } else if (opcion === 2) {
        carrito += "Bicicleta - $" + precioBicicleta + "<br>";
        total += precioBicicleta;
        comprarProducto();
    } else if (opcion === 3) {
        carrito += "Patines - $" + precioPatines + "<br>";
        total += precioPatines;
        comprarProducto();
    } else {
        alert("Opción inválida. Por favor, ingrese 1, 2 o 3 para seleccionar un producto, o 0 para finalizar la compra.");
        comprarProducto();
    }
}

let boton = document.getElementById("btnComprar");
boton.addEventListener("click", comprarProducto);



