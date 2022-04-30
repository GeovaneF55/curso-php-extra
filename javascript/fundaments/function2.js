// Armazenando funções em variáveis
const printSum = function (a, b) {
  console.log(a + b)
}

printSum(2, 3)

// Armazenando uma função arrow em uma variável
const sum = (a, b) => {
  return a + b
}

console.log(sum(2, 3))

// retorno implícito
const sub = (a, b) => a - b
console.log(sub(2, 3))

const print2 = a => console.log(a)
print2('Legal!!!')