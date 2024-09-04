// VALUES AND VARIALBLES
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programer";
// let myCurrentJob = "Teacher";

// let job1 = "programer";
// let job2 = "teacher";

// console.log(myFirstJob);

/////////////////////////////////////////////////////////////////////////////
//DATA TYPES: number, string, boolean, undefined, Null, symbol, bigint

// let javaScriotIsFun = true;
// console.log(javaScriotIsFun);

//console.log(typeof true);
//console.log(typeof javaScriotIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

// javaScriotIsFun = "YES!";
// console.log(typeof javaScriotIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////////////////////////////////////////////////////
// LET CONST VAR
// let age = 30;
// age = 31;

// const birthYear = 1991;
//birthYear = 2000; error
//const job; error
// var job = "programer";
// job = "teacher";

// lastName = "Shmedtmann";
// console.log(lastName);

/////////////////////////////////////////////////////////////////////////////////////
//BASIC OPERAOTORS

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "joans";
// const lastName = "Shmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2019);

/////////////////////////////////////////////////////////////////////////
//OPERATOR PRECENDENCE

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2019);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

///////////////////////////////////////////////////////////////////////////////
//CODE CHALENGE #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMImark > BMIjohn;

// console.log(BMImark, BMIjohn, markHigherBMI);

////////////////////////////////////////////////////////////////////////////////
//STRINGS and TEMPLATE LITERALS

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const joans =
//   "I'm" +
//   " " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " years old " +
//   job +
//   "!";

// console.log(joans);

// const jonasNew = `I'am ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// console.log(`just a normal string...`);

///////////////////////////////////////////////////////////////////////////
//IF ELSE
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. wait another ${yearsLeft} years 😉`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

/////////////////////////////////////////////////////////////////////////
//CHALENGE 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);
// console.log(BMImark, BMIjohn);

// if (BMImark > BMIjohn) {
//   console.log(`Mark BMI (${BMImark}) is higher than Jonas (${BMIjohn})!`);
// } else {
//   console.log(`Jonas BMI (${BMImark}) is higher than Marks  (${BMIjohn})!`);
// }

///////////////////////////////////////////////////////////
//TYPE CONVERSION AND COERCION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);

// console.log(inputYear + 18);
// console.log(Number("jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// //type coercion
// console.log("i am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

/////////////////////////////////////////////////////////////////
//truthly and falsy values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;

// if (money === 0) {
//   console.log("Dont spend it all;");
// } else {
//   console.log("You should get a job");
// }

///////////////////////////////////////////////////////////////////
//equal operators
// const age = 18;
// if (age === 18) console.log("You just became an adult");

// if (age == 18) console.log("You just became an adult (looses)");

// const favorite = Number(prompt("Wats your favorite number"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("cool!");
// } else if (favorite === 7) {
//   console.log("7 is also cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

/////////////////////////////////////////////////////////////////////////
//boolean logic
