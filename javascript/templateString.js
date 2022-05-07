const name = 'Rebeca'
const concatenation = 'Olá ' + name + '!'
const templateString = `
  Olá
  ${name}!`
console.log(concatenation, templateString)

// expressões ...
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Eii... ${up('cuidado')}!`)