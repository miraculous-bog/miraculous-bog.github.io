class StudentsInfo {
  constructor(university,course,fullName,allmarks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.allmarks = [5, 4, 4, 5];
    this.status = true;
  }
  get fullInfo() {
    return 'студент' + ' ' + this.course + 'го курсу ' + this.university + ' ,' +this.fullName;
  }
  get marks() {
    if(this.status) return this.allmarks;
    else return null;
  }
  set marks(num) {
    if(this.status) return this.marks.push(num);
    else return null;
  }
  AverageMark() {
    let sum = 0;
    let i = 0;
    this.marks.forEach((el) => {
      sum += el;
      i++;
    });
    return console.log(sum / i);
}
  out() {
    return this.status = false;
  }
  back() {
   return this.status = true; 
  }
}
const student = new StudentsInfo('KNU','1','Bogdan Shevchuk');

console.log(student.fullInfo);
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
student.AverageMark();
student.out();
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
student.back();
console.log(student.marks);


