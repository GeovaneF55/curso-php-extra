// novo recurso do ES2015

const person = {
  name: 'Pedro',
  age: 32,
  address: {
    street: 'Rua Muito Legal',
    number: 123
  }
}

const { name, age } = person
console.log(name, age)

const { name: n, age: i } = person
console.log(n, i)

const { surname, goodHumor = true } = person
console.log(surname, goodHumor)

const { address: { street, number, cep } } = person
console.log(street, number, cep)

const { cc: { number: num } } = person // Error: cc is not defined
console.log(cc)