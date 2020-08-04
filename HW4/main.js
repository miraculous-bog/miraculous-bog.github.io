const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
/*ф-ція формує пари студентів*/
function givePairs(students) {
	let pairs = 2; 
	let arrPairs = [];
	for (let i = 0; i <students.length/pairs; i++) {
	    arrPairs[i] = students.slice((i*pairs), (i*pairs) + pairs);
	}
	return arrPairs;
}
console.log(givePairs(students));

/*ф-ція встановлює теми для пар студентів*/
function setThemes(students,themes){ 
	let newArr = [];
	newArr = [...students];
	for (let i = 0; i < students.length; i++) {
		newArr[i].push(themes[i]);
	} return newArr;
}

console.log(setThemes(givePairs(students),themes));

/*function setMarks(st,marks){ 
	let newMarksArr = [];
	newMarksArr = [...st];
	for (let i = 0; i < st.length -1; i++) {
		newMarksArr[i].push(marks[i]);
	} return console.log(newMarksArr);
}

setMarks(students,marks);*/

/*ф-ція встановлює випадкові оцінки для студентів*/
function setMarksRandom(a){ 
	let newArr = [];
	newArr = [...a];
	for (let i = 0; i < a.length; i++) {
		newArr[i].push(Math.ceil(Math.random() *  5));
	} return newArr;
}

console.log(setThemes(givePairs(students),themes));

let newm1;
let newm2 = [...students];
for (let i =0; i < marks.length; i++) {
	newm1 = marks.slice(0,1).join();
	newm2 = newm2[i].push(newm1);
} console.log(newm2);