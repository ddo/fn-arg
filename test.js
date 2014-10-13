var expect = require('chai').expect;

var Args = require('./');

describe("fn-arg", function() {
    function testing(a, b, c, d, e) {
        var args = Args({
            2: ['a', 'e'],
            3: ['a', 'b', 'e'],
            4: ['a', 'b', 'c', 'e']
        });

        return args;
    }

    it("1 in 5 params", function() {
        expect(testing('a_val')).to.not.be.ok;
    });

    it("2 in 5 params", function() {
        expect(testing('a_val', 'e_val')).to.be.eql({a: 'a_val', e: 'e_val'});
    });

    it("3 in 5 params", function() {
        expect(testing('a_val', 'b_val', 'e_val')).to.be.eql({ a: 'a_val', b: 'b_val', e: 'e_val' });
    });

    it("4 in 5 params", function() {
        expect(testing('a_val', 'b_val', 'c_val', 'e_val')).to.be.eql({ a: 'a_val', b: 'b_val', c: 'c_val', e: 'e_val' });
    });
});
