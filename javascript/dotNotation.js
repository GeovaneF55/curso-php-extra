console.log(typeof console)
console.log(Math.ceil(6.11))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(name) {
  this.name = name
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()