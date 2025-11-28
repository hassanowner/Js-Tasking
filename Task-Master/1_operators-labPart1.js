/* ============================================================
   JavaScript Fundamentals – Combined Test Tasks
   This file contains all tests merged together in one place.
   Topics included:
   1. Data Types & typeof
   2. Variables Introduction
   3. Identifiers Naming Rules
   4. Var / Let / Const Differences
   5. String Syntax & Escape Sequences
   6. Concatenation
   7. Template Literals
============================================================ */

/* ============================================================
   Test Task 1 – Data Types + typeof
   Explanation:
   This task helps you understand the main JavaScript data types
   and how to use typeof to check the value type.
============================================================ */

console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);       // Arrays are objects
console.log(typeof { name: "Osama" });  // Object
console.log(typeof true);               // Boolean
console.log(typeof false);              // Boolean
console.log(typeof undefined);          // Undefined
console.log(typeof null);               // Object (JavaScript bug)

// Your own values
let myString = "Learning JS";
let myNumber = 2025;
let myObject = { skill: "JavaScript", level: "Beginner" };

console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myObject, typeof myObject);





/* ============================================================
   Test Task 2 – Variables Introduction
   Explanation:
   Learn how to create variables, store values, and print them.
============================================================ */

var user = "Sayed";
console.log(user);

let userName = "Hassan";
let userAge = 20;
let userCountry = "Iraq";

console.log(`User: ${userName}, Age: ${userAge}, Country: ${userCountry}`);





/* ============================================================
   Test Task 3 – Identifiers Rules
   Explanation:
   Practice writing valid variable names and avoiding reserved words.
============================================================ */

var correctName = "Sayed";
console.log(correctName);

// Valid identifiers
let fullName = "Ali";
let total_score = 150;
let $price = 99;
let _value = "Hello";
let user2Data = "Test";

// Invalid identifier (reserved word)
// let var = 5; // ERROR





/* ============================================================
   Test Task 4 – Var / Let / Const
   Explanation:
   Demonstrates how each keyword behaves with redeclaration,
   reassignment, and general rules.
============================================================ */

// var → Can be redeclared
var x = 10;
var x = 20; // Works
console.log(x);

// let → Cannot be redeclared
let y = 15;
// let y = 30; // ERROR

// const → Value cannot change
const PI = 3.14;
// PI = 5; // ERROR





/* ============================================================
   Test Task 5 – String Escape Sequences
   Explanation:
   Shows how to use escape characters like \" \' \\ \n
============================================================ */

// Original examples
console.log("Elzero Web \"School\"");
console.log('Elzero Web \'School\'');
console.log('Elzero \\ Web');
console.log("Elzero\nWeb\nSchool");

// Your task example
console.log("Hello \"JS\" \\ Welcome\nTo Learning JavaScript!");





/* ============================================================
   Test Task 6 – String Concatenation
   Explanation:
   Practice joining strings using + operator.
============================================================ */

let a = "We Love";
let b = "JavaScript";
console.log(a + " " + b);

// Your task
let part1 = "Learning";
let part2 = "JavaScript";
console.log(part1 + " " + part2 + " Is Fun!");





/* ============================================================
   Test Task 7 – Template Literals
   Explanation:
   Using backticks (`) to embed variables and create formatted text.
============================================================ */

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <h2>${title}</h2>
    <p>${desc}</p>
  </div>
`;

document.write(markup);

// Your task (product card)
let product = "Laptop";
let price = 750;

let productCard = `
  <div class="item">
    <h3>${product}</h3>
    <p>Price: $${price}</p>
  </div>
`;

document.write(productCard);

