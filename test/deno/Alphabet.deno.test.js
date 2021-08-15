import { getString,printString } from "../../src/deno/Alphabet.js";
import { assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";
import {getRainbowStringFromObject} from '../../src/deno/index.js'

getRainbowStringFromObject({
    formats: ['bold','blink','italic'],
    color: 'l',
    end: true,
    println: true,
    str: getString('#','RAINBOW JS',' ')
})

Deno.test('function: getString null check', async ()=>{
    assertEquals(0, getString(null,null,null).length);
})

Deno.test('function: getString empty check', async ()=>{
    assertEquals(0, getString('','','').length);
})

Deno.test('function: getString wrong value', async ()=>{
    assertEquals(0, getString('#',['he'],' ').length);
})

Deno.test('function: getString right value', async ()=>{
    assertEquals('####  \n    # \n #### \n #  # \n #####', getString('#', 'a', ' ').join('\n'));
})

printString('#', 'Tests', '  ');
