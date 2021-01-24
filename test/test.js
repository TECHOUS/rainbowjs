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

describe('function: get',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.get(null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.get(''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.get('hello'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[43m', rainbow.get('dorange'));
    })
})

describe('function: getFormat',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormat(null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getFormat(''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getFormat('hello'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[3m', rainbow.getFormat('italic'));
    })
})

describe('function: getColor',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getColor(null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getColor(''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getColor('hello'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[90m', rainbow.getColor('Dg'));
    })
})

describe('function: getBG',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getBG(null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getBG(''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getBG('hello'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[43m', rainbow.getBG('dorange'));
    })
})

describe('function: getFormatColor',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormatColor(null, null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getFormatColor('',''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getFormatColor('hello','world'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[1;37m', rainbow.getFormatColor('bold', 'Lw'));
    })
})

describe('function: getFormatBG',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormatBG(null, null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getFormatBG('',''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getFormatBG('hello','world'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[1;40m', rainbow.getFormatBG('bold', 'dgreen'));
    })
})

describe('function: getColorBG',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getColorBG(null, null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getColorBG('',''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getColorBG('hello','world'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[90;40m', rainbow.getColorBG('Dg', 'dgreen'));
    })
})

describe('function: getRainbow',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getRainbow(null, null, null));
    })
    it('empty check', ()=>{
        assert.equal(null, rainbow.getRainbow('','', ''));
    })
    it('wrong value check', ()=>{
        assert.equal(null, rainbow.getRainbow('hello','world' ,'three'));
    })
    it('value check', ()=>{
        assert.equal('\u001b[0;99;40m', rainbow.getRainbow('reset', 'D','dgreen'));
    })
})

describe('function: getFormatString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormatString(null,null,null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getFormatString('','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('formatted string', rainbow.getFormatString('hello','formatted string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[3mformatted string\u001b[0m', rainbow.getFormatString('italic','formatted string', true));
    })
})

describe('function: getColorString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getColorString(null,null,null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getColorString('','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('colored string', rainbow.getColorString('hello','colored string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[97mcolored string\u001b[0m', rainbow.getColorString('Dw','colored string', true));
    })
})

describe('function: getBGString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getBGString(null,null,null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getBGString('','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('string background', rainbow.getBGString('hello','string background',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[44mstring background\u001b[0m', rainbow.getBGString('lblue','string background', true));
    })
})

describe('function: getFormatColorString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormatColorString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getFormatColorString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('formatted color string', rainbow.getFormatColorString('hello','world','formatted color string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[4;91mformatted color string\u001b[0m', rainbow.getFormatColorString('underline','Lr','formatted color string', true));
    })
})

describe('function: getFormatBGString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getFormatBGString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getFormatBGString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('formatted background string', rainbow.getFormatBGString('hello','world','formatted background string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[4;101mformatted background string\u001b[0m', rainbow.getFormatBGString('underline','lred','formatted background string', true));
    })
})

describe('function: getColorBGString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getColorBGString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getColorBGString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.equal('colored background string', rainbow.getColorBGString('hello','world','colored background string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[99;101mcolored background string\u001b[0m', rainbow.getColorBGString('D','lred','colored background string', true));
    })
})

describe('function: getRainbowString',()=>{
    it('null check',()=>{
        assert.equal(null, rainbow.getRainbowString(null,null,null, null, null));
    })
    it('empty check', ()=>{
        assert.equal('', rainbow.getRainbowString('','','','', ''));
    })
    it('wrong value check', ()=>{
        assert.equal('rainbowed string', rainbow.getRainbowString('hello','world','three','rainbowed string',false));
    })
    it('value check', ()=>{
        assert.equal('\u001b[1;97;42mrainbowed string\u001b[0m', rainbow.getRainbowString('bold','Dw','lgreen','rainbowed string', true));
    })
})