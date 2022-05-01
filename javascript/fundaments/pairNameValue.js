// par nome/valor
const saudation = 'Opa' // contexto lexico 1

function exec() {
  const saudation = 'Fala' // contexto lexico 2
  return saudation
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
  name: 'Pedro',
  age: 32,
  weight: 90,
  address: {
    street: 'Rua Muito Legal',
    number: 123
  }
}

console.log(saudation)
console.log(exec())
console.log(client)