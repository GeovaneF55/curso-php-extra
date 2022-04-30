// Função sem retorno
function printSum(a, b) {
  console.log(a + b)
}

printSum(2, 3)
printSum(2) // NaN!
printSum(2, 3, 4, 5, 6, 7) // Não utiliza os outros valores!
printSum() // NaN!

// Função com retorno
function sum(a, b = 1) {
  return a + b
}

console.log(sum(2, 3))
console.log(sum(2))