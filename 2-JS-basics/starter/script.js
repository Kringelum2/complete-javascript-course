/*****************************
 * Variables and data types
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "john and Mark";
var if = 23;

var is10higher = 10 > 48;
console.log("er 10 højere end 48? " + is10higher);
*/

/*****************************
 * Variable mutation and type coercion
 */
/*
var firstName = "John";
var age = 28;

//type coercion
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);


// Variable mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("what is his last name?");
console.log(firstName + " " + lastName);
*/

/*****************************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
var now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "mark is older than John");
var x;
console.log(typeof x);
*/

/*****************************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

// Coding challenge 1

var massMark = 85;
var heightMark = 1.80;

var massJohn = 75;
var heightJohn = 1.70;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var isMarkBmiHigher = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + isMarkBmiHigher);
