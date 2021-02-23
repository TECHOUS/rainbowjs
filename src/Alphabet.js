const alphabetsMap = new Map();

const getGroup = (char, noOfTimes) => {
    let result = '';
    for (let i = 0; i < noOfTimes; i++) {
        result += char;
    }
    return result;
}

const getA = (char) => [
    `    ${char}    `,
    `   ${char} ${char}   `,
    `  ${getGroup(char, 5)}  `,
    ` ${char}     ${char} `,
    `${char}       ${char}`,
];

const getB = (char) => [
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
];

const getC = (char) => [
    ` ${getGroup(char, 3)} `,
    `${char}   ${char}`,
    `${char}    `,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getD = (char) => [
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
];

const getE = (char) => [
    `${getGroup(char, 5)}`,
    `${char}    `,
    `${getGroup(char, 4)} `,
    `${char}    `,
    `${getGroup(char, 5)}`,
];

const getF = (char) => [
    `${getGroup(char, 5)}`,
    `${char}    `,
    `${getGroup(char, 4)} `,
    `${char}    `,
    `${char}    `,
];

const getG = (char) => [
    ` ${getGroup(char, 4)}`,
    `${char}    `,
    `${char}  ${getGroup(char, 2)}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getH = (char) => [
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${getGroup(char, 5)}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
];

const getI = (char) => [
    `${getGroup(char, 5)}`,
    `  ${char}  `,
    `  ${char}  `,
    `  ${char}  `,
    `${getGroup(char, 5)}`,
];

const getJ = (char) => [
    `${getGroup(char, 5)}`,
    `   ${char} `,
    `   ${char} `,
    `${char}  ${char} `,
    ` ${getGroup(char, 2)}  `,
];

const getK = (char) => [
    `${char}   ${char}`,
    `${char}  ${char} `,
    `${getGroup(char, 3)}  `,
    `${char}  ${char} `,
    `${char}   ${char}`,
];

const getL = (char) => [
    `${char}    `,
    `${char}    `,
    `${char}    `,
    `${char}    `,
    `${getGroup(char, 5)}`,
];

const getM = (char) => [
    `${char}   ${char}`,
    `${getGroup(char, 2)} ${getGroup(char, 2)}`,
    `${char} ${char} ${char}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
];

const getN = (char) => [
    `${char}   ${char}`,
    `${getGroup(char, 2)}  ${char}`,
    `${char} ${char} ${char}`,
    `${char}  ${getGroup(char, 2)}`,
    `${char}   ${char}`,
];

const getO = (char) => [
    ` ${getGroup(char, 3)} `,
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getP = (char) => [
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
    `${char}    `,
    `${char}    `,
];

const getQ = (char) => [
    `${getGroup(char, 5)}  `,
    `${char}   ${char}  `,
    `${char} ${char} ${char}  `,
    `${char}   ${char}  `,
    `${getGroup(char, 5)} ${char}`,
];

const getR = (char) => [
    `${getGroup(char, 5)}`,
    `${char}   ${char}`,
    `${getGroup(char, 5)}`,
    `${char}  ${char} `,
    `${char}   ${char}`,
];

const getS = (char) => [
    ` ${getGroup(char, 4)}`,
    `${char}    `,
    ` ${getGroup(char, 4)}`,
    `    ${char}`,
    `${getGroup(char, 4)} `,
];

const getT = (char) => [
    `${getGroup(char, 5)}`,
    `  ${char}  `,
    `  ${char}  `,
    `  ${char}  `,
    `  ${char}  `,
];

const getU = (char) => [
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getV = (char) => [
    `${char}       ${char}`,
    ` ${char}     ${char} `,
    `  ${char}   ${char}  `,
    `   ${char} ${char}   `,
    `    ${char}    `,
];

const getW = (char) => [
    `${char}   ${char}`,
    `${char}   ${char}`,
    `${char} ${char} ${char}`,
    `${getGroup(char, 2)} ${getGroup(char, 2)}`,
    `${char}   ${char}`,
];

const getX = (char) => [
    `${char}   ${char}`,
    ` ${char} ${char} `,
    `  ${char}  `,
    ` ${char} ${char} `,
    `${char}   ${char}`,
];

const getY = (char) => [
    `${char}   ${char}`,
    ` ${char} ${char} `,
    `  ${char}  `,
    `  ${char}  `,
    `  ${char}  `,
];

const getZ = (char) => [
    `${getGroup(char, 5)}`,
    `   ${char} `,
    `  ${char}  `,
    ` ${char}   `,
    `${getGroup(char, 5)}`,
];

const getSmallA = (char) => [
    `${getGroup(char, 4)}  `,
    `    ${char} `,
    ` ${getGroup(char, 4)} `,
    ` ${char}  ${char} `,
    ` ${getGroup(char, 5)}`,
];

const getSmallB = (char) => [
    `${char}    `,
    `${char}    `,
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
];

const getSmallC = (char) => [
    `     `,
    `     `,
    ` ${getGroup(char, 4)}`,
    `${char}    `,
    ` ${getGroup(char, 4)}`,
];

const getSmallD = (char) => [
    `    ${char}`,
    `    ${char}`,
    ` ${getGroup(char, 4)}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 4)}`,
];

const getSmallE = (char) => [
    ` ${getGroup(char, 3)} `,
    `${char}   ${char}`,
    `${getGroup(char, 5)}`,
    `${char}    `,
    ` ${getGroup(char, 4)}`,
];

const getSmallF = (char) => [
    `   ${getGroup(char, 2)}`,
    `  ${char}  `,
    `${getGroup(char, 5)}`,
    `  ${char}  `,
    `  ${char}  `,
];

const getSmallG = (char) => [
    ` ${getGroup(char, 4)}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 4)}`,
    `    ${char}`,
    `${getGroup(char, 4)} `,
];

const getSmallH = (char) => [
    `${char}    `,
    `${char}    `,
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${char}   ${char}`,
];

const getSmallI = (char) => [
    ` ${char} `,
    `   `,
    ` ${char} `,
    ` ${char} `,
    ` ${char} `,
];

const getSmallJ = (char) => [
    `  ${char}`,
    ` ${getGroup(char, 2)}`,
    `${char} ${char}`,
    `  ${char}`,
    `${getGroup(char, 2)} `,
];

const getSmallK = (char) => [
    `${char}  ${char}`,
    `${char} ${char} `,
    `${getGroup(char, 2)}  `,
    `${char} ${char} `,
    `${char}  ${char}`,
];

const getSmallL = (char) => [
    `${getGroup(char, 2)} `,
    ` ${char} `,
    ` ${char} `,
    ` ${char} `,
    ` ${getGroup(char, 2)}`,
];

const getSmallM = (char) => [
    `     `,
    `     `,
    ` ${getGroup(char, 3)} `,
    `${char} ${char} ${char}`,
    `${char} ${char} ${char}`,
];

const getSmallN = (char) => [
    `    `,
    `    `,
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    `${char}  ${char}`,
];

const getSmallO = (char) => [
    `     `,
    `     `,
    ` ${getGroup(char, 3)} `,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getSmallP = (char) => [
    `     `,
    `${getGroup(char, 4)} `,
    `${char}   ${char}`,
    `${getGroup(char, 4)} `,
    `${char}    `,
];

const getSmallQ = (char) => [
    `     `,
    ` ${getGroup(char, 4)}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 4)}`,
    `    ${char}`,
];

const getSmallR = (char) => [
    `   `,
    ` ${getGroup(char, 2)}`,
    `${char}  `,
    `${char}  `,
    `${char}  `,
];

const getSmallS = (char) => [
    ` ${getGroup(char, 2)}`,
    `${char}  `,
    ` ${char} `,
    `  ${char}`,
    `${getGroup(char, 2)} `,
];

const getSmallT = (char) => [
    ` ${char} `,
    `${getGroup(char, 3)}`,
    ` ${char} `,
    ` ${char} `,
    ` ${getGroup(char, 2)}`,
];

// u
const getSmallU = (char) => [
    `     `,
    `     `,
    `${char}   ${char}`,
    `${char}   ${char}`,
    ` ${getGroup(char, 3)} `,
];

const getSmallV = (char) => [
    `     `,
    `     `,
    `${char}   ${char}`,
    ` ${char} ${char} `,
    `  ${char}  `,
];

// w
const getSmallW = (char) => [
    `       `,
    `       `,
    `${char}     ${char}`,
    ` ${char} ${char} ${char} `,
    `  ${char} ${char}  `,
];

// x
const getSmallX = (char) => [
    `   `,
    `   `,
    `${char} ${char}`,
    ` ${char} `,
    `${char} ${char}`,
];

// y
const getSmallY = (char) => [
    `     `,
    `${char}   ${char}`,
    ` ${char} ${char} `,
    `  ${char}  `,
    `${getGroup(char, 3)}  `,
];

//z
const getSmallZ = (char) => [
    `    `,
    `${getGroup(char, 4)}`,
    `  ${char} `,
    ` ${char}  `,
    `${getGroup(char, 4)}`,
];

const getZero = (char) => [
    `${getGroup(char, 3)}`,
    `${char} ${char}`,
    `${char} ${char}`,
    `${char} ${char}`,
    `${getGroup(char, 3)}`,
];

const getOne = (char) => [
    ` ${char} `,
    `${getGroup(char, 2)} `,
    ` ${char} `,
    ` ${char} `,
    `${getGroup(char, 3)}`,
];

const getTwo = (char) => [
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    `  ${char} `,
    ` ${char}  `,
    `${getGroup(char, 4)}`,
];

const getThree = (char) => [
    `${getGroup(char, 4)}`,
    `   ${char}`,
    `  ${char} `,
    `${char}  ${char}`,
    ` ${getGroup(char, 2)} `,
];

const getFour = (char) => [
    `${char}  ${char}`,
    `${char}  ${char}`,
    `${getGroup(char, 4)}`,
    `   ${char}`,
    `   ${char}`,
];

const getFive = (char) => [
    `${getGroup(char, 4)}`,
    `${char}   `,
    `${getGroup(char, 3)} `,
    `   ${char}`,
    `${getGroup(char, 3)} `,
];

const getSix = (char) => [
    ` ${getGroup(char, 3)}`,
    `${char}   `,
    `${getGroup(char, 3)} `,
    `${char}  ${char}`,
    ` ${getGroup(char, 2)} `,
];

const getSeven = (char) => [
    `${getGroup(char, 4)}`,
    `   ${char}`,
    `  ${char} `,
    ` ${char}  `,
    `${char}   `,
];

const getEight = (char) => [
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    ` ${getGroup(char, 2)} `,
];

const getNine = (char) => [
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    ` ${getGroup(char, 3)}`,
    `   ${char}`,
    `${getGroup(char, 3)} `,
];

const getPlus = (char) => [
    `   `,
    ` ${char} `,
    `${getGroup(char, 3)}`,
    ` ${char} `,
    `   `,
];

const getMinus = (char) => [
    `   `,
    `   `,
    `${getGroup(char, 3)}`,
    `   `,
    `   `,
];

const getExclaimation = (char) => [
    `${char}`,
    `${char}`,
    `${char}`,
    ` `,
    `${char}`,
];

const getAtTheRate = (char) => [
    `${getGroup(char, 5)}`,
    `${char}  ${getGroup(char, 2)}`,
    `${char} ${char} ${char}`,
    `${char}  ${getGroup(char, 2)}`,
    `${getGroup(char, 4)} `,
];

const getHash = (char) => [
    ` ${char} ${char} `,
    `${getGroup(char, 5)}`,
    ` ${char} ${char} `,
    `${getGroup(char, 5)}`,
    ` ${char} ${char} `,
];

const getDollar = (char) => [
    ` ${getGroup(char, 4)}`,
    `${char} ${char}  `,
    ` ${getGroup(char, 4)}`,
    `  ${char} ${char}`,
    `${getGroup(char, 4)} `,
];

const getPercentage = (char) => [
    `    ${char}`,
    `${char}  ${char} `,
    `  ${char}  `,
    ` ${char}  ${char}`,
    `${char}    `,
];

const getTopCap = (char) => [` ${char} `, `${char} ${char}`, `   `, `   `, `   `];

const getAnd = (char) => [
    `${getGroup(char, 4)} `,
    `${char}  ${char} `,
    ` ${getGroup(char, 2)} ${char}`,
    `${char}  ${char} `,
    `${getGroup(char, 3)} ${char}`,
];

const getStar = (char) => [
    `  ${char}  `,
    `${char} ${char} ${char}`,
    ` ${char} ${char} `,
    `     `,
    `     `,
];

const getUnderscore = (char) => [
    `     `,
    `     `,
    `     `,
    `     `,
    `${getGroup(char, 5)}`,
];

// =
const getEqualTo = (char) => [
    `     `,
    `${getGroup(char, 5)}`,
    `     `,
    `${getGroup(char, 5)}`,
    `     `,
];

const getLeftCurlyBrace = (char) => [
    ` ${getGroup(char, 2)}`,
    ` ${char} `,
    `${char}  `,
    ` ${char} `,
    ` ${getGroup(char, 2)}`,
];

const getRightCurlyBrace = (char) => [
    `${getGroup(char, 2)} `,
    ` ${char} `,
    `  ${char}`,
    ` ${char} `,
    `${getGroup(char, 2)} `,
];

const getLeftCircleBrace = (char) => [
    ` ${char}`,
    `${char} `,
    `${char} `,
    `${char} `,
    ` ${char}`,
];

const getRightCircleBrace = (char) => [
    `${char} `,
    ` ${char}`,
    ` ${char}`,
    ` ${char}`,
    `${char} `,
];

const getDoubleQuotes = (char) => [
    `${char} ${char}`,
    `${char} ${char}`,
    `   `,
    `   `,
    `   `,
];

const getSingleQuote = (char) => [`${char}`, `${char}`, ` `, ` `, ` `];

const getLessThan = (char) => [
    `   `,
    `   `,
    `  ${char}`,
    `${char}  `,
    `  ${char}`,
];

const greaterThan = (char) => [
    `   `,
    `   `,
    `${char}  `,
    `  ${char}`,
    `${char}  `,
];

const getComma = (char) => [`  `, `  `, ` ${char}`, ` ${char}`, `${char} `];

const getFullStop = (char) => [` `, ` `, ` `, ` `, `${char}`];

// ?
const getQuestionMark = (char) => [
    ` ${getGroup(char, 2)} `,
    `${char}  ${char}`,
    `  ${char} `,
    ` ${char}  `,
    ` ${char}  `,
];

const getSlash = (char) => [
    `    ${char}`,
    `   ${char} `,
    `  ${char}  `,
    ` ${char}   `,
    `${char}    `,
];

const getSemiColon = (char) => [
    ` ${char}`,
    `  `,
    ` ${char}`,
    ` ${char}`,
    `${char} `,
];

const getTopComma = (char) => [`${char} `, ` ${char}`, `  `, `  `, `  `];

// ~
const getNegation = (char) => [
    `    `,
    ` ${char} ${char}`,
    `${char} ${char} `,
    `    `,
    `    `,
];

const getLeftSquareBrace = (char) => [
    `${getGroup(char, 2)}`,
    `${char} `,
    `${char} `,
    `${char} `,
    `${getGroup(char, 2)}`,
];

const getRightSquareBrace = (char) => [
    `${getGroup(char, 2)}`,
    ` ${char}`,
    ` ${char}`,
    ` ${char}`,
    `${getGroup(char, 2)}`,
];

const getLine = (char) => [`${char}`, `${char}`, `${char}`, `${char}`, `${char}`];

const getRatioDots = (char) => [` `, `${char}`, ` `, `${char}`, ` `];

const getRuppeeIcon = (char) => [
    `${getGroup(char, 5)}`,
    `   ${char} `,
    ` ${getGroup(char, 2)}  `,
    `  ${char}  `,
    `   ${char} `,
];

const getSpace = (char) => [` `, ` `, ` `, ` `, ` `];

alphabetsMap.set('A', getA);
alphabetsMap.set('B', getB);
alphabetsMap.set('C', getC);
alphabetsMap.set('D', getD);
alphabetsMap.set('E', getE);
alphabetsMap.set('F', getF);
alphabetsMap.set('G', getG);
alphabetsMap.set('H', getH);
alphabetsMap.set('I', getI);
alphabetsMap.set('J', getJ);
alphabetsMap.set('K', getK);
alphabetsMap.set('L', getL);
alphabetsMap.set('M', getM);
alphabetsMap.set('N', getN);
alphabetsMap.set('O', getO);
alphabetsMap.set('P', getP);
alphabetsMap.set('Q', getQ);
alphabetsMap.set('R', getR);
alphabetsMap.set('S', getS);
alphabetsMap.set('T', getT);
alphabetsMap.set('U', getU);
alphabetsMap.set('V', getV);
alphabetsMap.set('W', getW);
alphabetsMap.set('X', getX);
alphabetsMap.set('Y', getY);
alphabetsMap.set('Z', getZ);

alphabetsMap.set('a', getSmallA);
alphabetsMap.set('b', getSmallB);
alphabetsMap.set('c', getSmallC);
alphabetsMap.set('d', getSmallD);
alphabetsMap.set('e', getSmallE);
alphabetsMap.set('f', getSmallF);
alphabetsMap.set('g', getSmallG);
alphabetsMap.set('h', getSmallH);
alphabetsMap.set('i', getSmallI);
alphabetsMap.set('j', getSmallJ);
alphabetsMap.set('k', getSmallK);
alphabetsMap.set('l', getSmallL);
alphabetsMap.set('m', getSmallM);
alphabetsMap.set('n', getSmallN);
alphabetsMap.set('o', getSmallO);
alphabetsMap.set('p', getSmallP);
alphabetsMap.set('q', getSmallQ);
alphabetsMap.set('r', getSmallR);
alphabetsMap.set('s', getSmallS);
alphabetsMap.set('t', getSmallT);
alphabetsMap.set('u', getSmallU);
alphabetsMap.set('v', getSmallV);
alphabetsMap.set('w', getSmallW);
alphabetsMap.set('x', getSmallX);
alphabetsMap.set('y', getSmallY);
alphabetsMap.set('z', getSmallZ);

alphabetsMap.set('0', getZero);
alphabetsMap.set('1', getOne);
alphabetsMap.set('2', getTwo);
alphabetsMap.set('3', getThree);
alphabetsMap.set('4', getFour);
alphabetsMap.set('5', getFive);
alphabetsMap.set('6', getSix);
alphabetsMap.set('7', getSeven);
alphabetsMap.set('8', getEight);
alphabetsMap.set('9', getNine);

alphabetsMap.set('`', getTopComma);
alphabetsMap.set('~', getNegation);
alphabetsMap.set('+', getPlus);
alphabetsMap.set('-', getMinus);
alphabetsMap.set('!', getExclaimation);
alphabetsMap.set('@', getAtTheRate);
alphabetsMap.set('#', getHash);
alphabetsMap.set('$', getDollar);
alphabetsMap.set('%', getPercentage);
alphabetsMap.set('^', getTopCap);
alphabetsMap.set('&', getAnd);
alphabetsMap.set('*', getStar);
alphabetsMap.set('_', getUnderscore);
alphabetsMap.set('=', getEqualTo);
alphabetsMap.set('(', getLeftCircleBrace);
alphabetsMap.set(')', getRightCircleBrace);
alphabetsMap.set('{', getLeftCurlyBrace);
alphabetsMap.set('}', getRightCurlyBrace);
alphabetsMap.set('[', getLeftSquareBrace);
alphabetsMap.set(']', getRightSquareBrace);
alphabetsMap.set('|', getLine);
alphabetsMap.set(':', getRatioDots);
alphabetsMap.set(';', getSemiColon);
alphabetsMap.set('"', getDoubleQuotes);
alphabetsMap.set("'", getSingleQuote);
alphabetsMap.set('<', getLessThan);
alphabetsMap.set('>', greaterThan);
alphabetsMap.set(',', getComma);
alphabetsMap.set('.', getFullStop);
alphabetsMap.set('?', getQuestionMark);
alphabetsMap.set('/', getSlash);
alphabetsMap.set('₹', getRuppeeIcon);
alphabetsMap.set(' ', getSpace);

/**
 * returns the array of strings contains the representation of the chars
 *
 * @param char character to be used to print
 * @param str string to represent
 * @param delimeter char to be used between the alphabets
 * @return array of strings
 **/
const getString = (char, str, delimeter) => {
    let resultArray = [];
    if (
        char === null ||
        str === null ||
        Array.isArray(str) ||
        delimeter === null
    ) {
        return resultArray;
    }
    for (let i = 0; i < str.length; i++) {
        let alphabet = alphabetsMap.get(str[i])(char);
        if (resultArray.length === 0) {
            resultArray = alphabet;
        } else {
            for (let j = 0; j < 5; j++) {
                resultArray[j] = resultArray[j] + delimeter + alphabet[j];
            }
        }
    }
    return resultArray;
};

module.exports = {
    getString
}