const expect = require('chai').expect;
const decodeString = require('./Question2');

describe('decodeString function', () => {
    it('the string inside the square brackets should be repeated by the number appearing outside the brackets', () => {
        expect(decodeString('4[ab]')).to.equal('abababab');
        expect(decodeString('2[abc]3[cd]1[ef]')).to.equal('abcabccdcdcdef');
    })
    it('returns a decoded string nested inside brackets', () => {
        expect(decodeString('2[b3[a]]')).to.equal('baaabaaa');
    })
});
