const chai = require('chai');
chai.should();

const sort = require('../interviewstylequestions/mergesort');

describe('Merge Sort', () => {
    it('should sort a random array', () => {
        sort([8, 3, 5, 2, 4, 7,9,4,3,2,1,2,5,6,4,3], 0, 15)
            .should.deep.equal([1, 2, 2, 2, 3, 3, 3, 4, 4, 4,5, 5,  6, 7, 8, 9]);
    })

    it('should sort a reversed list', () => {
        sort([6,5,4,3,2,1], 0, 5).should.deep.equal([1,2,3,4,5,6]);
    })

    it('should sort an empty array', () => {
        sort([]).should.deep.equal([]);
    })
})