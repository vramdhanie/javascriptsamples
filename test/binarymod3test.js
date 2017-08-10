const chai = require('chai');
chai.should();

const fsm = require('../interviewstylequestions/binarymod3');

describe('Binary Mod 3', () => {
    it('should determine if a bit string is divisble by 3', () => {
        fsm('000').should.be.true;
        fsm('001').should.be.false;
        fsm('011').should.be.true;
        fsm('110').should.be.true;
        fsm('abc').should.be.false;
    })
});