module.exports = function reverse (n) {
    let mass = String(n).split('')
    if (mass[0] === '-') {
        mass.shift()
    }
    mass = mass.reverse();
    mass = Number(mass.join(''))

        return mass
}
