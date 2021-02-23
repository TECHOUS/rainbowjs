const Rainbow = require('../');
const Alphabet = require('../src/Alphabet');
const assert = require('assert');

Rainbow.getRainbowStringFromObject({
    formats: ['bold','blink'],
    color: 'Dc',
    end: true,
    println: true,
    str: Alphabet.getString('#','RAINBOW JS',' ') 
})

describe('function: checkFormat',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, Rainbow.checkFormat(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, Rainbow.checkFormat(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, Rainbow.checkFormat('blink'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, Rainbow.checkFormat('null'));
    })
})

describe('function: checkColor',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, Rainbow.checkColor(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, Rainbow.checkColor(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, Rainbow.checkColor('Lw'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, Rainbow.checkColor('null'));
    })
})

describe('function: checkBackground',()=>{
    it('null check', ()=>{
        assert.strictEqual(false, Rainbow.checkBackground(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(false, Rainbow.checkBackground(''));
    })
    it('value check', ()=>{
        assert.strictEqual(true, Rainbow.checkBackground('mgreen'));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(false, Rainbow.checkBackground('null'));
    })
})

describe('function: getColorIdFromMap',()=>{
    it('null check', ()=>{
        assert.strictEqual(null, Rainbow.getColorIdFromMap(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getColorIdFromMap(''));
    })
    it('value check', ()=>{
        assert.strictEqual('100', Rainbow.getColorIdFromMap('mgreen'));
    })
})

describe('function: getAvailableCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[43m', Rainbow.getAvailableCode('dorange'));
    })
})

describe('function: getFormatCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[3m', Rainbow.getFormatCode('italic'));
    })
})

describe('function: getColorCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getColorCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getColorCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getColorCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[90m', Rainbow.getColorCode('Dg'));
    })
})

describe('function: getBackgroundCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode(null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode(''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode('hello'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[43m', Rainbow.getBackgroundCode('dorange'));
    })
})

describe('function: getFormatColorCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;37m', Rainbow.getFormatColorCode('bold', 'Lw'));
    })
})

describe('function: getFormatBgCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;40m', Rainbow.getFormatBgCode('bold', 'dgreen'));
    })
})

describe('function: getColorBgCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode(null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode('',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode('hello','world'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[90;40m', Rainbow.getColorBgCode('Dg', 'dgreen'));
    })
})

describe('function: getRainbowCode',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode(null, null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode('','', ''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode('hello','world' ,'three'));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[0;99;40m', Rainbow.getRainbowCode('reset', 'D','dgreen'));
    })
})

describe('function: getFormatString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getFormatString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted string', Rainbow.getFormatString('hello','formatted string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[3mformatted string\u001b[0m', Rainbow.getFormatString('italic','formatted string', true));
    })
})

describe('function: getColorString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getColorString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getColorString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('colored string', Rainbow.getColorString('hello','colored string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[97mcolored string\u001b[0m', Rainbow.getColorString('Dw','colored string', true));
    })
})

describe('function: getBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getBgString(null,null,null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getBgString('','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('string background', Rainbow.getBgString('hello','string background',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[44mstring background\u001b[0m', Rainbow.getBgString('lblue','string background', true));
    })
})

describe('function: getFormatColorString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatColorString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getFormatColorString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted color string', Rainbow.getFormatColorString('hello','world','formatted color string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[4;91mformatted color string\u001b[0m', Rainbow.getFormatColorString('underline','Lr','formatted color string', true));
    })
})

describe('function: getFormatBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getFormatBgString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getFormatBgString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('formatted background string', Rainbow.getFormatBgString('hello','world','formatted background string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[4;101mformatted background string\u001b[0m', Rainbow.getFormatBgString('underline','lred','formatted background string', true));
    })
})

describe('function: getColorBgString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getColorBgString(null,null,null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getColorBgString('','','',''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('colored background string', Rainbow.getColorBgString('hello','world','colored background string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[99;101mcolored background string\u001b[0m', Rainbow.getColorBgString('D','lred','colored background string', true));
    })
})

describe('function: getRainbowString',()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getRainbowString(null,null,null, null, null));
    })
    it('empty check', ()=>{
        assert.strictEqual('', Rainbow.getRainbowString('','','','', ''));
    })
    it('wrong value check', ()=>{
        assert.strictEqual('rainbowed string', Rainbow.getRainbowString('hello','world','three','rainbowed string',false));
    })
    it('value check', ()=>{
        assert.strictEqual('\u001b[1;97;42mrainbowed string\u001b[0m', Rainbow.getRainbowString('bold','Dw','lgreen','rainbowed string', true));
    })
})

describe('checking function: getRainbowStringFromObject', ()=>{
    it('null check',()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: null,
            color: null,
            background: null,
            str: null
        }));
    })
    it('empty check',()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: [],
            color: '',
            background: '',
            str: ''
        }));
    })
    it('wrong value check1', ()=>{
        assert.strictEqual('\u001b[5mHello World', Rainbow.getRainbowStringFromObject({
            formats: ['blink','red'],
            color: '',
            background: '',
            str: 'Hello World'
        }))
    })
    it('wrong value check2', ()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: 'blink',
            color: '',
            background: '',
            str: 'Hello World'
        }))
    })
    it('wrong value check3', ()=>{
        assert.strictEqual('\u001b[5m', Rainbow.getRainbowStringFromObject({
            formats: ['blink'],
            color: '',
            background: '',
            str: ''
        }))
    })
})