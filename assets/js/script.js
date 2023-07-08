//  tarea 1

function toggleBorder() {
  var image = document.getElementById("imagen1");
  image.classList.toggle("red-border");
}
//  tarea 2

function calcularTotal() {
  var sticker1Qty = parseInt(document.getElementById("sticker1Qty").value) || 0;
  var sticker2Qty = parseInt(document.getElementById("sticker2Qty").value) || 0;
  var sticker3Qty = parseInt(document.getElementById("sticker3Qty").value) || 0;

  var totalQty = sticker1Qty + sticker2Qty + sticker3Qty;
  var resultado = document.getElementById("resultado");

  if (totalQty <= 10) {
    resultado.textContent = "Llevas " + totalQty + " stickers";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
}

// tarea 3

function verificarPassword() {
  var select1 = document.getElementById("select1");
  var select2 = document.getElementById("select2");
  var select3 = document.getElementById("select3");
  var respuesta = document.getElementById("respuesta");

  var password = select1.value + select2.value + select3.value;

  if (password === "911") {
    respuesta.textContent = "Password 1 correcto";
  } else if (password === "714") {
    respuesta.textContent = "Password 2 correcto";
  } else {
    respuesta.textContent = "Password incorrecto";
  }
}
