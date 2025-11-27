// ===============================
// JS Test Tasks – Using filter()
// ===============================

/*
GENERAL IDEA:
These tasks demonstrate the usage of JavaScript's filter() method.
Each task shows how to select elements from an array based on a condition:
- Task 1: Filter numbers
- Task 2: Filter objects (products)
- Task 3: Filter users based on active status
The output is always a new array containing only the elements that meet the criteria.
*/


// ===============================
// Task 1 – Filter High Scores
// ===============================

/*
TASK:
You are given an array of student scores.
Filter out only the scores that are 50 or higher (passing scores).
The final result should be an array of numbers that passed.
*/

var scores = [95, 12, 77, 49, 50, 100];

var passingScores = scores.filter(function(score) {
  return score >= 50;
});

console.log("Task 1 – Passing Scores:");
console.log(passingScores);
// Expected output: [95, 77, 50, 100]
console.log("---------------------------------------------------");








// ===============================
// Task 2 – Filter Available Products
// ===============================

/*
TASK:
You have an array of product objects. Each product has:
- name
- price
- inStock (true/false)

Filter the array to get only the products that are available (inStock = true).
The final result should be an array of product objects.
*/

var products = [
  { name: "Keyboard", price: 25, inStock: true },
  { name: "Mouse", price: 10, inStock: false },
  { name: "Monitor", price: 99, inStock: true },
  { name: "USB Cable", price: 5, inStock: true },
  { name: "Headphones", price: 40, inStock: false }
];

var availableProducts = products.filter(function(product) {
  return product.inStock === true;
});

console.log("Task 2 – Available Products:");
console.log(availableProducts);
/*
Expected output:
[
  { name: "Keyboard", price: 25, inStock: true },
  { name: "Monitor", price: 99, inStock: true },
  { name: "USB Cable", price: 5, inStock: true }
]
*/
console.log("---------------------------------------------------");








// ===============================
// Task 3 – Active Adult Users Only
// ===============================

/*
TASK:
You have an array of user objects. Each user has:
- fullName
- age
- active (true/false)

Requirements:
1- Filter the array to get only users who are ACTIVE AND age >= 21
2- For each filtered user, create a short message string:
   "USER: FirstName.MiddleInitial.LastName | Age: AGE | Status: ACTIVE"
3- The final result should be an array of strings
*/

var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 19, active: true },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

// Step 1: Filter ACTIVE users who are 21 or older
var activeAdults = users.filter(function(user) {
  return user.active === true && user.age >= 21;
});

// Step 2: Convert to formatted strings
var activeAdultsFormatted = activeAdults.map(function(user) {

  // Split full name
  var parts = user.fullName.split(" ");
  var firstName = parts[0];
  var middleInitial = parts[1].charAt(0).toUpperCase();
  var lastName = parts[2];

  var officialName = firstName + "." + middleInitial + "." + lastName;

  // Build message
  return "USER: " + officialName + " | Age: " + user.age + " | Status: ACTIVE";
});

// Print result
console.log("Task 3 – Active Adult Users Only:");
console.log(activeAdultsFormatted);
/*
Expected output:
[
  "USER: Hassan.K.Hassan | Age: 32 | Status: ACTIVE",
  "USER: Sara.A.Kareem | Age: 44 | Status: ACTIVE"
]
*/
console.log("---------------------------------------------------");









// ===============================
// Task 4 – High Scoring Active Students Report
// ===============================

/*
TASK:
You have an array of student objects. Each student has:
- fullName
- score (0-100)
- active (true/false)

Requirements:
1- Filter students who are ACTIVE AND scored 60 or higher
2- For the filtered students, create a formatted report string:
   "STUDENT: FirstName.MiddleInitial.LastName | Score: SCORE | Status: ACTIVE"
3- The final result should be an array of strings
4- Demonstrates nested use of filter + map
*/

// Original array of students
var students = [
  { fullName: "Hassan Kadem Hassan", score: 95, active: true },
  { fullName: "Ali Mohammed Ahmed", score: 55, active: true },
  { fullName: "Sara Adel Kareem", score: 77, active: true },
  { fullName: "Lana Firas Hussein", score: 82, active: false },
  { fullName: "Omar Adel Ali", score: 45, active: true }
];

// Step 1 + 2: Filter first, then map to formatted strings
var highScoringActiveStudents = students
  .filter(function(student) {
    // Keep only active students with score >= 60
    return student.active === true && student.score >= 60;
  })
  .map(function(student) {
    // Split full name
    var parts = student.fullName.split(" ");
    var firstName = parts[0];
    var middleInitial = parts[1].charAt(0).toUpperCase();
    var lastName = parts[2];

    var officialName = firstName + "." + middleInitial + "." + lastName;

    // Build formatted report string
    return "STUDENT: " + officialName +
           " | Score: " + student.score +
           " | Status: ACTIVE";
  });

// Print result
console.log("Task 4 – High Scoring Active Students Report:");
console.log(highScoringActiveStudents);
/*
Expected output:
[
  "STUDENT: Hassan.K.Hassan | Score: 95 | Status: ACTIVE",
  "STUDENT: Sara.A.Kareem | Score: 77 | Status: ACTIVE"
]
*/
console.log("---------------------------------------------------");
