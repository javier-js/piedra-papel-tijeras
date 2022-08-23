function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let jugador = 0;
let min = 1;
let max = 3;
let pc = aleatorio(1, 3);
jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para piedra");
// alert("Elegiste " + jugador)
if (jugador == 1) {
  alert("Elejiste piedra🌚");
} else if (jugador == 2) {
  alert("Elejiste papel📃");
} else if (jugador == 3) {
  alert("Elejiste tijeras✂");
} else {
  alert("ERROR...!😜");
}
if (pc == 1) {
  alert("PC piedra🌚");
} else if (pc == 2) {
  alert("PC papel📃");
} else if (pc == 3) {
  alert("PC tijeras✂");
}

if (jugador == pc) {
  alert("EMPATE...!😒");
} else if (
  (jugador == 1 && pc == 3) ||
  (jugador == 3 && pc == 2) ||
  (jugador == 2 && pc == 1)
) {
  alert("ganaste");
} else {
  alert("PERDISTE");
}
