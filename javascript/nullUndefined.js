let value // não inicializado
console.log(value)

value = null // ausência de valor
console.log(value)
// console.log(value.toString()) // Erro!

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined // evitar atribuir undefined
console.log(!!product.price)
// delete product.price // deletar atributo
console.log(product)

product.price = null // sem preço
console.log(!!product.price)
console.log(product)
