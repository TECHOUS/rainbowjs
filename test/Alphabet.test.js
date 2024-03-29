const Alphabet = require('../src/Alphabet');
const assert = require('assert');
const Rainbow = require("../src");

Rainbow.getRainbowStringFromObject({
    formats: ['bold','blink','italic'],
    color: 'l',
    end: true,
    println: true,
    str: Alphabet.getString('#','RAINBOW JS',' ')
})

describe('testing alphabet lib', async () => {
    it('function: getString null check', async () => {
        assert.strictEqual(0, Alphabet.getString(null,null,null).length);
    });
    it('function: getString empty check',async () => {
        assert.strictEqual(0, Alphabet.getString('','','').length);
    });
    it('function: getString wrong value', async () => {
        assert.strictEqual(0, Alphabet.getString('#',['he'],' ').length);
    });
    it('function: getString right value', async () => {
        assert.strictEqual('####  \n    # \n #### \n #  # \n #####', Alphabet.getString('#', 'a', ' ').join('\n'));
    });
});

Alphabet.printString('#', 'Tests', '  ');