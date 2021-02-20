module.exports = class Alphabet {
    alphabetsMap = new Map();

    getGroup(char, noOfTimes){
        let result = '';
        for(let i=0;i<noOfTimes;i++){
            result += char;
        }
        return result;
    }

    getA = (char)=>([
        `    ${char}    `,
        `   ${char} ${char}   `,
        `  ${this.getGroup(char,5)}  `,
        ` ${char}     ${char} `,
        `${char}       ${char}`
    ])

    getB = (char) => ([
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `,
    ])

    getC = (char) => ([
        ` ${this.getGroup(char,3)} `,
        `${char}   ${char}`,
        `${char}    `,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `
    ])

    getD = (char) => ([
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `
    ])

    getE = (char) => ([
        `${this.getGroup(char,5)}`,
        `${char}    `,
        `${this.getGroup(char,4)} `,
        `${char}    `,
        `${this.getGroup(char,5)}`,
    ])

    getF = (char) => ([
        `${this.getGroup(char,5)}`,
        `${char}    `,
        `${this.getGroup(char,4)} `,
        `${char}    `,
        `${char}    `
    ])

    getG = (char) => ([
        ` ${this.getGroup(char,4)}`,
        `${char}    `,
        `${char}  ${this.getGroup(char,2)}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `,
    ])

    getH = (char) => ([
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${this.getGroup(char,5)}`,
        `${char}   ${char}`,
        `${char}   ${char}`,
    ])

    getI = (char) => ([
        `${this.getGroup(char, 5)}`,
        `  ${char}  `,
        `  ${char}  `,
        `  ${char}  `,
        `${this.getGroup(char, 5)}`,
    ])

    getJ = (char) => ([
        `${this.getGroup(char, 5)}`,
        `   ${char} `,
        `   ${char} `,
        `${char}  ${char} `,
        ` ${this.getGroup(char,2)}  `
    ])

    getK = (char) => ([
        `${char}   ${char}`,
        `${char}  ${char} `,
        `${this.getGroup(char,3)}  `,
        `${char}  ${char} `,
        `${char}   ${char}`
    ])

    getL = (char) => ([
        `${char}    `,
        `${char}    `,
        `${char}    `,
        `${char}    `,
        `${this.getGroup(char,5)}`
    ])

    getM = (char) => ([
        `${char}   ${char}`,
        `${this.getGroup(char,2)} ${this.getGroup(char,2)}`,
        `${char} ${char} ${char}`,
        `${char}   ${char}`,
        `${char}   ${char}`
    ])

    getN = (char) => ([
        `${char}   ${char}`,
        `${this.getGroup(char,2)}  ${char}`,
        `${char} ${char} ${char}`,
        `${char}  ${this.getGroup(char,2)}`,
        `${char}   ${char}`
    ])

    getO = (char) => ([
        ` ${this.getGroup(char,3)} `,
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `,
    ])

    getP = (char) => ([
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `,
        `${char}    `,
        `${char}    `
    ])

    getQ = (char) => ([
        `${this.getGroup(char,5)}  `,
        `${char}   ${char}  `,
        `${char} ${char} ${char}  `,
        `${char}   ${char}  `,
        `${this.getGroup(char,5)} ${char}`
    ])

    getR = (char) => ([
        `${this.getGroup(char,5)}`,
        `${char}   ${char}`,
        `${this.getGroup(char,5)}`,
        `${char}  ${char} `,
        `${char}   ${char}`
    ])

    getS = (char) => ([
        ` ${this.getGroup(char,4)}`,
        `${char}    `,
        ` ${this.getGroup(char,4)}`,
        `    ${char}`,
        `${this.getGroup(char,4)} `
    ])

    getT = (char) => ([
        `${this.getGroup(char,5)}`,
        `  ${char}  `,
        `  ${char}  `,
        `  ${char}  `,
        `  ${char}  `
    ])

    getU = (char) => ([
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `
    ])

    getV = (char) => ([
        `${char}       ${char}`,
        ` ${char}     ${char} `,
        `  ${char}   ${char}  `,
        `   ${char} ${char}   `,
        `    ${char}    `
    ])

    getW = (char) => ([
        `${char}   ${char}`,
        `${char}   ${char}`,
        `${char} ${char} ${char}`,
        `${this.getGroup(char,2)} ${this.getGroup(char,2)}`,
        `${char}   ${char}`
    ]) 

    getX = (char) => ([
        `${char}   ${char}`,
        ` ${char} ${char} `,
        `  ${char}  `,
        ` ${char} ${char} `,
        `${char}   ${char}`
    ])

    getY = (char) => ([
        `${char}   ${char}`,
        ` ${char} ${char} `,
        `  ${char}  `,
        `  ${char}  `,
        `  ${char}  `
    ])

    getZ = (char) => ([
        `${this.getGroup(char,5)}`,
        `   ${char} `,
        `  ${char}  `,
        ` ${char}   `,
        `${this.getGroup(char,5)}`
    ])

    getSmallA = (char) => ([
        `${this.getGroup(char,4)}  `,
        `    ${char} `,
        ` ${this.getGroup(char,4)} `,
        ` ${char}  ${char} `,
        ` ${this.getGroup(char,5)}`
    ])

    getSmallB = (char) => ([
        `${char}    `,
        `${char}    `,
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `
    ])

    getSmallC = (char) => ([
        `     `,
        `     `,
        ` ${this.getGroup(char,4)}`,
        `${char}    `,
        ` ${this.getGroup(char,4)}`
    ])

    getSmallD = (char) => ([
        `    ${char}`,
        `    ${char}`,
        ` ${this.getGroup(char,4)}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,4)}`
    ])

    getSmallE = (char) => ([
        ` ${this.getGroup(char,3)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,5)}`,
        `${char}    `,
        ` ${this.getGroup(char,4)}`
    ])

    getSmallF = (char) => ([
        `   ${this.getGroup(char,2)}`,
        `  ${char}  `,
        `${this.getGroup(char,5)}`,
        `  ${char}  `,
        `  ${char}  `
    ])

    getSmallG = (char) => ([
        ` ${this.getGroup(char,4)}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,4)}`,
        `    ${char}`,
        `${this.getGroup(char,4)} `
    ])

    getSmallH = (char) =>([
        `${char}    `,
        `${char}    `,
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${char}   ${char}`
    ])

    getSmallI = (char) => ([
        ` ${char} `,
        `   `,
        ` ${char} `,
        ` ${char} `,
        ` ${char} `
    ])

    getSmallJ = (char) => ([
        `  ${char}`,
        ` ${this.getGroup(char,2)}`,
        `${char} ${char}`,
        `  ${char}`,
        `${this.getGroup(char,2)} `
    ])

    getSmallK = (char)=>([
        `${char}  ${char}`,
        `${char} ${char} `,
        `${this.getGroup(char,2)}  `,
        `${char} ${char} `,
        `${char}  ${char}`
    ])

    getSmallL = (char) => ([
        `${this.getGroup(char,2)} `,
        ` ${char} `,
        ` ${char} `,
        ` ${char} `,
        ` ${this.getGroup(char,2)}`
    ])

    getSmallM = (char) => ([
        `     `,
        `     `,
        ` ${this.getGroup(char,3)} `,
        `${char} ${char} ${char}`,
        `${char} ${char} ${char}`
    ])

    getSmallN = (char) => ([
        `    `,
        `    `,
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        `${char}  ${char}`
    ])

    getSmallO = (char) => ([
        `     `,
        `     `,
        ` ${this.getGroup(char,3)} `,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `
    ])

    getSmallP = (char) => ([
        `     `,
        `${this.getGroup(char,4)} `,
        `${char}   ${char}`,
        `${this.getGroup(char,4)} `,
        `${char}    `
    ])

    // q
    getSmallQ = (char) => ([
        `     `,
        ` ${this.getGroup(char,4)}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,4)}`,
        `    ${char}`
    ])

    // r
    getSmallR = (char) => ([
        `   `,
        ` ${this.getGroup(char,2)}`,
        `${char}  `,
        `${char}  `,
        `${char}  `
    ])

    // s
    getSmallS = (char) => ([
        ` ${this.getGroup(char,2)}`,
        `${char}  `,
        ` ${char} `,
        `  ${char}`,
        `${this.getGroup(char,2)} `
    ])

    // t
    getSmallT = (char) => ([
        ` ${char} `,
        `${this.getGroup(char,3)}`,
        ` ${char} `,
        ` ${char} `,
        ` ${this.getGroup(char,2)}`
    ])

    // u
    getSmallU = (char) => ([
        `     `,
        `     `,
        `${char}   ${char}`,
        `${char}   ${char}`,
        ` ${this.getGroup(char,3)} `
    ])

    getSmallV = (char) => ([
        `     `,
        `     `,
        `${char}   ${char}`,
        ` ${char} ${char} `,
        `  ${char}  `
    ])

    // w
    getSmallW = (char) => ([
        `       `,
        `       `,
        `${char}     ${char}`,
        ` ${char} ${char} ${char} `,
        `  ${char} ${char}  `
    ])

    // x
    getSmallX = (char) => ([
        `   `,
        `   `,
        `${char} ${char}`,
        ` ${char} `,
        `${char} ${char}`
    ])

    // y
    getSmallY = (char) => ([
        `     `,
        `${char}   ${char}`,
        ` ${char} ${char} `,
        `  ${char}  `,
        `${this.getGroup(char,3)}  `
    ])

    //z
    getSmallZ = (char) => ([
        `    `,
        `${this.getGroup(char,4)}`,
        `  ${char} `,
        ` ${char}  `,
        `${this.getGroup(char,4)}`
    ])

    getZero = (char) => ([
        `${this.getGroup(char,3)}`,
        `${char} ${char}`,
        `${char} ${char}`,
        `${char} ${char}`,
        `${this.getGroup(char,3)}`
    ])

    getOne = (char) => ([
        ` ${char} `,
        `${this.getGroup(char,2)} `,
        ` ${char} `,
        ` ${char} `,
        `${this.getGroup(char,3)}`
    ])

    getTwo = (char) => ([
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        `  ${char} `,
        ` ${char}  `,
        `${this.getGroup(char,4)}`
    ])

    getThree = (char) => ([
        `${this.getGroup(char,4)}`,
        `   ${char}`,
        `  ${char} `,
        `${char}  ${char}`,
        ` ${this.getGroup(char,2)} `
    ])

    getFour = (char) => ([
        `${char}  ${char}`,
        `${char}  ${char}`,
        `${this.getGroup(char,4)}`,
        `   ${char}`,
        `   ${char}`
    ])

    getFive = (char) => ([
        `${this.getGroup(char,4)}`,
        `${char}   `,
        `${this.getGroup(char,3)} `,
        `   ${char}`,
        `${this.getGroup(char,3)} `
    ])

    getSix = (char) => ([
        ` ${this.getGroup(char,3)}`,
        `${char}   `,
        `${this.getGroup(char,3)} `,
        `${char}  ${char}`,
        ` ${this.getGroup(char,2)} `
    ])

    getSeven = (char) => ([
        `${this.getGroup(char,4)}`,
        `   ${char}`,
        `  ${char} `,
        ` ${char}  `,
        `${char}   `
    ])
    
    getEight = (char) => ([
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        ` ${this.getGroup(char,2)} `
    ])

    getNine = (char) => ([
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        ` ${this.getGroup(char,3)}`,
        `   ${char}`,
        `${this.getGroup(char,3)} `
    ])

    getPlus = (char) => ([
        `   `,
        ` ${char} `,
        `${this.getGroup(char,3)}`,
        ` ${char} `,
        `   `
    ])

    getMinus = (char) => ([
        `   `,
        `   `,
        `${this.getGroup(char,3)}`,
        `   `,
        `   `
    ])

    getExclaimation = (char) => ([
        `${char}`,
        `${char}`,
        `${char}`,
        ` `,
        `${char}`
    ])

    getAtTheRate = (char) => ([
        `${this.getGroup(char,5)}`,
        `${char}  ${this.getGroup(char,2)}`,
        `${char} ${char} ${char}`,
        `${char}  ${this.getGroup(char,2)}`,
        `${this.getGroup(char,4)} `
    ])

    getHash = (char) => ([
        ` ${char} ${char} `,
        `${this.getGroup(char,5)}`,
        ` ${char} ${char} `,
        `${this.getGroup(char,5)}`,
        ` ${char} ${char} `
    ])

    getDollar = (char) => ([
        ` ${this.getGroup(char,4)}`,
        `${char} ${char}  `,
        ` ${this.getGroup(char,4)}`,
        `  ${char} ${char}`,
        `${this.getGroup(char,4)} `
    ])

    getPercentage = (char) => ([
        `    ${char}`,
        `${char}  ${char} `,
        `  ${char}  `,
        ` ${char}  ${char}`,
        `${char}    `
    ])

    getTopCap = (char) => ([
        ` ${char} `,
        `${char} ${char}`,
        `   `,
        `   `,
        `   `
    ])

    getAnd = (char)=>([
        `${this.getGroup(char,4)} `,
        `${char}  ${char} `,
        ` ${this.getGroup(char,2)} ${char}`,
        `${char}  ${char} `,
        `${this.getGroup(char,3)} ${char}`
    ])

    getStar = (char) => ([
        `  ${char}  `,
        `${char} ${char} ${char}`,
        ` ${char} ${char} `,
        `     `,
        `     `
    ])

    getUnderscore = (char) => ([
        `     `,
        `     `,
        `     `,
        `     `,
        `${this.getGroup(char,5)}`
    ])

    // =
    getEqualTo = (char) => ([
        `     `,
        `${this.getGroup(char,5)}`,
        `     `,
        `${this.getGroup(char,5)}`,
        `     `
    ])

    getLeftCurlyBrace = (char) => ([
        ` ${this.getGroup(char,2)}`,
        ` ${char} `,
        `${char}  `,
        ` ${char} `,
        ` ${this.getGroup(char,2)}`
    ])

    getRightCurlyBrace = (char) => ([
        `${this.getGroup(char,2)} `,
        ` ${char} `,
        `  ${char}`,
        ` ${char} `,
        `${this.getGroup(char,2)} `
    ])

    getLeftCircleBrace = (char) => ([
        ` ${char}`,
        `${char} `,
        `${char} `,
        `${char} `,
        ` ${char}`
    ])

    getRightCircleBrace = (char) => ([
        `${char} `,
        ` ${char}`,
        ` ${char}`,
        ` ${char}`,
        `${char} `
    ])

    getDoubleQuotes = (char) => ([
        `${char} ${char}`,
        `${char} ${char}`,
        `   `,
        `   `,
        `   `
    ])

    getSingleQuote = (char) => ([
        `${char}`,
        `${char}`,
        ` `,
        ` `,
        ` `
    ])

    getLessThan = (char) => ([
        `   `,
        `   `,
        `  ${char}`,
        `${char}  `,
        `  ${char}`
    ])

    greaterThan = (char) => ([
        `   `,
        `   `,
        `${char}  `,
        `  ${char}`,
        `${char}  `
    ])

    getComma = (char) => ([
        `  `,
        `  `,
        ` ${char}`,
        ` ${char}`,
        `${char} `
    ])

    getFullStop = (char) => ([
        ` `,
        ` `,
        ` `,
        ` `,
        `${char}`
    ])

    // ?
    getQuestionMark = (char)=>([
        ` ${this.getGroup(char,2)} `,
        `${char}  ${char}`,
        `  ${char} `,
        ` ${char}  `,
        ` ${char}  `
    ])

    getSlash = (char) => ([
        `    ${char}`,
        `   ${char} `,
        `  ${char}  `,
        ` ${char}   `,
        `${char}    `
    ])

    getSemiColon = (char) => ([
        ` ${char}`,
        `  `,
        ` ${char}`,
        ` ${char}`,
        `${char} `
    ])

    getTopComma = (char) => ([
        `${char} `,
        ` ${char}`,
        `  `,
        `  `,
        `  `
    ])

    // ~
    getNegation =(char)=>([
        `    `,
        ` ${char} ${char}`,
        `${char} ${char} `,
        `    `,
        `    `
    ])

    getLeftSquareBrace = (char) => ([
        `${this.getGroup(char,2)}`,
        `${char} `,
        `${char} `,
        `${char} `,
        `${this.getGroup(char,2)}`
    ])

    getRightSquareBrace = (char) => ([
        `${this.getGroup(char,2)}`,
        ` ${char}`,
        ` ${char}`,
        ` ${char}`,
        `${this.getGroup(char,2)}`
    ])

    getLine = (char) => ([
        `${char}`,
        `${char}`,
        `${char}`,
        `${char}`,
        `${char}`
    ])

    getRatioDots = (char) => ([
        ` `,
        `${char}`,
        ` `,
        `${char}`,
        ` `
    ])

    getRuppeeIcon = (char) => ([
        `${this.getGroup(char,5)}`,
        `   ${char} `,
        ` ${this.getGroup(char,2)}  `,
        `  ${char}  `,
        `   ${char} `
    ])

    getSpace = (char) => ([
        ` `,
        ` `,
        ` `,
        ` `,
        ` `
    ])
    
    /**
     * alphabet instance
     **/
    constructor() {
        this.alphabetsMap.set('A', this.getA);
        this.alphabetsMap.set('B', this.getB);
        this.alphabetsMap.set('C', this.getC);
        this.alphabetsMap.set('D', this.getD);
        this.alphabetsMap.set('E', this.getE);
        this.alphabetsMap.set('F', this.getF);
        this.alphabetsMap.set('G', this.getG);
        this.alphabetsMap.set('H', this.getH);
        this.alphabetsMap.set('I', this.getI);
        this.alphabetsMap.set('J', this.getJ);
        this.alphabetsMap.set('K', this.getK);
        this.alphabetsMap.set('L', this.getL);
        this.alphabetsMap.set('M', this.getM);
        this.alphabetsMap.set('N', this.getN);
        this.alphabetsMap.set('O', this.getO);
        this.alphabetsMap.set('P', this.getP);
        this.alphabetsMap.set('Q', this.getQ);
        this.alphabetsMap.set('R', this.getR);
        this.alphabetsMap.set('S', this.getS);
        this.alphabetsMap.set('T', this.getT);
        this.alphabetsMap.set('U', this.getU);
        this.alphabetsMap.set('V', this.getV);
        this.alphabetsMap.set('W', this.getW);
        this.alphabetsMap.set('X', this.getX);
        this.alphabetsMap.set('Y', this.getY);
        this.alphabetsMap.set('Z', this.getZ);

        this.alphabetsMap.set('a', this.getSmallA);
        this.alphabetsMap.set('b', this.getSmallB);
        this.alphabetsMap.set('c', this.getSmallC);
        this.alphabetsMap.set('d', this.getSmallD);
        this.alphabetsMap.set('e', this.getSmallE);
        this.alphabetsMap.set('f', this.getSmallF);
        this.alphabetsMap.set('g', this.getSmallG);
        this.alphabetsMap.set('h', this.getSmallH);
        this.alphabetsMap.set('i', this.getSmallI);
        this.alphabetsMap.set('j', this.getSmallJ);
        this.alphabetsMap.set('k', this.getSmallK);
        this.alphabetsMap.set('l', this.getSmallL);
        this.alphabetsMap.set('m', this.getSmallM);
        this.alphabetsMap.set('n', this.getSmallN);
        this.alphabetsMap.set('o', this.getSmallO);
        this.alphabetsMap.set('p', this.getSmallP);
        this.alphabetsMap.set('q', this.getSmallQ);
        this.alphabetsMap.set('r', this.getSmallR);
        this.alphabetsMap.set('s', this.getSmallS);
        this.alphabetsMap.set('t', this.getSmallT);
        this.alphabetsMap.set('u', this.getSmallU);
        this.alphabetsMap.set('v', this.getSmallV);
        this.alphabetsMap.set('w', this.getSmallW);
        this.alphabetsMap.set('x', this.getSmallX);
        this.alphabetsMap.set('y', this.getSmallY);
        this.alphabetsMap.set('z', this.getSmallZ);

        this.alphabetsMap.set('0', this.getZero);
        this.alphabetsMap.set('1', this.getOne);
        this.alphabetsMap.set('2', this.getTwo);
        this.alphabetsMap.set('3', this.getThree);
        this.alphabetsMap.set('4', this.getFour);
        this.alphabetsMap.set('5', this.getFive);
        this.alphabetsMap.set('6', this.getSix);
        this.alphabetsMap.set('7', this.getSeven);
        this.alphabetsMap.set('8', this.getEight);
        this.alphabetsMap.set('9', this.getNine);

        this.alphabetsMap.set('`', this.getTopComma);
        this.alphabetsMap.set('~', this.getNegation);
        this.alphabetsMap.set('+', this.getPlus);
        this.alphabetsMap.set('-', this.getMinus);
        this.alphabetsMap.set('!', this.getExclaimation);
        this.alphabetsMap.set('@', this.getAtTheRate);
        this.alphabetsMap.set('#', this.getHash);
        this.alphabetsMap.set('$', this.getDollar);
        this.alphabetsMap.set('%', this.getPercentage);
        this.alphabetsMap.set('^', this.getTopCap);
        this.alphabetsMap.set('&', this.getAnd);
        this.alphabetsMap.set('*', this.getStar);
        this.alphabetsMap.set('_', this.getUnderscore);
        this.alphabetsMap.set('=', this.getEqualTo);
        this.alphabetsMap.set('(', this.getLeftCircleBrace); 
        this.alphabetsMap.set(')', this.getRightCircleBrace);
        this.alphabetsMap.set('{', this.getLeftCurlyBrace);
        this.alphabetsMap.set('}', this.getRightCurlyBrace);
        this.alphabetsMap.set('[', this.getLeftSquareBrace);
        this.alphabetsMap.set(']', this.getRightSquareBrace);
        this.alphabetsMap.set('|', this.getLine);
        this.alphabetsMap.set(':', this.getRatioDots);
        this.alphabetsMap.set(';', this.getSemiColon);
        this.alphabetsMap.set('"', this.getDoubleQuotes);
        this.alphabetsMap.set('\'', this.getSingleQuote);
        this.alphabetsMap.set('<', this.getLessThan);
        this.alphabetsMap.set('>', this.greaterThan);
        this.alphabetsMap.set(',', this.getComma);
        this.alphabetsMap.set('.' ,this.getFullStop);
        this.alphabetsMap.set('?', this.getQuestionMark);
        this.alphabetsMap.set('/', this.getSlash);
        this.alphabetsMap.set('₹', this.getRuppeeIcon);
        this.alphabetsMap.set(' ', this.getSpace);
    }

    // returns array
    getString = (char, str, delimeter)=>{
        let resultArray = [];
        for(let i=0;i<str.length;i++){
            let alphabet = this.alphabetsMap.get(str[i])(char);
            if(resultArray.length===0){
                resultArray = alphabet;
            }else{
                for(let j=0;j<5;j++){
                    resultArray[j] = resultArray[j]+delimeter+ alphabet[j];
                }
            }
        }
        return resultArray;
    }
}