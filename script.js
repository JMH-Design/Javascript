'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
If(hasDriversLicense);
console.log('Sample');

//Functions
function logger() {
  console.log('My name is Jared');
}
// Calling/running/invoking the fuction
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function gradeInClass(homework, exams) {
  const score = (homework + exams) / 2;
  return score;
}
const firstExam = gradeInClass(87, 95);
console.log(firstExam);

const secondExam = gradeInClass(78, 90);
console.log(secondExam);

function courseScore(secondExam, firstExam) {
  const classScore = (firstExam + secondExam) / 2;
  return classScore;
}
const sample = courseScore(90, 56);
console.log(sample);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1992);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age1, age2);

const age3 = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1878));
