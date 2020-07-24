let first = parseInt(prompt('enter first number'));
let second = parseInt(prompt('enter second number'));
let pair = confirm('do you need pair numbers');
let sum = first;

function isInt(num) {
if ( parseInt( num ) != num ) {
    a = false;
} else {
    a = true;
} return a;
}
 

function pl(num) { return ((num % 2) == 0 ? c = true : c=false);}

if (isInt(first) && isInt(second)) {
	if (pair) {
		for (i = first; i<=second; i++ ) {
			if (pl(i)) {
				sum = sum + i;			
			} 
		}
	} else 
		for (i = first; i<=second; i++ ) {
			if (!pl(i)) {
				sum = sum + i;			
			} 
		} 
} else { 
	first = parseInt(prompt('enter first number'));
	second = parseInt(prompt('enter second number'));
}
console.log(sum-1);
