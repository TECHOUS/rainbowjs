const Codes = require('./Codes')

module.exports = class Rainbow{
    START_STRING = '\x1b['  // prefix for the codes
    END_STRING = 'm'        // postfix for the codes
    DELIMITER = ';'         // for combining multiple codes
    colorsMap = new Map();  // map containing all the colors

    /**
     * constructor for initializing the initial color mapping
     *
     * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @author Gaurav Walia
     **/
    constructor(){
        // Rain Formats
        this.colorsMap.set("reset",       Codes.RESET);
        this.colorsMap.set("bold",        Codes.BOLD);
        this.colorsMap.set("italic",      Codes.ITALIC);
        this.colorsMap.set("underline",   Codes.UNDERLINE);
        this.colorsMap.set("blink",       Codes.BLINK);
        this.colorsMap.set("cut",         Codes.CUT);
        this.colorsMap.set("doubleline",  Codes.DOUBLELINE);
        this.colorsMap.set("overline",    Codes.OVERLINE);
        this.colorsMap.set("hidden",      Codes.HIDDEN);

        // Rain Colors
        this.colorsMap.set("D", Codes.DEFAULT);
        this.colorsMap.set("Lg", Codes.LGREEN);
        this.colorsMap.set("Mg", Codes.MGREEN);
        this.colorsMap.set("Dg", Codes.DGREEN);
        this.colorsMap.set("Lr", Codes.LRED);
        this.colorsMap.set("Dr", Codes.DRED);
        this.colorsMap.set("Lw", Codes.LWHITE);
        this.colorsMap.set("Dw", Codes.DWHITE);
        this.colorsMap.set("Lb", Codes.LBLUE);
        this.colorsMap.set("Db", Codes.DBLUE);
        this.colorsMap.set("Lc", Codes.LCYAN);
        this.colorsMap.set("Dc", Codes.DCYAN);
        this.colorsMap.set("o", Codes.ORANGE);
        this.colorsMap.set("b", Codes.BLACK);
        this.colorsMap.set("m", Codes.MAGENTA);
        this.colorsMap.set("y", Codes.YELLOW);
        this.colorsMap.set("l", Codes.LEMON);
        this.colorsMap.set("p", Codes.PINK);

        // Rain Backgrounds
        this.colorsMap.set("dgreen", Codes.BGDGREEN);
        this.colorsMap.set("lgreen", Codes.BGLGREEN);
        this.colorsMap.set("mgreen", Codes.BGMGREEN);
        this.colorsMap.set("dred", Codes.BGDRED);
        this.colorsMap.set("lred", Codes.BGLRED);
        this.colorsMap.set("dorange", Codes.BGDORANGE);
        this.colorsMap.set("lorange", Codes.BGLORANGE);
        this.colorsMap.set("lblue", Codes.BGLBLUE);
        this.colorsMap.set("lwhite", Codes.BGLWHITE);
        this.colorsMap.set("dwhite", Codes.BGDWHITE);
        this.colorsMap.set("lemon", Codes.BGLEMON);
        this.colorsMap.set("mpink", Codes.BGMPINK);
        this.colorsMap.set("dpink", Codes.BGDPINK);
        this.colorsMap.set("lpink", Codes.BGLPINK);
    }

    /**
     * to check whether the valid format is passed or not
     *
     * @param format FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @return boolean
     * @author Gaurav Walia
     **/
    checkFormat(format){
        if(format===null || format===''){
            return false;
        }
        switch(format){
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
    checkColor(color){
        if(color===null || color===''){
            return false;
        }
        switch(color){
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
    checkBackground(background){
        if(background===null || background===''){
            return false;
        }
        switch(background){
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
    getColorIdFromMap(key){
        if(this.colorsMap.has(key)){
            return this.colorsMap.get(key);
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
    getAvailableCode(value){
        if(value===null || value===''){
            return null;
        }
        let result = '';
        const colorId = this.getColorIdFromMap(value);
        if(colorId!=null){
            result += this.START_STRING
            result += colorId
            result += this.END_STRING
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
    getFormatCode(format){
        if(this.checkFormat(format)){
            let result = '';
            result += this.START_STRING
            result += this.getColorIdFromMap(format)
            result+=this.END_STRING
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
    getColorCode(color){
        if(this.checkColor(color)){
            let result = '';
            result += this.START_STRING
            result += this.getColorIdFromMap(color)
            result+=this.END_STRING
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
    getBackgroundCode(background){
        if(this.checkBackground(background)){
            let result = '';
            result += this.START_STRING
            result += this.getColorIdFromMap(background)
            result+=this.END_STRING
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
    getFormatColorCode(format, color){
        let isFormatAdded = false;
        let isColorAdded  = false;
        let result = this.START_STRING;
        if(this.checkFormat(format)){
            result += this.getColorIdFromMap(format);
            isFormatAdded = true;
        }
        if(this.checkColor(color)){
            if(isFormatAdded){
                result += this.DELIMITER;
            }
            result += this.getColorIdFromMap(color);
            isColorAdded = true;
        }
        result+= this.END_STRING
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
    getFormatBgCode(format, background){
        let isFormatAdded  = false;
        let isBgAdded      = false;
        let result = this.START_STRING;
        if(this.checkFormat(format)){
            result += this.getColorIdFromMap(format);
            isFormatAdded = true;
        }
        if(this.checkBackground(background)){
            if(isFormatAdded){
                result += this.DELIMITER;
            }
            result += this.getColorIdFromMap(background);
            isBgAdded = true;
        }
        result+= this.END_STRING
        return isFormatAdded || isBgAdded ? result : null;
    }

    /**
     * return colored background code if any of color or background is correct
     *
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return colored bacground code
     **/
    getColorBgCode(color, background){
        let isColorAdded = false;
        let isBgAdded = false;
        let result = this.START_STRING;
        if(this.checkColor(color)){
            result += this.getColorIdFromMap(color);
            isColorAdded = true;
        }
        if(this.checkBackground(background)){
            if(isColorAdded){
                result += this.DELIMITER;
            }
            result += this.getColorIdFromMap(background);
            isBgAdded = true;
        }
        result+= this.END_STRING;
        return isColorAdded || isBgAdded ? result : null;
    }

    /**
     * return the rainbow code if any of the format, color or background is passed correctly
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return rainbowed code
     **/
    getRainbowCode(format, color, background){
        let isFormatAdded = false;
        let isColorAdded = false;
        let isBgAdded = false;
        let result = this.START_STRING;
        if(this.checkFormat(format)){
            result += this.getColorIdFromMap(format);
            isFormatAdded = true;
        }
        if(this.checkColor(color)) {
            if(isFormatAdded){
                result += this.DELIMITER;
            }
            result += this.getColorIdFromMap(color);
            isColorAdded = true;
        }
        if(this.checkBackground(background)){
            if(isFormatAdded || isColorAdded){
                result += this.DELIMITER;
            }
            result += this.getColorIdFromMap(background);
            isBgAdded = true;
        }
        result+= this.END_STRING
        return isFormatAdded || isColorAdded || isBgAdded ? result : null;
    }

    /**
     * {
     *     formats: ['bold','blink'],
     *     color: '',
     *     bg: ''
     *     str: 'string to add the color' // ['first','second']
     *     end: true/false
     *     print: true/false
     *     println: true/false
     * }
     */
    getRainbowStringFromObject(obj){
        if(obj.hasOwnProperty('str') &&
            ((obj.hasOwnProperty('formats') && Array.isArray(obj['formats'])) ||
            obj.hasOwnProperty('color') || obj.hasOwnProperty('bg'))){
            let result = this.START_STRING;
            let isValueCorrect = false;
            if(obj['formats']!=null && obj['formats'].length>0){
                for(let i=0;i<obj['formats'].length;i++){
                    if(this.checkFormat(obj['formats'][i])){
                        result += this.getColorIdFromMap(obj['formats'][i]);
                        result += this.DELIMITER;
                        isValueCorrect=true;
                    }
                }
            }
            if(obj['color']!=null && this.checkColor(obj['color'])){
                result += this.getColorIdFromMap(obj['color']);
                result += this.DELIMITER;
                isValueCorrect=true;
            }
            if(obj['background']!=null && this.checkBackground(obj['background'])){
                result += this.getColorIdFromMap(obj['background']);
                result += this.DELIMITER;
                isValueCorrect=true;
            }
            if(isValueCorrect && obj['str']!=null){
                result = result.slice(0,-1);
                result += this.END_STRING;
                if(Array.isArray(obj['str'])){
                    let resultArray = [];
                    for(let i=0;i<obj['str'].length;i++){
                        resultArray.push(result+obj['str'][i]+(obj['end']!=null && obj['end'] ? this.getFormatCode('reset') : ''));
                    }
                    if(obj['println']!=null && obj['println']){
                        console.log(resultArray.join('\n'))
                    }
                    else if(obj['print']!=null && obj['print']){
                        console.log(resultArray.join(''))
                    }else{
                        return resultArray;
                    }
                }else{
                    result += obj['str'];
                    result += obj['end']!=null && obj['end'] ? this.getFormatCode('reset') : '';
                    if(obj['print']!=null && obj['print']){
                        console.log(result)
                    }else{
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
     **/
    getFormatString(format, str, end){
        let formatCode = this.getFormatCode(format)
        if(formatCode != null){
            let result = ''
            result += formatCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getColorString(color, str, end){
        let colorCode = this.getColorCode(color);
        if(colorCode != null){
            let result = ''
            result += colorCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getBgString(background, str, end){
        let backgroundCode = this.getBackgroundCode(background);
        if(backgroundCode!=null){
            let result = ''
            result += backgroundCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getFormatColorString(format, color, str, end){
        let formatColorCode = this.getFormatColorCode(format, color);
        if(formatColorCode != null){
            let result = ''
            result += formatColorCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getFormatBgString(format, background, str, end){
        let formatBGCode = this.getFormatBgCode(format, background);
        if(formatBGCode != null){
            let result = ''
            result += formatBGCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getColorBgString(color, background, str, end){
        let colorBGCode = this.getColorBgCode(color, background);
        if(colorBGCode != null){
            let result = ''
            result += colorBGCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
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
     **/
    getRainbowString(format, color, background, str, end){
        let rainbowCode = this.getRainbowCode(format, color, background);
        if(rainbowCode != null){
            let result = ''
            result += rainbowCode
            result += str
            if(end){
                result += this.getFormatCode("reset")
            }
            return result
        }
        return str;
    }
}