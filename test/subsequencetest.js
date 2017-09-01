const chai = require('chai');
chai.should();

const sequence = require('../interviewstylequestions/subsequence');

describe('Longest Subsequence', () => {
    it('return empty if no sequence found', () => {
        sequence([1]).should.deep.equal([]);
    })

    it('should return the first sequence found', () => {
        sequence([3, 4, 1, 2]).should.deep.equal([3, 4]);
    })

    it('should find sequence in middle', () => {
        sequence([3, 4, 2, 8, 3, 9, 11, 9, 10]).should.deep.equal([3, 9, 11]);
    });

    it('should return [] from reverse array', () => {
        sequence([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]).should.deep.equal([]);
    });

    it('return full array sequence', () => {
        sequence([1,2,3,4,5,6,7,8,9,10]).should.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    })
})