const expect = require('chai').expect;
const sortByStrings = require('./Question1');

describe('sortByStrings function', () => {
    it('should return a string with the letters ordered by occurrence of the string in the second parameter', () => {
        expect(sortByStrings('weather', 'therapyw')).to.equal('theeraw');
    })
    it('returns a string with more letters than the second parameter', () => {
        expect(sortByStrings('good', 'odg')).to.equal('oodg');
    })
});