const Codes = require('./Codes')
const START_STRING = '\x1b['  // prefix for the codes
const END_STRING = 'm'        // postfix for the codes
const DELIMITER = ';'         // for combining multiple codes
const colorsMap = new Map();  // map containing all the colors

// Rain Formats
colorsMap.set("reset", Codes.RESET);
colorsMap.set("bold", Codes.BOLD);
colorsMap.set("italic", Codes.ITALIC);
colorsMap.set("underline", Codes.UNDERLINE);
colorsMap.set("blink", Codes.BLINK);
colorsMap.set("cut", Codes.CUT);
colorsMap.set("doubleline", Codes.DOUBLELINE);
colorsMap.set("overline", Codes.OVERLINE);
colorsMap.set("hidden", Codes.HIDDEN);

// Rain Colors
colorsMap.set("D", Codes.DEFAULT);
colorsMap.set("Lg", Codes.LGREEN);
colorsMap.set("Mg", Codes.MGREEN);
colorsMap.set("Dg", Codes.DGREEN);
colorsMap.set("Lr", Codes.LRED);
colorsMap.set("Dr", Codes.DRED);
colorsMap.set("Lw", Codes.LWHITE);
colorsMap.set("Dw", Codes.DWHITE);
colorsMap.set("Lb", Codes.LBLUE);
colorsMap.set("Db", Codes.DBLUE);
colorsMap.set("Lc", Codes.LCYAN);
colorsMap.set("Dc", Codes.DCYAN);
colorsMap.set("o", Codes.ORANGE);
colorsMap.set("b", Codes.BLACK);
colorsMap.set("m", Codes.MAGENTA);
colorsMap.set("y", Codes.YELLOW);
colorsMap.set("l", Codes.LEMON);
colorsMap.set("p", Codes.PINK);

// Rain Backgrounds
colorsMap.set("dgreen", Codes.BGDGREEN);
colorsMap.set("lgreen", Codes.BGLGREEN);
colorsMap.set("mgreen", Codes.BGMGREEN);
colorsMap.set("dred", Codes.BGDRED);
colorsMap.set("lred", Codes.BGLRED);
colorsMap.set("dorange", Codes.BGDORANGE);
colorsMap.set("lorange", Codes.BGLORANGE);
colorsMap.set("lblue", Codes.BGLBLUE);
colorsMap.set("lwhite", Codes.BGLWHITE);
colorsMap.set("dwhite", Codes.BGDWHITE);
colorsMap.set("lemon", Codes.BGLEMON);
colorsMap.set("mpink", Codes.BGMPINK);
colorsMap.set("dpink", Codes.BGDPINK);
colorsMap.set("lpink", Codes.BGLPINK);

/**
 * to check whether the valid format is passed or not
 *
 * @param format FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @return boolean
 * @author Gaurav Walia
 **/
const checkFormat = (format)=>{
    if (format === null || format === '') {
        return false;
    }
    switch (format) {
        case "reset":
        case "bold":
        case "italic":
        case "underline":
        case "blink":
        case "cut":
        case "doubleline":
        case "overline":
        case "hidden":
            return true;
    }
    return false;
}

/**
 * to check whether the valid color is passed or not
 *
 * @param color COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @return boolean
 * @author Gaurav Walia
 **/
const checkColor = (color)=>{
    if (color === null || color === '') {
        return false;
    }
    switch (color) {
        case "D":
        case "Lg":
        case "Mg":
        case "Dg":
        case "Lr":
        case "Dr":
        case "Lw":
        case "Dw":
        case "Lb":
        case "Db":
        case "Lc":
        case "Dc":
        case "o":
        case "b":
        case "m":
        case "y":
        case "l":
        case "p":
            return true;
    }
    return false;
}

/**
 * to check whether the valid background is passed or not
 *
 * @param backgrounds (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return boolean
 * @author Gaurav Walia
 **/
const checkBackground = (background)=>{
    if (background === null || background === '') {
        return false;
    }
    switch (background) {
        case "dgreen":
        case "lgreen":
        case "mgreen":
        case "dred":
        case "lred":
        case "dorange":
        case "lorange":
        case "lblue":
        case "lwhite":
        case "dwhite":
        case "lemon":
        case "mpink":
        case "dpink":
        case "lpink":
            return true;
    }
    return false;
}

/**
 * return the color id from the map
 *
 * @param key
 * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return the color code from Rain map
 * @author Gaurav Walia
 **/
const getColorIdFromMap = (key)=>{
    if (colorsMap.has(key)) {
        return colorsMap.get(key);
    }
    return null;
}

/**
 * get all the color codes present in the library
 * please don't use this for checking whether the passed value is format, color or a background
 *
 * @param value :
 * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return color code
 * @author Gaurav Walia
 **/
const getAvailableCode = (value)=>{
    if (value === null || value === '') {
        return null;
    }
    let result = '';
    const colorId = getColorIdFromMap(value);
    if (colorId != null) {
        result += START_STRING
        result += colorId
        result += END_STRING
        return result
    }
    return null;
}

/**
 * Returns the format code you need to change the string format
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @return formatted code
 * @author Gaurav Walia
 **/
const getFormatCode = (format)=>{
    if (checkFormat(format)) {
        let result = '';
        result += START_STRING
        result += getColorIdFromMap(format)
        result += END_STRING
        return result
    }
    return null;
}

/**
 * Returns the color code for changing text to colored text
 *
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @return color codes
 * @author Gaurav Walia
 **/
const getColorCode = (color)=>{
    if (checkColor(color)) {
        let result = '';
        result += START_STRING
        result += getColorIdFromMap(color)
        result += END_STRING
        return result
    }
    return null;
}

/**
 * Returns the colored background code for coloring backgrounds
 *
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return background color codes
 * @author Gaurav Walia
 **/
const getBackgroundCode = (background)=>{
    if (checkBackground(background)) {
        let result = '';
        result += START_STRING
        result += getColorIdFromMap(background)
        result += END_STRING
        return result
    }
    return null;
}

/**
 * return the formatted code if any of the format or color is present
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @return formatted color code
 * @author Gaurav Walia
 **/
const getFormatColorCode = (format, color)=>{
    let isFormatAdded = false;
    let isColorAdded = false;
    let result = START_STRING;
    if (checkFormat(format)) {
        result += getColorIdFromMap(format);
        isFormatAdded = true;
    }
    if (checkColor(color)) {
        if (isFormatAdded) {
            result += DELIMITER;
        }
        result += getColorIdFromMap(color);
        isColorAdded = true;
    }
    result += END_STRING
    return isFormatAdded || isColorAdded ? result : null;
}

/**
 * return the formatted background code if any of the format or background is correct
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return formatted background code
 * @author Gaurav Walia
 **/
const getFormatBgCode = (format, background)=>{
    let isFormatAdded = false;
    let isBgAdded = false;
    let result = START_STRING;
    if (checkFormat(format)) {
        result += getColorIdFromMap(format);
        isFormatAdded = true;
    }
    if (checkBackground(background)) {
        if (isFormatAdded) {
            result += DELIMITER;
        }
        result += getColorIdFromMap(background);
        isBgAdded = true;
    }
    result += END_STRING
    return isFormatAdded || isBgAdded ? result : null;
}

/**
 * return colored background code if any of color or background is correct
 *
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return colored bacground code
 * @author Gaurav Walia
 **/
const getColorBgCode = (color, background) => {
    let isColorAdded = false;
    let isBgAdded = false;
    let result = START_STRING;
    if (checkColor(color)) {
        result += getColorIdFromMap(color);
        isColorAdded = true;
    }
    if (checkBackground(background)) {
        if (isColorAdded) {
            result += DELIMITER;
        }
        result += getColorIdFromMap(background);
        isBgAdded = true;
    }
    result += END_STRING;
    return isColorAdded || isBgAdded ? result : null;
}

/**
 * return the rainbow code if any of the format, color or background is passed correctly
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @return rainbowed code
 * @author Gaurav Walia
 **/
const getRainbowCode = (format, color, background)=>{
    let isFormatAdded = false;
    let isColorAdded = false;
    let isBgAdded = false;
    let result = START_STRING;
    if (checkFormat(format)) {
        result += getColorIdFromMap(format);
        isFormatAdded = true;
    }
    if (checkColor(color)) {
        if (isFormatAdded) {
            result += DELIMITER;
        }
        result += getColorIdFromMap(color);
        isColorAdded = true;
    }
    if (checkBackground(background)) {
        if (isFormatAdded || isColorAdded) {
            result += DELIMITER;
        }
        result += getColorIdFromMap(background);
        isBgAdded = true;
    }
    result += END_STRING
    return isFormatAdded || isColorAdded || isBgAdded ? result : null;
}

/**
 * this function will return the string or string array based
 * on the passed str obj parameter 
 * @param obj
 * {
 *     formats: ['bold','blink'],
 *     color: '',
 *     background: ''
 *     str: 'string to add the color' // ['first','second']
 *     end: true/false
 *     print: true/false
 *     println: true/false
 * }
 * @return string or array of strings
 * @author Gaurav Walia
 **/
const getRainbowStringFromObject = (obj)=>{
    if (obj.hasOwnProperty('str') &&
        ((obj.hasOwnProperty('formats') && Array.isArray(obj['formats'])) ||
            obj.hasOwnProperty('color') || obj.hasOwnProperty('bg'))) {
        let result = START_STRING;
        let isValueCorrect = false;
        if (obj['formats'] != null && obj['formats'].length > 0) {
            for (let i = 0; i < obj['formats'].length; i++) {
                if (checkFormat(obj['formats'][i])) {
                    result += getColorIdFromMap(obj['formats'][i]);
                    result += DELIMITER;
                    isValueCorrect = true;
                }
            }
        }
        if (obj['color'] != null && checkColor(obj['color'])) {
            result += getColorIdFromMap(obj['color']);
            result += DELIMITER;
            isValueCorrect = true;
        }
        if (obj['background'] != null && checkBackground(obj['background'])) {
            result += getColorIdFromMap(obj['background']);
            result += DELIMITER;
            isValueCorrect = true;
        }
        if (isValueCorrect && obj['str'] != null) {
            result = result.slice(0, -1);
            result += END_STRING;
            if (Array.isArray(obj['str'])) {
                let resultArray = [];
                for (let i = 0; i < obj['str'].length; i++) {
                    resultArray.push(result + obj['str'][i] + (obj['end'] != null && obj['end'] ? getFormatCode('reset') : ''));
                }
                if (obj['println'] != null && obj['println']) {
                    console.log(resultArray.join('\n'))
                }
                else if (obj['print'] != null && obj['print']) {
                    console.log(resultArray.join(''))
                } else {
                    return resultArray;
                }
            } else {
                result += obj['str'];
                result += obj['end'] != null && obj['end'] ? getFormatCode('reset') : '';
                if (obj['print'] != null && obj['print']) {
                    console.log(result)
                } else {
                    return result;
                }
            }
        }
    }
    return null;
}

/**
 * This function will generate the formatted string according to the format passed
 *
 * @param format -> (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param str -> string to be formatted
 * @param end -> whether to continue using this code or not
 * @return formatted string
 * @author Gaurav Walia
 **/
const getFormatString = (format, str, end)=>{
    let formatCode = getFormatCode(format)
    if (formatCode != null) {
        let result = ''
        result += formatCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str
}

/**
 * This function will generate the colored string according to the color passed
 * @param color -> (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return colored string
 * @author Gaurav Walia
 **/
const getColorString = (color, str, end)=>{
    let colorCode = getColorCode(color);
    if (colorCode != null) {
        let result = ''
        result += colorCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

/**
 * This function will generate the filled background string according to the background passed
 * @param background -> (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite,
 * dwhite, lemon, dpink, lpink, mpink)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return filled background string
 * @author Gaurav Walia
 **/
const getBgString = (background, str, end) => {
    let backgroundCode = getBackgroundCode(background);
    if (backgroundCode != null) {
        let result = ''
        result += backgroundCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

/**
 * this function will return the formatted colored string
 *
 * @param format -> (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param color -> (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return formatted color string
 * @author Gaurav Walia
 **/
const getFormatColorString = (format, color, str, end)=>{
    let formatColorCode = getFormatColorCode(format, color);
    if (formatColorCode != null) {
        let result = ''
        result += formatColorCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

/**
 * this function will return formatted background string
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return formatted background string
 * @author Gaurav Walia
 **/
const getFormatBgString = (format, background, str, end) => {
    let formatBGCode = getFormatBgCode(format, background);
    if (formatBGCode != null) {
        let result = ''
        result += formatBGCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

/**
 * this function will return colored background string
 *
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return colored bacground string
 * @author Gaurav Walia
 **/
const getColorBgString = (color, background, str, end)=>{
    let colorBGCode = getColorBgCode(color, background);
    if (colorBGCode != null) {
        let result = ''
        result += colorBGCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

/**
 * this function will return rainbowed string
 *
 * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
 * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
 * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
 * @param str -> string to be colored
 * @param end -> whether to continue using this code or not
 * @return rainbowed string
 * @author Gaurav Walia
 **/
const getRainbowString = (format, color, background, str, end)=>{
    let rainbowCode = getRainbowCode(format, color, background);
    if (rainbowCode != null) {
        let result = ''
        result += rainbowCode
        result += str
        if (end) {
            result += getFormatCode("reset")
        }
        return result
    }
    return str;
}

module.exports = {
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
    getFormatColorString,
    getFormatBgString,
    getColorBgString,
    getRainbowString,
    getRainbowStringFromObject
}