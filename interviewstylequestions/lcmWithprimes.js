/**
 * Returns an array of prime factors of num
 * @param num An integer > 0
 * @returns {Array}
 */
function primeFactors(num){
    let denom = 2;
    let factors = [];
    while(num !== 1){
        if(num % denom === 0){
            factors.push(denom);
            num = num / denom;
        }else{
            denom++;
        }
    }
    return factors;
}

/**
 * Counts the number of times a prime factor occurs in each of the numbers
 * from smallest to largest and tracks the greatest occurences
 * @param smallest
 * @param largest
 * @returns {{}}
 */
function countPrimes(smallest, largest) {
    let primes = {};
    for (let i = smallest; i <= largest; i++) {
        let obj = {};
        primeFactors(i).forEach((e) => {
            if (e in obj) {
                obj[e]++;
            } else {
                obj[e] = 1;
            }
        });
        Object.keys(obj).forEach((k) => {
            if (k in primes) {
                primes[k] = obj[k] > primes[k] ? obj[k] : primes[k];
            } else {
                primes[k] = obj[k];
            }
        });
    }
    return primes;
}

/**
 * Returns the LCM of a range of numbers
 * @param start
 * @param end
 * @returns {*}
 */
function lcm(start, end){
    let primes = countPrimes(start, end);
    return Object.keys(primes).reduce((acc, k) => {
        return acc * Math.pow(k, primes[k]);
    }, 1);
}



module.exports = {
    primeFactors:primeFactors,
    countPrimes:countPrimes,
    lcm:lcm
};

