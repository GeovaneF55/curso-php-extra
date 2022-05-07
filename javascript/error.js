function treatErrorAndLunch(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        name: erro.name,
        message: erro.message,
        date: new Date
    }
        
}

function printNameShouted(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        treatErrorAndLunch(e)
    } finally {
        console.log('Final')
    }
}

const obj = { named: 'José' }
printNameShouted(obj)