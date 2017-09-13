const chai = require('chai');
chai.should();
const partition = require('../interviewstylequestions/partitionOn');


// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// // items should now be [1, 3, 5, 2, 4, 6]
// // i     should now be 3


describe('partition on', () => {
    it('should return 3', () => {
        let items = [1, 2, 3, 4, 5, 6];
        let i = partition(n => n % 2 == 0, items);
        i.should.equal(3);
    });

    it('should return 3', () => {
        let items = [15, 6, 78, 12, 9, 10, 13, 4];
        let i = partition(n => n % 2 == 0, items);
        i.should.equal(3);
    });
});
