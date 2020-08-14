//(1)функція повертає масив випадкових чисел із заданою довжиною та числовими параметрами
function f(arr,min,max){
	let arrNew = [];
	min = Math.ceil(min);
	max = Math.floor(max);
	for (let i = 0; i < arr; i++) {
		arrNew[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	} return arrNew;
}
console.log(f(10,5,10));

//(3) функція знаходить середні значення при цьому ігнорує не цілі числа 
let arrA = [6.3, 2.5, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getAverage(arr){
	sum = 0;
  const fil = arr.filter(el => el%1 === 0);
  fil.forEach((arrEl) => {
  	sum += arrEl;
  }); return sum / fil.length;
}

console.log(getAverage(arrA));

//(4) знаходження медіани
let arrMed = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getMediana(arr){
	let i;
	const sorted = arr.sort((a,b) =>  a - b);
	i = arr.length / 2;
	if ((arr.length % 2) === 0){
		return (sorted[i] + sorted[i+1]) / 2;
	} else {
		return sorted[Math.floor(i)];
	}
}
console.log(getMediana(arrMed));

//(5) філтрує парні числа
let numbers = [1, 2, 3, 4, 5, 6];

	const filterEvenNumbers = numbers.filter((el) => { 
		return (el % 2) !== 0; 
	});

console.log(filterEvenNumbers);
//(6) функція рахує кількість елементів більше за 0 
 let arrP =[1, -2, 3, -4, -5, 6];

 function countPositiveNumbers(arr) {
 	return arr.filter((el) => el > 0).length; 
 }
 console.log(countPositiveNumbers(arrP));

 //(7) ф-ція видає числа, які ділять націло на 5
 const getDividedByFive = (...numbers) => {
 	return numbers.filter((el) => (el % 5)==0);
 }
 console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
