// Tipo Dado
// booleanos

// Conversao Implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);

// Conversao implicita
// Acontece quando o javascript converte o numero em string
// e depois compara
// as 2 strings
console.log(numero === numeroString);
console.log(numero + numeroString);

// Conversao Explicita
// Number
let novoNumero = Number(numeroString);
console.log (numero + novoNumero);

// String