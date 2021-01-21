const Rainbow = require('../src/Rainbow');
const rainbow = new Rainbow();

console.log(rainbow.getFormat('bold')+rainbow.getRainbowString('blink','b','lemon','Hello World',true));
