function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function myFunction() {
  Alert(
    `Jared & Joona's love capatibility score is ${getRandomArbitrary(1, 100)}`
  );
}

if (getRandomArbitrary(1, 100) >= 75) {
  alert('You are a match made in heaven'),
    console.log(
      `Jared & Joona's love capatibility score is ${getRandomArbitrary(1, 100)}`
    );
} else if (getRandomArbitrary(1, 100) >= 50) {
  alert('Your future viability is unsure'),
    console.log(
      `Jared & Joona's love capatibility score is ${getRandomArbitrary(1, 100)}`
    );
} else {
  alert('You are not compatible'),
    console.log(
      `Jared & Joona's love capatibility score is ${getRandomArbitrary(1, 100)}`
    );
}
var guestList = ['Jared', 'Joona', 'Jack', 'Daniels', 'Solo'];
var guestName = prompt('What is your name');
if (guestList.includes('Jared')) {
  alert('Welcome to the party');
} else {
  alert('Get out of here');
}

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push('fizzBuzz');
  } else if (count % 5 === 0) {
    output.push('buzz');
  } else if (count % 3 === 0) {
    output.push('Fizz');
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}

const guestList = ['Jared', 'Joona', 'Timmy', 'Jimmy'];
console.log(guestList[1]);

var beer = 99;
function bottlesOfBeer() {
  while (beer <= 99) beer--;
}

bottlesOfBeer();
while (condition) {}

// arrow functions
// Syntax

() => 'Expression'
(param) => 'Expression'
(param,param2) => 'expression'
 

function cutsFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutsFruit(apples);
  const orangePieces = cutsFruit(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const birthYear = 1992;
const age = 2037 - birthYear;

function retirement(birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}
years.`;
}
console.log(retirement(1992, 'Jared'));

