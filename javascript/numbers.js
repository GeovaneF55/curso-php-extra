const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const avaliation1 = 9.871
const avaliation2 = 6.871

const total = avaliation1 * weight1 + avaliation2 * weight2
const media = total / (weight1 + weight2)

console.log(media.toFixed(2)) // toFixed(2) -> limita o número de casas decimais
console.log(media.toString()) // toString() -> converte para string
console.log(media.toString(2)) // toString(2) -> converte para binário
console.log(typeof media) // number
console.log(typeof Number) // function