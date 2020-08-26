const ukraine = { 
  countryName: 'ukraine',
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476 
};
const latvia = {
  countryName: 'latvia', 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 
};
const litva = { 
  countryName: 'litva',
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114 
};

function getMyTaxes(salary) {
  let moneyTax = this.tax * salary;
  return console.log(moneyTax);
}
getMyTaxes.call(latvia, 2000);

function getMiddleTaxes() {
  return (this.countryName) + " " + this.tax * this.middleSalary;
}
[ukraine,latvia,litva].forEach((el) => {
  console.log('average number of taxes (it) in ',getMiddleTaxes.call(el));
});

function ggetTotalTaxes() {
  return (this.countryName) + " " + this.tax * this.middleSalary * this.vacancies;
}
[ukraine,latvia,litva].forEach((el) => {
  console.log('all taxes (it) in ',ggetTotalTaxes.call(el));
});

function getMySalary() {
    let salLet = Math.floor(Math.random() * (501)) + 1500; 
    let taxLet = salLet * this.tax; 
    let profLet = salLet - taxLet; 
    let obj = {
      salary: salLet,
      taxes: taxLet,
      profit: profLet, 
    };
  return obj;
}
console.log(getMySalary.call(ukraine));
const ukSecond = setInterval(() => console.log(getMySalary.call(ukraine)), 10000);

console.log(getMySalary.call(litva));
const liSecond = setInterval(() => console.log(getMySalary.call(litva)), 10000);

console.log(getMySalary.call(latvia));
const laSecond = setInterval(() => console.log(getMySalary.call(latvia)), 10000);