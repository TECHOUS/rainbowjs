import {
    checkFormat,
    checkColor,
    checkBackground,
    getColorIdFromMap,
    getAvailableCode,
    getFormatCode,
    getColorCode,
    getBackgroundCode,
    getFormatColorCode,
    getFormatBgCode,
    getColorBgCode,
    getRainbowCode,
    getFormatString,
    getColorString,
    getBgString,
    getFormatColorString, getFormatBgString, getColorBgString, getRainbowString, getRainbowStringFromObject
} from "../../src/deno/index.js";
import { assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";

Deno.test('function: checkFormat -> null check',async ()=>{
    assertEquals(false, checkFormat(null));
})

Deno.test('function: checkFormat -> empty check',async ()=>{
    assertEquals(false, checkFormat(''));
})

Deno.test('function: checkFormat -> value check', async ()=>{
    assertEquals(true, checkFormat('blink'));
})

Deno.test('function: checkFormat -> wrong value check', async ()=>{
    assertEquals(false, checkFormat('null'));
})

Deno.test('function: checkColor -> null check',async ()=>{
    assertEquals(false, checkColor(null));
})

Deno.test('function: checkColor -> empty check',async ()=>{
    assertEquals(false, checkColor(''));
})

Deno.test('function: checkColor -> value check',async ()=>{
    assertEquals(true, checkColor('Lw'));
})

Deno.test('function: checkColor -> wrong value check',async ()=>{
    assertEquals(false, checkColor('null'));
})

Deno.test('function: checkBackground -> null check', async ()=>{
    assertEquals(false, checkBackground(null))
})

Deno.test('function: checkBackground -> empty check', async ()=>{
    assertEquals(false, checkBackground(''))
})

Deno.test('function: checkBackground -> value check', async ()=>{
    assertEquals(true, checkBackground('mgreen'))
})

Deno.test('function: checkBackground -> wrong value check', async ()=>{
    assertEquals(false, checkBackground('null'))
})

Deno.test('function: getColorIdFromMap -> null check',async ()=>{
    assertEquals(null, getColorIdFromMap(null))
})

Deno.test('function: getColorIdFromMap -> empty check',async ()=>{
    assertEquals(null, getColorIdFromMap(''))
})

Deno.test('function: getColorIdFromMap -> value check',async ()=>{
    assertEquals('100', getColorIdFromMap('mgreen'))
})

Deno.test('function: getAvailableCode -> null check',async ()=>{
    assertEquals(null, getAvailableCode(null))
})

Deno.test('function: getAvailableCode -> empty check',async ()=>{
    assertEquals(null, getAvailableCode(''))
})

Deno.test('function: getAvailableCode -> wrong value check',async ()=>{
    assertEquals(null, getAvailableCode('hello'))
})

Deno.test('function: getAvailableCode -> value check',async ()=>{
    assertEquals('\u001b[43m', getAvailableCode('dorange'))
})

Deno.test('function: getFormatCode -> null check',async ()=>{
    assertEquals(null, getFormatCode(null))
})

Deno.test('function: getFormatCode -> empty check',async ()=>{
    assertEquals(null, getFormatCode(''))
})

Deno.test('function: getFormatCode -> wrong value check',async ()=>{
    assertEquals(null, getFormatCode('hello'))
})

Deno.test('function: getFormatCode -> value check',async ()=>{
    assertEquals('\u001b[3m', getFormatCode('italic'))
})

Deno.test('function: getColorCode -> null check',async ()=>{
    assertEquals(null, getColorCode(null))
})

Deno.test('function: getColorCode -> empty check',async ()=>{
    assertEquals(null, getColorCode(''))
})

Deno.test('function: getColorCode -> wrong value check',async ()=>{
    assertEquals(null, getColorCode('hello'))
})

Deno.test('function: getColorCode -> value check',async ()=>{
    assertEquals('\u001b[90m', getColorCode('Dg'))
})

Deno.test('function: getBackgroundCode -> null check',async ()=>{
    assertEquals(null, getBackgroundCode(null))
})

Deno.test('function: getBackgroundCode -> empty check',async ()=>{
    assertEquals(null, getBackgroundCode(''))
})

Deno.test('function: getBackgroundCode -> wrong value check',async ()=>{
    assertEquals(null, getBackgroundCode('hello'))
})

Deno.test('function: getBackgroundCode -> value check',async ()=>{
    assertEquals('\u001b[43m', getBackgroundCode('dorange'))
})

Deno.test('function: getFormatColorCode -> null check',async ()=>{
    assertEquals(null, getFormatColorCode(null, null))
})

Deno.test('function: getFormatColorCode -> empty check',async ()=>{
    assertEquals(null, getFormatColorCode('', ''))
})

Deno.test('function: getFormatColorCode -> wrong value check',async ()=>{
    assertEquals(null, getFormatColorCode('hello', 'world'))
})

Deno.test('function: getFormatColorCode -> value check',async ()=>{
    assertEquals('\u001b[1;37m', getFormatColorCode('bold','Lw'))
})

Deno.test('function: getFormatBgCode -> null check', async ()=>{
    assertEquals(null, getFormatBgCode(null, null))
})

Deno.test('function: getFormatBgCode -> empty check', async ()=>{
    assertEquals(null, getFormatBgCode('', ''))
})

Deno.test('function: getFormatBgCode -> wrong value check', async ()=>{
    assertEquals(null, getFormatBgCode('hello', 'world'))
})

Deno.test('function: getFormatBgCode -> value check', async ()=>{
    assertEquals('\u001b[1;40m', getFormatBgCode('bold', 'dgreen'))
})

Deno.test('function: getColorBgCode -> null check',async ()=>{
    assertEquals(null, getColorBgCode(null, null))
})

Deno.test('function: getColorBgCode -> empty check',async ()=>{
    assertEquals(null, getColorBgCode(null, null))
})

Deno.test('function: getColorBgCode -> wrong value check',async ()=>{
    assertEquals(null, getColorBgCode('hello', 'world'))
})

Deno.test('function: getColorBgCode -> value check',async ()=>{
    assertEquals('\u001b[90;40m', getColorBgCode('Dg', 'dgreen'))
})

Deno.test('function: getRainbowCode -> null check', async ()=>{
    assertEquals(null, getRainbowCode(null, null, null))
})

Deno.test('function: getRainbowCode -> empty check', async ()=>{
    assertEquals(null, getRainbowCode('', '', ''))
})

Deno.test('function: getRainbowCode -> wrong value check', async ()=>{
    assertEquals(null, getRainbowCode('hello', 'world', 'three'))
})

Deno.test('function: getRainbowCode -> value check', async ()=>{
    assertEquals('\u001b[0;99;40m', getRainbowCode('reset', 'D', 'dgreen'))
})

Deno.test('function: getFormatString -> null check', async ()=>{
    assertEquals(null, getFormatString(null, null, null))
})

Deno.test('function: getFormatString -> empty check', async ()=>{
    assertEquals('', getFormatString('', '', ''))
})

Deno.test('function: getFormatString -> wrong value check', async ()=>{
    assertEquals('formatted string', getFormatString('hello', 'formatted string', false))
})

Deno.test('function: getFormatString -> value check', async ()=>{
    assertEquals('\u001b[3mformatted string\u001b[0m', getFormatString('italic', 'formatted string', true))
})

Deno.test('function: getColorString -> null check', async ()=>{
    assertEquals(null, getColorString(null, null, null))
})

Deno.test('function: getColorString -> empty check', async ()=>{
    assertEquals('', getColorString('', '', ''))
})

Deno.test('function: getColorString -> wrong value check', async ()=>{
    assertEquals('colored string', getColorString('hello','colored string', false))
})

Deno.test('function: getColorString -> value check', async ()=>{
    assertEquals('\u001b[97mcolored string\u001b[0m', getColorString('Dw','colored string', true))
})

Deno.test('function: getBgString -> null check', async ()=>{
    assertEquals(null, getBgString(null, null, null))
})

Deno.test('function: getBgString -> empty check', async ()=>{
    assertEquals('', getBgString('', '', ''))
})

Deno.test('function: getBgString -> wrong value check', async ()=>{
    assertEquals('string background', getBgString('hello', 'string background', false))
})

Deno.test('function: getBgString -> value check', async ()=>{
    assertEquals('\u001b[44mstring background\u001b[0m', getBgString('lblue','string background', true))
})

Deno.test('function: getFormatColorString -> null check',async ()=>{
    assertEquals(null, getFormatColorString(null, null, null))
})

Deno.test('function: getFormatColorString -> empty check',async ()=>{
    assertEquals('', getFormatColorString('', '', ''))
})

Deno.test('function: getFormatColorString -> wrong value check',async ()=>{
    assertEquals('formatted color string', getFormatColorString('hello','world','formatted color string',false))
})

Deno.test('function: getFormatColorString -> value check',async ()=>{
    assertEquals('\u001b[4;91mformatted color string\u001b[0m', getFormatColorString('underline','Lr','formatted color string', true))
})

Deno.test('function: getFormatBgString -> null check', async ()=>{
    assertEquals(null, getFormatBgString(null, null, null, null))
})

Deno.test('function: getFormatBgString -> empty check', async ()=>{
    assertEquals('', getFormatBgString('', '', '', ''))
})

Deno.test('function: getFormatBgString -> wrong value check', async ()=>{
    assertEquals('formatted background string', getFormatBgString('hello','world','formatted background string',false))
})

Deno.test('function: getFormatBgString -> value check', async ()=>{
    assertEquals('\u001b[4;101mformatted background string\u001b[0m', getFormatBgString('underline','lred','formatted background string', true))
})

Deno.test('function: getColorBgString -> null check', async ()=>{
    assertEquals(null, getColorBgString(null, null, null, null))
})

Deno.test('function: getColorBgString -> empty check', async ()=>{
    assertEquals('', getColorBgString('', '', '', ''))
})

Deno.test('function: getColorBgString -> wrong value check', async ()=>{
    assertEquals('colored background string', getColorBgString('hello','world','colored background string',false))
})

Deno.test('function: getColorBgString -> value check', async ()=>{
    assertEquals('\u001b[99;101mcolored background string\u001b[0m', getColorBgString('D','lred','colored background string', true))
})

Deno.test('function: getRainbowString -> null check', async ()=>{
    assertEquals(null, getRainbowString(null, null, null ,null, null))
})

Deno.test('function: getRainbowString -> empty check', async ()=>{
    assertEquals('', getRainbowString('', '', '' ,'', ''))
})

Deno.test('function: getRainbowString -> wrong value check', async ()=>{
    assertEquals('rainbowed string', getRainbowString('hello','world','three','rainbowed string',false))
})

Deno.test('function: getRainbowString -> value check', async ()=>{
    assertEquals('\u001b[1;97;42mrainbowed string\u001b[0m', getRainbowString('bold','Dw','lgreen','rainbowed string', true))
})

Deno.test('function: getRainbowStringFromObject -> null check',async ()=>{
    assertEquals(null, getRainbowStringFromObject({
        formats: null,
        color: null,
        background: null,
        str: null
    }))
})

Deno.test('function: getRainbowStringFromObject -> empty check',async ()=>{
    assertEquals(null, getRainbowStringFromObject({
        formats: [],
        color: '',
        background: '',
        str: ''
    }))
})

Deno.test('function: getRainbowStringFromObject -> value check1',async ()=>{
    assertEquals('\u001b[5mHello World', getRainbowStringFromObject({
        formats: ['blink','red'],
        color: '',
        background: '',
        str: 'Hello World'
    }))
})

Deno.test('function: getRainbowStringFromObject -> value check2',async ()=>{
    assertEquals(null, getRainbowStringFromObject({
        formats: 'blink',
        color: '',
        background: '',
        str: 'Hello World'
    }))
})

Deno.test('function: getRainbowStringFromObject -> value check3',async ()=>{
    assertEquals('\u001b[5m', getRainbowStringFromObject({
        formats: ['blink'],
        color: '',
        background: '',
        str: ''
    }))
})