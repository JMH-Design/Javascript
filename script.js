const firstName = "Jared";
const job = "Product Designer";
const birthYear = 1992;
const currentYear = 2037;

const jared =
  "I'm" + " " + firstName + " " + "a" + " " + (currentYear - birthYear);
console.log(jared);

const jaredNew = `I'm ${firstName}, a ${job} , born in ${birthYear} but currently live in ${currentYear}`;
console.log(jaredNew);
