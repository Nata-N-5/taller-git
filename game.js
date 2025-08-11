console.log("Jueguito Adivina el número (del 1 al 100)");
const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número del 1 al 100


const readline = require('readline'); //modulo para leer y escribir en la consola

const rl = readline.createInterface({
  input: process.stdin, //indica que lee del teclado 
  output: process.stdout //indica que escribe en la consola
});

function preguntar(){

}