const Rainbow = require('../');
const rainbow = new Rainbow();
const Alphabet = require('../src/Alphabet');
const alpha = new Alphabet();
const assert = require('assert');

rainbow.getRainbowStringFromObject({
    formats: ['bold','blink'],
    color: 'Dc',
    end: true,
    println: true,
    str: alpha.getString('#','RAINBOW JS',' ') 
})

describe('checking instance', ()=>{
    it('rainbow instance should have the predefined map data',()=>{
        assert.strictEqual(true, rainbow.colorsMap.size>=1);
    })
})

describe('function: checkFormat',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, rainbow.checkFormat(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, rainbow.checkFormat(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, rainbow.checkFormat('blink'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, rainbow.checkFormat('null'));
    })
})

describe('function: checkColor',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, rainbow.checkColor(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, rainbow.checkColor(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, rainbow.checkColor('Lw'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, rainbow.checkColor('null'));
    })
})

describe('function: checkBackground',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, rainbow.checkBackground(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, rainbow.checkBackground(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, rainbow.checkBackground('mgreen'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, rainbow.checkBackground('null'));
    })
})

describe('function: getColorIdFromMap',()=>{
    it('null check', ()=>{
        assert.strictEqual(null, rainbow.getColorIdFromMap(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getColorIdFromMap(''));
    })
    it('value check', ()=>{
        assert.strictEqual('100', rainbow.getColorIdFromMap('mgreen'));
    })
})

describe('function: getAvailableCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getAvailableCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getAvailableCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getAvailableCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[43m', rainbow.getAvailableCode('dorange'));
    })
})

describe('function: getFormatCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getFormatCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getFormatCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[3m', rainbow.getFormatCode('italic'));
    })
})

describe('function: getColorCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getColorCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getColorCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getColorCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[90m', rainbow.getColorCode('Dg'));
    })
})

describe('function: getBackgroundCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getBackgroundCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getBackgroundCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getBackgroundCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[43m', rainbow.getBackgroundCode('dorange'));
    })
})

describe('function: getFormatColorCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatColorCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getFormatColorCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getFormatColorCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;37m', rainbow.getFormatColorCode('bold', 'Lw'));
    })
})

describe('function: getFormatBgCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatBgCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getFormatBgCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getFormatBgCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;40m', rainbow.getFormatBgCode('bold', 'dgreen'));
    })
})

describe('function: getColorBgCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getColorBgCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getColorBgCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getColorBgCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[90;40m', rainbow.getColorBgCode('Dg', 'dgreen'));
    })
})

describe('function: getRainbowCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getRainbowCode(null, null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, rainbow.getRainbowCode('','', ''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, rainbow.getRainbowCode('hello','world' ,'three'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[0;99;40m', rainbow.getRainbowCode('reset', 'D','dgreen'));
    })
})

describe('function: getFormatString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getFormatString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted string', rainbow.getFormatString('hello','formatted string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[3mformatted string\u001b[0m', rainbow.getFormatString('italic','formatted string', true));
    })
})

describe('function: getColorString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getColorString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getColorString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('colored string', rainbow.getColorString('hello','colored string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[97mcolored string\u001b[0m', rainbow.getColorString('Dw','colored string', true));
    })
})

describe('function: getBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getBgString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getBgString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('string background', rainbow.getBgString('hello','string background',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[44mstring background\u001b[0m', rainbow.getBgString('lblue','string background', true));
    })
})

describe('function: getFormatColorString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatColorString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getFormatColorString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted color string', rainbow.getFormatColorString('hello','world','formatted color string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[4;91mformatted color string\u001b[0m', rainbow.getFormatColorString('underline','Lr','formatted color string', true));
    })
})

describe('function: getFormatBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getFormatBgString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getFormatBgString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted background string', rainbow.getFormatBgString('hello','world','formatted background string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[4;101mformatted background string\u001b[0m', rainbow.getFormatBgString('underline','lred','formatted background string', true));
    })
})

describe('function: getColorBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getColorBgString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getColorBgString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('colored background string', rainbow.getColorBgString('hello','world','colored background string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[99;101mcolored background string\u001b[0m', rainbow.getColorBgString('D','lred','colored background string', true));
    })
})

describe('function: getRainbowString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getRainbowString(null,null,null, null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', rainbow.getRainbowString('','','','', ''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('rainbowed string', rainbow.getRainbowString('hello','world','three','rainbowed string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;97;42mrainbowed string\u001b[0m', rainbow.getRainbowString('bold','Dw','lgreen','rainbowed string', true));
    })
})

describe('checking function: getRainbowStringFromObject', ()=>{
    it('null check',()=>{
        assert.strictEqual(null, rainbow.getRainbowStringFromObject({
            formats: null,
            color: null,
            background: null,
            str: null
        }));
    })
    it('empty check',()=>{
        assert.strictEqual(null, rainbow.getRainbowStringFromObject({
            formats: [],
            color: '',
            background: '',
            str: ''
        }));
    })
})