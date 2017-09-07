const chai = require('chai');
chai.should();

const flip = require('../interviewstylequestions/bitflips');

describe('Bit Flips', () => {
    it('should return zero if no difference', () => {
        const actual = flip(19, 19);
        const expected = 0;
        actual.should.be.equal(expected);
    })

    it('should return 0 for 0', () => {
        flip(0, 0).should.be.equal(0);
    })

    it('should find single difference', () => {
        flip(31, 30).should.be.equal(1);
    })

    it('should do larger numbers', () => {
        flip(31, 14).should.be.equal(2);
    })

})