const Codes = require('./Codes')

module.exports = class Rainbow{
    START_STRING = '\x1b['
    END_STRING = 'm'
    DELIMETER = ';'
    Rain = new Map();

    /**
     * This function will create a  colors mapping you need
     * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     **/
    constructor(){
        // Rain Formats
        this.Rain.set("reset",       Codes.RESET);
        this.Rain.set("bold",        Codes.BOLD);
        this.Rain.set("italic",      Codes.ITALIC);
        this.Rain.set("underline",   Codes.UNDERLINE);
        this.Rain.set("blink",       Codes.BLINK);
        this.Rain.set("cut",         Codes.CUT);
        this.Rain.set("doubleline",  Codes.DOUBLELINE);
        this.Rain.set("overline",    Codes.OVERLINE);
        this.Rain.set("hidden",      Codes.HIDDEN);

        // Rain Colors
        this.Rain.set("D", Codes.DEFAULT);
        this.Rain.set("Lg", Codes.LGREEN);
        this.Rain.set("Mg", Codes.MGREEN);
        this.Rain.set("Dg", Codes.DGREEN);
        this.Rain.set("Lr", Codes.LRED);
        this.Rain.set("Dr", Codes.DRED);
        this.Rain.set("Lw", Codes.LWHITE);
        this.Rain.set("Dw", Codes.DWHITE);
        this.Rain.set("Lb", Codes.LBLUE);
        this.Rain.set("Db", Codes.DBLUE);
        this.Rain.set("Lc", Codes.LCYAN);
        this.Rain.set("Dc", Codes.DCYAN);
        this.Rain.set("o", Codes.ORANGE);
        this.Rain.set("b", Codes.BLACK);
        this.Rain.set("m", Codes.MAGENTA);
        this.Rain.set("y", Codes.YELLOW);
        this.Rain.set("l", Codes.LEMON);
        this.Rain.set("p", Codes.PINK);

        // Rain Backgrounds
        this.Rain.set("dgreen", Codes.BGDGREEN);
        this.Rain.set("lgreen", Codes.BGLGREEN);
        this.Rain.set("mgreen", Codes.BGMGREEN);
        this.Rain.set("dred", Codes.BGDRED);
        this.Rain.set("lred", Codes.BGLRED);
        this.Rain.set("dorange", Codes.BGDORANGE);
        this.Rain.set("lorange", Codes.BGLORANGE);
        this.Rain.set("lblue", Codes.BGLBLUE);
        this.Rain.set("lwhite", Codes.BGLWHITE);
        this.Rain.set("dwhite", Codes.BGDWHITE);
        this.Rain.set("lemon", Codes.BGLEMON);
        this.Rain.set("mpink", Codes.BGMPINK);
        this.Rain.set("dpink", Codes.BGDPINK);
        this.Rain.set("lpink", Codes.BGLPINK);
    }

    /**
     * this function will check whether the format passed is correct or not
     *
     * @param format checking format
     * @return boolean
     **/
    checkFormat(format){
        if(format==null || format===""){
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
     * this function will check whether the color passed is correct or not
     *
     * @param color to check
     * @return boolean
     **/
    checkColor(color){
        if(color==null || color===""){
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
     * this function will check whether the background is correct or not
     *
     * @param background
     * @return boolean
     **/
    checkBG(background){
        if(background==null || background===""){
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
     * This function will return the color code from Rain map
     *
     * @param key
     * @return the color code from Rain map
     **/
    getRain(key){
        if(this.Rain.has(key)){
            return this.Rain.get(key);
        }
        return null;
    }

    /**
     * this function will return the all the rainbow combinations
     *
     * @param value :
     * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return rainbowed codes
     **/
    get(value){
        if(value == null){
            return null;
        }
        switch(value){
            case "reset":
            case "bold":
            case "italic":
            case "underline":
            case "blink":
            case "cut":
            case "doubleline":
            case "overline":
            case "hidden":
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
                let result = '';
                if(this.getRain(value)!=null){
                    result += this.START_STRING
                    result += this.getRain(value)
                    result += this.END_STRING
                    return result
                }
        }
        return null;
    }

    /**
     * Returns the format code you need to change the string format
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @return formatted code
     **/
    getFormat(format){
        if(this.checkFormat(format)){
            let result = '';
            result += this.START_STRING
            result += this.getRain(format)
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
     **/
    getColor(color){
        if(this.checkColor(color)){
            let result = '';
            result += this.START_STRING
            result += this.getRain(color)
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
     **/
    getBG(background){
        if(checkBG(background)){
            let result = '';
            result += this.START_STRING
            result += this.getRain(background)
            result+=this.END_STRING
            return result
        }
        return null;
    }

    /**
     * this function will return the formatted color code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @return formatted color code
     **/
    getFormatColor(format, color){
        if(this.checkFormat(format) && this.checkColor(color)){
            let result = '';
            result += this.START_STRING
            result += this.getRain(format);
            result += this.DELIMETER;
            result += this.getRain(color);
            result+= this.END_STRING
            return result
        }
        return null;
    }

    /**
     * this function will return formatted background code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return formatted background code
     **/
    getFormatBG(format, background){
        if(this.checkFormat(format) && this.checkBG(background)){
            let result = ''
            result += this.START_STRING
            result += this.getRain(format);
            result += this.DELIMETER;
            result += this.getRain(background);
            result+= this.END_STRING
            return result
        }
        return null;
    }

    /**
     * this function will return colored background code
     *
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return colored bacground code
     **/
    getColorBG(color, background){
        if(checkColor(color) && checkBG(background)){
            let result = ''
            result += this.START_STRING
            result += this.getRain(color);
            result += this.DELIMETER;
            result += this.getRain(background);
            result+= this.END_STRING
            return result
        }
        return null;
    }

    /**
     * this function will return rainbowed code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return rainbowed code
     **/
    getRainbow(format, color, background){
        if(this.checkFormat(format) && this.checkColor(color) && this.checkBG(background)){
            let result = ''
            result += this.START_STRING
            result += this.getRain(format);
            result += this.DELIMETER;
            result += this.getRain(color);
            result += this.DELIMETER;
            result += this.getRain(background);
            result+= this.END_STRING
            return result
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
        let formatCode = this.getFormat(format)
        if(formatCode != null){
            let result = ''
            result += formatCode
            result += str
            if(end){
                result += this.getFormat("reset")
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
        let colorCode = this.getColor(color);
        if(colorCode != null){
            let result = ''
            result += colorCode
            result += str
            if(end){
                result += this.getFormat("reset")
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
    getBGString(background, str, end){
        let backgroundCode = getBG(background);
        if(backgroundCode!=null){
            let result = ''
            result += backgroundCode
            result += str
            if(end){
                result += this.getFormat("reset")
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
        let formatColorCode = this.getFormatColor(format, color);
        if(formatColorCode != null){
            let result = ''
            result += formatColorCode
            result += str
            if(end){
                result += this.getFormat("reset")
            }
            return result
        }
        return null;
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
    getFormatBGString(format, background, str, end){
        let formatBGCode = this.getFormatBG(format, background);
        if(formatBGCode != null){
            let result = ''
            result += formatBGCode
            result += str
            if(end){
                result += this.getFormat("reset")
            }
            return result
        }
        return null;
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
    getColorBGString(color, background, str, end){
        let colorBGCode = this.getColorBG(color, background);
        if(colorBGCode != null){
            let result = ''
            result += colorBGCode
            result += str
            if(end){
                result += this.getFormat("reset")
            }
            return result
        }
        return null;
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
        let rainbowCode = this.getRainbow(format, color, background);
        if(rainbowCode != null){
            let result = ''
            result += rainbowCode
            result += str
            if(end){
                result += this.getFormat("reset")
            }
            return result
        }
        return null;
    }
}