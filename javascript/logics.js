function purchases(job1, job2) {
    const buyIcecream = job1 || job2
    const buyTv50 = job1 && job2
    // const buyTv32 = !!(job1 ^ job2); // bitwise xor
    const buyTv32 = job1 != job2
    const beHealthy = !buyIcecream

    return { buyIcecream, buyTv50, buyTv32, beHealthy }
}

console.log(purchases(true, true))
console.log(purchases(true, false))
console.log(purchases(false, true))
console.log(purchases(false, false))