console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)
console.log('09)', '3' in [1, 2, 3])
console.log('10)', '3' instanceof Number)
console.log('11)', undefined == null)
console.log('12)', undefined === null)
console.log('13)', null == 0)
console.log('14)', null === 0)
console.log('15)', null == '')
console.log('16)', null === '')
console.log('17)', null == false)
console.log('18)', null === false)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('19)', d1 === d2)
console.log('20)', d1 == d2)
console.log('21)', d1.getTime() === d2.getTime())