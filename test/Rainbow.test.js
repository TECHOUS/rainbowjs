const Rainbow = require('../src');
const assert = require('assert');

describe('function: checkFormat',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(false, Rainbow.checkFormat(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(false, Rainbow.checkFormat(''));
    })
    it('value check',async ()=>{
        assert.strictEqual(true, Rainbow.checkFormat('blink'));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(false, Rainbow.checkFormat('null'));
    })
})

describe('function: checkColor',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(false, Rainbow.checkColor(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(false, Rainbow.checkColor(''));
    })
    it('value check',async ()=>{
        assert.strictEqual(true, Rainbow.checkColor('Lw'));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(false, Rainbow.checkColor('null'));
    })
})

describe('function: checkBackground',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(false, Rainbow.checkBackground(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(false, Rainbow.checkBackground(''));
    })
    it('value check',async ()=>{
        assert.strictEqual(true, Rainbow.checkBackground('mgreen'));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(false, Rainbow.checkBackground('null'));
    })
})

describe('function: getColorIdFromMap',async ()=>{
    it('null check', async ()=>{
        assert.strictEqual(null, Rainbow.getColorIdFromMap(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorIdFromMap(''));
    })
    it('value check', async ()=>{
        assert.strictEqual('100', Rainbow.getColorIdFromMap('mgreen'));
    })
})

describe('function: getAvailableCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode(''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getAvailableCode('hello'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[43m', Rainbow.getAvailableCode('dorange'));
    })
})

describe('function: getFormatCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatCode(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatCode(''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatCode('hello'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[3m', Rainbow.getFormatCode('italic'));
    })
})

describe('function: getColorCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorCode(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorCode(''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorCode('hello'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[90m', Rainbow.getColorCode('Dg'));
    })
})

describe('function: getBackgroundCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode(null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode(''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getBackgroundCode('hello'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[43m', Rainbow.getBackgroundCode('dorange'));
    })
})

describe('function: getFormatColorCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode(null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode('',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorCode('hello','world'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[1;37m', Rainbow.getFormatColorCode('bold', 'Lw'));
    })
})

describe('function: getFormatBgCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode(null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode('',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgCode('hello','world'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[1;40m', Rainbow.getFormatBgCode('bold', 'dgreen'));
    })
})

describe('function: getColorBgCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode(null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode('',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorBgCode('hello','world'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[90;40m', Rainbow.getColorBgCode('Dg', 'dgreen'));
    })
})

describe('function: getRainbowCode',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode(null, null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode('','', ''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowCode('hello','world' ,'three'));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[0;99;40m', Rainbow.getRainbowCode('reset', 'D','dgreen'));
    })
})

describe('function: getFormatString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatString(null,null,null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getFormatString('','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('formatted string', Rainbow.getFormatString('hello','formatted string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[3mformatted string\u001b[0m', Rainbow.getFormatString('italic','formatted string', true));
    })
})

describe('function: getColorString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorString(null,null,null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getColorString('','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('colored string', Rainbow.getColorString('hello','colored string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[97mcolored string\u001b[0m', Rainbow.getColorString('Dw','colored string', true));
    })
})

describe('function: getBgString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getBgString(null,null,null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getBgString('','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('string background', Rainbow.getBgString('hello','string background',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[44mstring background\u001b[0m', Rainbow.getBgString('lblue','string background', true));
    })
})

describe('function: getFormatColorString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatColorString(null,null,null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getFormatColorString('','','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('formatted color string', Rainbow.getFormatColorString('hello','world','formatted color string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[4;91mformatted color string\u001b[0m', Rainbow.getFormatColorString('underline','Lr','formatted color string', true));
    })
})

describe('function: getFormatBgString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getFormatBgString(null,null,null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getFormatBgString('','','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('formatted background string', Rainbow.getFormatBgString('hello','world','formatted background string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[4;101mformatted background string\u001b[0m', Rainbow.getFormatBgString('underline','lred','formatted background string', true));
    })
})

describe('function: getColorBgString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getColorBgString(null,null,null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getColorBgString('','','',''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('colored background string', Rainbow.getColorBgString('hello','world','colored background string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[99;101mcolored background string\u001b[0m', Rainbow.getColorBgString('D','lred','colored background string', true));
    })
})

describe('function: getRainbowString',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowString(null,null,null, null, null));
    })
    it('empty check',async ()=>{
        assert.strictEqual('', Rainbow.getRainbowString('','','','', ''));
    })
    it('wrong value check',async ()=>{
        assert.strictEqual('rainbowed string', Rainbow.getRainbowString('hello','world','three','rainbowed string',false));
    })
    it('value check',async ()=>{
        assert.strictEqual('\u001b[1;97;42mrainbowed string\u001b[0m', Rainbow.getRainbowString('bold','Dw','lgreen','rainbowed string', true));
    })
})

describe('checking function: getRainbowStringFromObject',async ()=>{
    it('null check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: null,
            color: null,
            background: null,
            str: null
        }));
    })
    it('empty check',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: [],
            color: '',
            background: '',
            str: ''
        }));
    })
    it('wrong value check1',async ()=>{
        assert.strictEqual('\u001b[5mHello World', Rainbow.getRainbowStringFromObject({
            formats: ['blink','red'],
            color: '',
            background: '',
            str: 'Hello World'
        }))
    })
    it('wrong value check2',async ()=>{
        assert.strictEqual(null, Rainbow.getRainbowStringFromObject({
            formats: 'blink',
            color: '',
            background: '',
            str: 'Hello World'
        }))
    })
    it('wrong value check3',async ()=>{
        assert.strictEqual('\u001b[5m', Rainbow.getRainbowStringFromObject({
            formats: ['blink'],
            color: '',
            background: '',
            str: ''
        }))
    })
})