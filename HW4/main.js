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


function i(coupleAfterI) {
	let arrI=[...coupleAfterI];
	for (let i = 0; i<arrI.length; i++){
		arrI[i] = arrI[i].join(' і ');
	} return arrI;
}

console.log(i(givePairs(students)));
/*ф-ція встановлює теми для пар студентів*/
function setThemes(students,themes){ 
	let newArr = [];
	newArr = [...students];
	for (let i = 0; i < students.length; i++) {
		newArr[i].push(themes[i]);
	} return newArr;
}

console.log(setThemes(givePairs(students),themes));


/*------------------------------------*/
function getMarks(stud, mark) {
     let newArray = [];
     for(let i = 0; i < stud.length; i++) {
          newArray[i] = [[stud[i]], [mark[i]]];
     }
     return console.log(newArray);
}
getMarks(students,marks);
/*ф-ція встановлює випадкові оцінки для студентів*/
function setMarksRandom(a){ 
	let newArr = [];
	newArr = [...a];
	for (let i = 0; i < a.length; i++) {
		newArr[i].push(Math.ceil(Math.random() *  5));
	} return newArr;
}

console.log(setMarksRandom(setThemes(givePairs(students),themes)));

