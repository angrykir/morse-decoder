const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const decimalArr = expr.match(/.{10,10}/g);

    const morzeArr = decimalArr.map(e => e.match(/.{2,2}/g));

    for (let i = 0; i < morzeArr.length; i++) {
     for (let j = 0; j < morzeArr[i].length; j++) {
      if (morzeArr[i][j] === '00') {
        morzeArr[i][j] = '';
      } else if (morzeArr[i][j] === '10') {
        morzeArr[i][j] = '.';
      } else if (morzeArr[i][j] === '11') {
        morzeArr[i][j] = '-';
      }
    }
    }

    const morzeArrStr = morzeArr.map(e => e.join(''));

    function getValues(e) {
      if (e === '**********') {
        e = ' '
      } else {
         e = MORSE_TABLE[`${e}`]
      }
      return e;
    };
    
    const wordArrStr = morzeArrStr.map( e => getValues(e));
    
    const decodeStr  =  wordArrStr.join('');

    return decodeStr

}

module.exports = {
    decode
}

