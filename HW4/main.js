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
const pairsDef = givePairs(students);

/*ф-ція встановлює теми для пар студентів*/
function setThemes(students,themes){ 
	let newArr = [];
	newArr = [...students];
	for (let i = 0; i < students.length; i++) {
		newArr[i].push(themes[i]);
	} return newArr;
}

const themesDef = setThemes(givePairs(students),themes);

/*ф-ція встановлює оцінку для студента*/
function getMarks(stud, mark) {
     let newArray = [];
     for(let i = 0; i < stud.length; i++) {
          newArray[i] = [[stud[i]], [mark[i]]];
     }
     return newArray;
}
const marksDef = getMarks(students,marks);


/*ф-ція встановлює випадкові оцінки для студентів*/
function setMarksRandom(themesAndStudents){ 
	let newArr = [];
	newArr = [...themesAndStudents];
	for (let i = 0; i < themesAndStudents.length; i++) {
		newArr[i].push(Math.ceil(Math.random() *  5));
	} return newArr;
}
const randomDef = setMarksRandom(setThemes(givePairs(students),themes));

console.log(pairsDef);
console.log(themesDef);
console.log(marksDef);
console.log(randomDef);