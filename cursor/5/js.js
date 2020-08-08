/*let numbers = [1,34,436];
function displayItems(arr, cb) {
	for (let i = 0; i < arr.lenght; i++){
		cb && cb(arr[i], i);
	}
}

displayItems(numbers, (item, i) => {
	console.log(i,item);
});*/

/*const names = ['Anna', 'Ihor', 'Kate', 'Vlad'];

names.forEach((name, index, arr) => {
    document.writeln(`${index + 1}. My name is ${name}. Next name is ${arr[index+1]} <br>`);
});*/
/*const names = ['Anna', 'Ihor', 'Kate', 'Vlad'];

names.forEach((item)=> console.log(item.toUpperCase()));*/


/*let numbers = [1,34,436];

function doubleFunc(arr){
	let newArr = [];
	arr.forEach(item => {
		newArr.push(item * 2);
	}); return newArr;
}

console.log(doubleFunc(numbers));*/

/*let numbers = [1,34,436];

function doubleFunc(arr){
	return arr.map(item => item * 2); 
}

console.log(doubleFunc(numbers));*/
/*let numbers = [1,34,436];
const numBiiger = numbers.filter((el) => el > 10);

console.log(numBiiger);*/

const numberSets = [[0,1,14],[132,3,1],[1,4,8]];

let result = numberSets.findIndex(function(set) {
	let sum = 0;
	set.forEach(n => sum += n);
	return sum > 10;
});
console.log('result:', result);