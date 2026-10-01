// Cuenta regresiva hasta el lanzamiento de Mecha Corta.

// Viernes 16 de octubre de 2026 a las 20:00, hora de Chile (-03:00).
// La zona horaria va escrita para que la cuenta sea la misma en cualquier celular.
const FECHA_LANZAMIENTO = new Date("2026-10-16T20:00:00-03:00");

const cuenta = document.getElementById("cuenta");
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Agrega un cero adelante si hace falta: 5 -> "05"
function dosDigitos(numero) {
  return String(numero).padStart(2, "0");
}

function actualizarCuenta() {
  const faltan = FECHA_LANZAMIENTO - new Date(); // en milisegundos

  if (faltan <= 0) {
    clearInterval(reloj);
    cuenta.classList.add("cuenta--fin");
    cuenta.innerHTML = "<p>¡Ya estamos abiertos!</p>";
    return;
  }

  const totalSegundos = Math.floor(faltan / 1000);

  dias.textContent = dosDigitos(Math.floor(totalSegundos / 86400));
  horas.textContent = dosDigitos(Math.floor(totalSegundos / 3600) % 24);
  minutos.textContent = dosDigitos(Math.floor(totalSegundos / 60) % 60);
  segundos.textContent = dosDigitos(totalSegundos % 60);
}

// Se ejecuta cada 1 segundo (1000 milisegundos)
const reloj = setInterval(actualizarCuenta, 1000);
actualizarCuenta(); // y una vez al tiro, para no mostrar "--" el primer segundo
