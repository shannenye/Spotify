const expect = require('chai').expect;
const changePossibilities = require('./Question3');

describe('changePossibilities function', () => {
    it('returns the number of possibilities to make change', () => {
        expect(changePossibilities(4, [1,2,3])).to.equal(4);
        expect(changePossibilities(10, [1,2,5])).to.equal(10);
    })
});