'use strict';
// Javascript Variables

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
console.log(appleOrangeJuice, appleJuice);

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
const sample2 = courseScore(90, 56);
console.log(sample2);

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

const day = 'tuesday';
switch (day) {
  case 'tuesday':
    console.log('today is tuesday');
    break;

  default:
    console.log('nothing');
    break;
}
function sampleName() {
  console.log('My name is Jared');
}
sampleName();

function getMilk() {
  console.log('moveright');
  console.log('moveright');
  console.log('moveright');
  console.log('moveleft');
}

const milkPrice = 2;
function getMilk(money) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log(`buy ${Math.floor(money / milkPrice)} bottles of milk`);
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}
getMilk(20);

function lifeInWeeks(age) {
  /************Don't change the code above************/
  const x = 365;
  const y = 52;
  const z = 12;
  const w = 90 - age;
  console.log(
    `You have ${w * x} days, ${w * y} weeks, and ${w * 12} months left.`
  );
}
lifeInWeeks(32);
lifeInWeeks(26);

function lifeInWeeksRaya(age) {
  const x = 365;
  const y = 52;
  const z = 12;
  const w = 12 - age;
  console.log(
    `You have ${w * x} days, ${w * y} weeks, and ${w * 12} months left.`
  );
  return age;
}
const sample5 = lifeInWeeksRaya(3);
console.log(sample5);
