module.exports = function toReadable(number) {
    const hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10),
        ones = number - hundreds * 100 - tens * 10;
    if (tens === 1) {
        tens = 0;
        ones = number - hundreds * 100;
    }

    const onesText = (ones) => {
        switch (ones) {
            case 0 :
                return number > 0 ? '' : 'zero';
            case 1 :
                return 'one';
            case 2 :
                return 'two';
            case 3 :
                return 'three';
            case 4 :
                return 'four';
            case 5 :
                return 'five';
            case 6 :
                return 'six';
            case 7 :
                return 'seven';
            case 8 :
                return 'eight';
            case 9 :
                return 'nine';
            case 10 :
                return 'ten';
            case 11 :
                return 'eleven';
            case 12 :
                return 'twelve';
            case 13 :
                return 'thirteen';
            case 14 :
                return 'fourteen';
            case 15 :
                return 'fifteen';
            case 16 :
                return 'sixteen';
            case 17 :
                return 'seventeen';
            case 18 :
                return 'eighteen';
            case 19 :
                return 'nineteen';
            default:
                return ''
        }
    };

    const tensText = (tens) => {
        switch (tens) {
            case 2:
                return 'twenty ';
            case 3:
                return 'thirty ';
            case 4:
                return 'forty ';
            case 5:
                return 'fifty ';
            case 6:
                return 'sixty ';
            case 7:
                return 'seventy ';
            case 8:
                return 'eighty ';
            case 9:
                return 'ninety ';
            default:
                return ''
        }
    };
    const hundredsText = hundreds ? onesText(hundreds) + ' hundred ' : '';
    return (hundredsText + tensText(tens) + onesText(ones)).trim()
};



