const chai = require('chai');
chai.should();

const sumOfMultiples = require('../interviewstylequestions/sumofmultiples');

describe('Sum Of Multiples', () => {
    it('Should calculate 2 multiples', () => {
        sumOfMultiples(6, 13).should.equal(18);
        sumOfMultiples(6, 20).should.equal(36);
        sumOfMultiples(6, 18).should.equal(36);
        sumOfMultiples(6, 5).should.equal(0);
    })
});