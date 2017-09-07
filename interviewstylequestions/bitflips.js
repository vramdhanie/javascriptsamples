module.exports = (a, b) => {
    const diff = a ^ b; //XOR = exclusive or
    return diff
            .toString(2)
            .split('')
            .reduce((a, c) => a + +c, 0)
}