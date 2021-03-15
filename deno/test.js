import {getRainbowStringFromObject} from './index.js';
import {getString} from './Alphabet.js';

getRainbowStringFromObject({
    formats: ['bold','blink','italic'],
    color: 'l',
    end: true,
    print: true,
    println: true,
    str: getString('#','Hello Deno',' ') 
})