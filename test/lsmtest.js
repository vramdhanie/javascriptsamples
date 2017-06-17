const chai = require('chai');
chai.should();

const primeFactors = require('../interviewstylequestions/lcmWithprimes').primeFactors;
const countPrimes = require('../interviewstylequestions/lcmWithprimes').countPrimes;
const lcm = require('../interviewstylequestions/lcmWithprimes').lcm;

describe('LCM with prime factors', ()=>{
    it('should find all prime factors', ()=>{
        expected = {
            2: [2],
            3: [3],
            4: [2, 2],
            5: [5],
            6: [2, 3],
            7: [7],
            8: [2, 2, 2],
            9: [3, 3],
            10: [2, 5]
        }

        Object.keys(expected).forEach((e)=>{
           primeFactors(e).should.deep.equal(expected[e]);
        });
    });

    it('should count the number of primes in all prime factors', ()=>{
        countPrimes(1, 20).should.deep.equal({ '2': 4, '3': 2, '5': 1, '7': 1, '11': 1, '13': 1, '17': 1, '19': 1 });
    });

    it('should find the lcm of a range of numbers', ()=>{
        lcm(1, 20).should.equal(232792560);
        lcm(1, 10).should.equal(2520);
    });

});