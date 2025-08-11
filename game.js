console.log("Jueguito Adivina el número (del 1 al 100)");
const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número del 1 al 100


const readline = require('readline'); //modulo para leer y escribir en la consola

const rl = readline.createInterface({
  input: process.stdin, //indica que lee del teclado 
  output: process.stdout //indica que escribe en la consola
});

function preguntar(){//se crea la funcion para evaluar
  rl.question('Ingresa tu número: ', (respuesta) => { //muestra pregunta y se guarda lo que se escribe en "respuesta"

    //evaluar la respuesta 
    if (respuesta === numeroSecreto) {
      console.log("Correcto");
      rl.close(); // cerrar el programa
    } else {
      const diferencia = Math.abs(respuesta - numeroSecreto);
      if (diferencia <= 5) {
        console.log("Caliente");
      } else {
        console.log("Frío");
      }
      preguntar(); // volver a preguntar
    }
  });
}

preguntar();