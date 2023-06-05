let value = true + 5;
console.log(typeof value);

let value1 = true + 5;
console.log(value1);

let value2 = String({ name: "Daniel" });
console.log(typeof value2);
let value3 = 30 + " " + 30;
console.log(value3);

let inputYear = "1991";
console.log(Number(inputYear), inputYear);

console.log("20" / "10" / 3);

let grade = "A";
let result = 0;
switch (grade) {
  case "A":
    result += 10;
  case "B":
    result += 9;
    break;
  case "C":
    result += 8;
}
console.log(result);

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  let juice = `'Juice with ${apple} apple and ${orange}  orange!'`;
  return juice;
}

console.log(fruitProcessor(5, 6));

var num = Number("23");
console.log(typeof num);

function callAge(birthYeah) {
  return 2037 - birthYeah;
}
let age1 = callAge(1998);
console.log(age1);
let callAge1 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = callAge1(1998);
console.log(age1, age2);

// arrow function
const yearUntilRetiirement = (birthYear, name) => {
  const age5 = 2037 - birthYear;
  const retires = 65 - age5;
  return `${name} is retires for ${retires} year`;
};
const retire1 = yearUntilRetiirement(1998, "Phuong");
console.log(retire1);

//hàm trong hàm
function cutFruitMarchine(fruit) {
  return fruit * 5;
}

function fruitProcessor(apple, orange) {
  const appleJuicePeaces = cutFruitMarchine(apple);
  const orangeJuicePeaces = cutFruitMarchine(orange);

  let juice = `'Juice with ${appleJuicePeaces} peaces of apple and ${orangeJuicePeaces} peaces of orange!'`;
  return juice;
}

console.log(fruitProcessor(5, 6));

const retireYear = function (birthOfyear) {
  return 2037 - birthOfyear;
};
function yearUntilRetiirement1(birthYear, name) {
  const yasuminen = retireYear(birthYear);
  return `${name} is retires for ${yasuminen} year`;
}

console.log(yearUntilRetiirement(1998, "Phương"));

//array
const aray = ["Jonas", "Mary", "Molly"];
console.log(aray);

aray.push("Jay");

console.log(aray);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedman",
  birthYear: 1991,
  job: "teacher",
  hasDriverLicense: true,
  friends: ["Michael", "Peter", "Steven"],
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } , and he has ${this.hasDriverLicense ? "a" : "no"} dirver's license.`;
  },
};

console.log(
  `Jonas has ${jonas.friends.length} , and his best friends called ${jonas.friends[0]}`
);
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
}

const jonasArray = [
  "Jonas",
  "Schmemann",
  "teacher",
  2037 - 1991,
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// function getRandNumbers(length, min, max) {
//   let result = [];
//   for (let i = 0; i < getRandNumbers.length; i++) {
//     result[i] = Math.random() * (max - min) + min;
//   }
//  return result;
// }
// getRandNumbers(10, 5, 50);

function getRandNumbers(min, max, length) {
  var arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.random() * (max - min) + min);
  }
  return arr;
}
console.log(getRandNumbers(1, 50, 20));

const years = [1998, 2008, 2000, 2003, 2012];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

for (ex = 1; ex < 8; ex++) {
  console.log(`Ex ${ex} is start`);

  for (rep = 1; rep < 6; rep++) {
    console.log(`Fifting starting ${rep}🐳🐬🐬`);
  }
}
let rep1 = 1;
while (rep1 <= 10) {
  console.log(`While ${rep1} 😎😋😋😎😘`);
  rep1++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you lose a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`loose`);
  }
}
