//test cases

// inputs      expected outputs

// 3 3 -               0
// 3 3 +               6
// 3 3 /               1
// 3 3 *               9

// ""                  0

// 3 0 -               3

// 1 2 + 4 *           12

const chai = require("chai");
chai.should(); //or expect()

const polish = require('../interviewstylequestions/polish');

describe("Reverse Polish Calculator", ()=>{

    it("should do simple addition", ()=>{
        let result = polish("3 3 +");
        result.should.equal(6);
    })

    it("should do simple subtraction", ()=>{
        polish("3 3 -").should.equal(0);
    })

    it("should do simple division", ()=>{
        polish("3 3 /").should.equal(1);
    })

    it("should do simple multiplication", () => {
        polish("3 3 *").should.equal(9);
    })

});



