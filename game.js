console.log("Jueguito Adivina el número (del 1 al 100)");
const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número del 1 al 100


const readline = require('readline'); //modulo para leer y escribir en la consola

const rl = readline.createInterface({
  input: process.stdin, //indica que lee del teclado 
  output: process.stdout //indica que escribe en la consola
});

function preguntar(){//se crea la funcion para evaluar
  rl.question('Ingresa tu número: ', (respuesta) => { //muestra pregunta y se guarda lo que se escribe en "respuesta"

     const numero = parseInt(respuesta);//convertir a numero entero para que funcione :v 

    // Validar si lo que escribió No es un número o está fuera del rango
    if (isNaN(numero) || numero < 1 || numero > 100) { //NOTA:isNaN Comprueba  el valor 
      console.log(" Entrada inválida. Por favor, ingresa un número entre 1 y 100.");
      return preguntar(); // volver a preguntar
    }

    //evaluar la respuesta 
    if (numero === numeroSecreto) {
      console.log("Correcto");
      rl.close(); // cerrar el programa
    } else {
      const diferencia = Math.abs(numero- numeroSecreto);
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