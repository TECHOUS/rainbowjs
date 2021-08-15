import {checkFormat} from "../../src/deno/index.js";
import { assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";

Deno.test('function: checkFormat-null check',async ()=>{
    assertEquals(false, checkFormat(null));
})

Deno.test('function: checkFormat-empty check',async ()=>{
    assertEquals(false, checkFormat(''));
})

Deno.test('function: checkFormat-value check', async ()=>{
    assertEquals(true, checkFormat('blink'));
})

Deno.test('function: checkFormat-wrong value check', async ()=>{
    assertEquals(false, checkFormat('null'));
})