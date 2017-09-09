module.exports = (a, max) => {
    let n = Math.floor(max / a); //number of terms
    let lastTerm = a * n; //the very last multiple, less than max
    return Math.floor((n / 2) * (a + lastTerm));
}
