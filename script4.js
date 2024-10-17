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

calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} to ${avgKoalas} `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} to ${avgDolphins}`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Arrays

const friends = ['Joona', 'Patrick', 'Keegan', 'Nick', 'Kyle', 'Rumpskeet'];
const newFriends = friends.push('Parker');
console.log(friends);

const years = new Array(1992, 1957, 1959, 2002, 1989, 1998);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const Jared = ['Jared', 'Haggit', 'jmhaggit@gmail.com', 32, friends];
console.log(Jared);

const yearArray = [1992, 1989, 1998, 2002];

calcAge2 = (year) => 2037 - year;
console.log(calcAge2(yearArray[2]));
console.log(calcAge2(yearArray[0]));
console.log(calcAge2(yearArray[1]));
console.log(calcAge2(yearArray[3]));

const ages = [
  calcAge2(yearArray[2]),
  calcAge2(yearArray[0]),
  calcAge2(yearArray[1]),
];
console.log(ages);

console.log(newFriends);
friends.unshift('Raya');
console.log(friends);

friends.pop(friends);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Rumpskeet'));
console.log(friends.includes('Save'));

if (friends.includes('Joona')) {
  console.log('You have a baby name Joona');
}

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}
calcTip(100);
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

function calcTotals(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15 + billValue;
  } else {
    return billValue * 0.2 + billValue;
  }
}
const totals = [
  calcTotals(bills[0]),
  calcTotals(bills[1]),
  calcTotals(bills[2]),
];
console.log(totals);
