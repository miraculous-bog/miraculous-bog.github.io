const getMaxDigit = (n) => +Math.max(...(n + '').split(''));

function degreeOfNumber(a,b) {
let result = a;
	if (b===1) {
		return a;
	}
	if (b===0) {
		return 1;
	}
	else if(b === -1) {
		return 1/a;
	}
	else if(b>1) {
		for (i=2; i<=b; i++){
			result *= a;
		} return result;
	}
	else if(b<1) {
		for (i=2; i <= Math.abs(b); i++){
			result *= a;
		} return 1/result;
	}
}

function rightName(s){
	return s[0].toUpperCase() + s.substr(1).toLowerCase();
}

function getTax(z) {
	let vid = z / 100 * 19.5;
	return z - vid;
}

function getRand(n, m) {
  n = Math.ceil(n);
  m = Math.floor(m);
  return Math.floor(Math.random() * (m - n + 1)) + n; 
}


function countSymbol(arr,l) {

	function contains(arrReadyTwo, lTwo) {
    for (let i = 0; i < arrReadyTwo.length; i++) {
        if (arrReadyTwo[i] === lTwo) {
            return true;
        }
    }
    return false;
}

	let arrReady = arr.split('');
    var v, newArray = [];

    for (let i =0; i <= arrReady.length - 1; i++  ) { 
        v = arrReady[i];
        if (newArray[v]) {
         newArray[v] += 1;
        }
        else newArray[v] = 1;
    } if(contains(arrReady,l)) { return newArray[l]; } 
    else return console.log('такого елемента немає');
    
}





 function exc(nu) {
 	let num = +(nu.substring(0, nu.length - 1));
 	let num2 = +(nu.substring(0, nu.length - 3));
	let cur = nu.split('');
	let cur2 = cur[nu.length - 1];
	if (cur2 === '$') {
			return (num * 27) + '$';
	} else if ((cur2 === 'H') || (cur2 === 'h')) {	
	return (num2 / 27) + '$';
	} else return console.log('дана валюта не конвертується, тільки uah або $');
}




function getPassword(len) {
	let pass = '';
	for (let i = 0; i <= len; i++){
		pass = pass + Math.floor(Math.random() * 10);
	} return pass;
}

 function palindrom(words) {
    let wordsS = words.length;
    let result = '';
    for (let i = 0; i < wordsS; i++) {
      if (words[i] === words[wordsS - 1 - i]) { 
       return result = 'так';
      } else {
   		return result = 'так';
      }
    }
  } 

document.writeln(`<p>(№1) максимальна цифра ${getMaxDigit(1236)}</p>`);
document.writeln(`<p>(№2) піднести до степеня  ${degreeOfNumber(2,5)}</p>`);
document.writeln(`<p>(№3) ім'я з великою літери ${rightName('богДан')}</p>`);
document.writeln(`<p>(№4) податок від зп  ${getTax(1000,19.5)}</p>`);
document.writeln(`<p>(№5) рандомне число від n до m ${getRand(17, 29)}</p>`);
document.writeln(`<p>(№6) скільки букв повторюється ${countSymbol('асталавіста', 'а')}</p>`)
document.writeln(`<p>(№7) конвертація $ в UAH ${exc('100$')}</p>`)
document.writeln(`<p>(№8) генерація паролів ${getPassword(7)}</p>`)
document.writeln(`<p>(№10) паліндром  ${palindrom('пилип')}</p>`)
