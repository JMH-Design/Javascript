const firstName = "Jared";
const job = "Product Designer";
const birthYear = 1992;
const currentYear = 2037;

const jared =
  "I'm" + " " + firstName + " " + "a" + " " + (currentYear - birthYear);
console.log(jared);

const jaredNew = `I'm ${firstName}, a ${job} , born in ${birthYear} but currently live in ${currentYear}`;
console.log(jaredNew);

const age = 15;
if (age >= 18) {
  console.log("sarah can start driving license 😍");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}
const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = "20th";
} else {
  century = "21st";
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let higherBMI;
if (BMIJohn > BMIMark) {
  higherBMI = "Johns BMI is higher than Marks";
} else {
  higherBMI = "Marks BMI is higher than Johns";
}
console.log(higherBMI);


let higherBMI;
if (BMIJohn > BMIMark) {
  higherBMI = `Johns BMI ${BMIJohn} is higher than Marks`;
} else {
  higherBMI = `Marks BMI of ${BMIMark} is higher than Johns BMI of ${BMIJohn}`;
}
console.log(higherBMI);
let fatJohn;
if (BMIJohn > BMIMark) {
  fatJohn = "John is so fat";
} else {
  fatJohn = "Mark is so fat";
}
console.log(fatJohn);


// type conversion

const inputYear = "1991";
const z = Number(inputYear);
console.log(Number(inputYear));
console.log(z + 18);

//Type Coercion

const money = 100;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("you should get a job");
}
let height = 1;
if (height > 2) {
  console.log("YAY height");
} else {
  console.log("NArrrr height");
}

const age = 18;
if (age === 18) {
  console.log("Welcome to adulthood Jackass");
} else {
  console.log("Stay here, as long as you can");
}

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 8) {
  console.log("cool, 8 is an amazing number");
} else if (favorite > 8) {
  console.log("you picked the wrong number bud");
} else if (favorite < 7) {
  console.log("Terrible number");
} else {
  console.log("alksdjflaksdjf");
}
if (favorite !== 8) {
  console.log("to be determined");
}
*/
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
const isTired = false;
console.log((hasDriversLicense && hasGoodVision) || isTired);
