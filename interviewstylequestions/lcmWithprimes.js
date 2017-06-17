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
        console.log(i, obj);
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

let smallest = 2;
let largest = 20;
let primes = countPrimes(smallest, largest);
console.log(Object.keys(primes).reduce((acc, k) => {
    return acc * Math.pow(k, primes[k]);
}, 1));


