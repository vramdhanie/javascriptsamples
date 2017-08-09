const chai = require('chai');
chai.should();

const add = require('../interviewstylequestions/bigadder');

describe('Big Adder', () => {
    it('should add equal length strings', () => {
        add('123', '321').should.be.equal('444');
    })

    it('should add unequal length strings', () => {
        add('123', '10').should.be.equal('133');
    })
})
