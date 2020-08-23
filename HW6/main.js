const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

let a = +(prompt("ведіть номер студента (1-3)"));

// коректно виводимо перелік предметів певного студента
let num = [];
let arrOfSub = Object.keys(students[0].subjects);
  arrOfSub.forEach((el,i) => {
  num[i] = el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase().replace('_', ' ');
}); 
console.log((students[a-1].name) +' '+ num);

// ф-ція знаходження сер.значення оцінок студента
function averageValue(studAv) {
let sum =1, i = 0;
const averageArr = (Object.values(studAv.subjects));
 for (let j = 0; j < 3; j++) {
    averageArr[j].forEach((el) => {
      sum += el;
      i++;
    }); 
  }
  let avRes = sum / i;
  return avRes = avRes.toFixed(2);
}
console.log(averageValue(students[a-1]));

//вивід інф. студента 
function info(stud) {
  return console.log("Курс",stud.course,"Ім'я",stud.name,"Сер.оцінка",averageValue(stud));
}
info(students[a-1]);

// сортування студентів по імені
function getNameSort() {
  return students.map((student) => student.name).sort();
}
console.log(getNameSort());

// знаходження найуспішного студента
function getBestStud(students) {
  let arrMarks = [];
  let maxNum;
  for (let i = 0; i < 3; i++){ 
    arrMarks[i] = +(averageValue(students[i]));
  }
  maxNum = Math.max(...arrMarks);
  const topMark = students.find((el) => +(averageValue(el)) === maxNum);
  return topMark.name;
}
console.log(getBestStud(students));

// створюємо об'єкт, в якому буде виводитися окремі символи рядка (ключі) та кількість їх потворів(значення)
function getCountSyb(word) {
  let arr = [];
  arr = word.split('');
  let result = {};

  for (let i = 0; i < arr.length; ++i)
  {
      let a = arr[i];
      if (result[a] != undefined)
          result[a]++;
      else
          result[a] = 1;
  } return result;
}
console.log(getCountSyb("тест"));