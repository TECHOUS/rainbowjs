const Alphabet = require('../src/Alphabet');
const assert = require('assert');

describe('testing alphabet lib', () => {
    it('function: getString null check', () => {
        assert.strictEqual(0, Alphabet.getString(null,null,null).length);
    });
    it('function: getString empty check', () => {
        assert.strictEqual(0, Alphabet.getString('','','').length);
    });
    it('function: getString wrong value', () => {
        assert.strictEqual(0, Alphabet.getString('#',['he'],' ').length);
    });
    it('function: getString right value', () => {
        assert.strictEqual('####  \n    # \n #### \n #  # \n #####', Alphabet.getString('#', 'a', ' ').join('\n'));
    });
});

Alphabet.printString('#', 'Tests', '  ');