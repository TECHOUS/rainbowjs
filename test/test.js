const Rainbow = require('../src/Rainbow');
const rainbow = new Rainbow();
const assert = require('assert')

describe('checking instance', ()=>{
    it('rainbow instance should have the predefined map data',()=>{
        assert.equal(true, rainbow.Rain.size>=1);
    })
})

describe('function: checkFormat',()=>{
    it('null check', ()=>{
        assert.equal(false, rainbow.checkFormat(null));
    })
    it('empty check', ()=>{
        assert.equal(false, rainbow.checkFormat(''));
    })
    it('value check', ()=>{
        assert.equal(true, rainbow.checkFormat('blink'));
    })
    it('wrong value check', ()=>{
        assert.equal(false, rainbow.checkFormat('null'));
    })
})

describe('function: checkColor',()=>{
    it('null check', ()=>{
        assert.equal(false, rainbow.checkColor(null));
    })
    it('empty check', ()=>{
        assert.equal(false, rainbow.checkColor(''));
    })
    it('value check', ()=>{
        assert.equal(true, rainbow.checkColor('Lw'));
    })
    it('wrong value check', ()=>{
        assert.equal(false, rainbow.checkColor('null'));
    })
})

describe('function: checkBG',()=>{
    it('null check', ()=>{
        assert.equal(false, rainbow.checkBG(null));
    })
    it('empty check', ()=>{
        assert.equal(false, rainbow.checkBG(''));
    })
    it('value check', ()=>{
        assert.equal(true, rainbow.checkBG('mgreen'));
    })
    it('wrong value check', ()=>{
        assert.equal(false, rainbow.checkBG('null'));
    })
})

describe('function: getRain',()=>{
    it('null check', ()=>{
        assert.equal(null, rainbow.getRain(null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getRain(''));
    })
    it('value check', ()=>{
        assert.equal('100', rainbow.getRain('mgreen'));
    })
})