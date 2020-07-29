 let first = Number(prompt('enter first number'));
let	second = Number(prompt('enter second number'));

while ((!Number.isInteger(first) || !Number.isInteger(second))
 || second<first)  {
 	if (second<first) {
	first = Number(prompt('enter first number,second>first!'));
	second = Number(prompt('enter second number,second>first!'));}
	else  {
	first = Number(prompt('enter first number'));
	second = Number(prompt('enter second number'));}
} 

let even = confirm('do you need scip even numbers');
let sum = first;


function pl(num) { return ((num % 2) == 0 ? c = true : c=false);}


	if (!even) {
		for (i = first; i<=second; i++ ) {
				sum = sum + i;			 
		}
	} else 
		for (i = first; i<=second; i++ ) {
			if (!pl(i)) {
				sum = sum + i;			
			} 
		} 

console.log(sum-1);


/*function isInt(num) {
if ( parseInt( num ) != num ) {
    a = false;
} else {
    a = true;
} return a;
}

let first;
let second;
do { 
	first = parseInt(prompt('enter first number'));
	second = parseInt(prompt('enter second number'));
} while(isInt(first) & isInt(second));*/