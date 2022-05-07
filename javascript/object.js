const prod1 = {}
prod1.name = 'Celular Ultra Mega'
prod1.price = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
  name: 'Camisa Polo',
  price: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

console.log(prod2)