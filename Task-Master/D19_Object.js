/****************************************************
 *   FULL TEST TASK – OBJECTS (All Topics Included)
 *
 *   Covered Topics (In Order):
 *   1. Object Basics + Accessing Properties
 *   2. Dot Notation vs Bracket Notation + Dynamic Keys
 *   3. Nested Objects + Methods
 *   4. Creating Object Using new Object()
 *   5. this Keyword (Object Context + Global Context)
 *   6. Object.create()
 *   7. Object.assign()
 *
 *   The Main Idea:
 *   You will rewrite different object-related concepts,
 *   but each time with a fully new idea, new data, and
 *   a short explanation beside the code.
 ****************************************************/



/***********************
 * 1) Object Basics
 * Create an object representing a book.
 * Demonstrate properties + method + reading values.
 ***********************/
let book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  year: 2008,

  // Simple method returning a string
  describe: function () {
    return "This book is amazing!";
  },
};

// Expected Output:
// Clean Code
// Robert C. Martin
// 2008
// This book is amazing!
console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.describe());





/**************************************
 * 2) Dynamic Property Access
 * Dot notation vs bracket notation.
 * Using a variable as a dynamic key.
 **************************************/
let keyName = "level";

let player = {
  name: "Hassan",
  level: 10,
};

// Dot notation → direct access
console.log(player.name);   // Hassan
console.log(player.level);  // 10

// Accessing a key that does NOT exist
console.log(player.keyName); // undefined

// Bracket notation using dynamic key
console.log(player[keyName]); // 10





/*******************************************
 * 3) Nested Objects + Methods
 * Multiple levels inside the object.
 * Method calculates something based on data.
 *******************************************/
let student = {
  name: "Ali",
  grades: [90, 85, 88],

  address: {
    city: "Baghdad",
    details: {
      street: "Main",
      number: 22,
    },
  },

  // Method returns highest grade
  bestGrade: function () {
    return Math.max(...this.grades);
  },
};

console.log(student.name);                       // Ali
console.log(student.grades[2]);                  // 88
console.log(student.address.details.street);     // Main
console.log(student.bestGrade());                // 90





/***************************************
 * 4) Creating Object Using new Object()
 * Adding properties and methods afterward.
 ***************************************/
let device = new Object();

device.brand = "Samsung";
device.price = 300;

// Method using "this" to reference properties
device.info = function () {
  return `Brand: ${this.brand}, Price: ${this.price}`;
};

console.log(device.info());  // Brand: Samsung, Price: 300






/**********************************************
 * 5) this Keyword
 * Inside object → refers to the object itself
 * In global function → refers to window (browser)
 **********************************************/
let car = {
  speed: 120,

  showSpeed: function () {
    console.log(this);        // car object
    return `Speed is: ${this.speed}`;
  },
};

console.log(car.showSpeed()); // Speed is: 120

// Global context (in browser → window)
function test() {
  console.log(this); // window
  return this;
}

test();






/*************************************
 * 6) Object.create()
 * Create a new object based on another object.
 *************************************/
let base = {
  value: 50,

  double: function () {
    return this.value * 2;
  },
};

// Creating a new object inheriting from "base"
let obj = Object.create(base);

obj.value = 200; // Override value

console.log(obj.value);     // 200
console.log(obj.double());  // 400






/*************************************
 * 7) Object.assign()
 * Merge multiple objects into a new one.
 *************************************/
let objA = { a: 1 };
let objB = { b: 2 };
let objC = { c: 3 };

// Merge into a new object
let merged = Object.assign({}, objA, objB, objC);

// Add new property
merged.d = 4;

console.log(merged); // { a:1, b:2, c:3, d:4 }
