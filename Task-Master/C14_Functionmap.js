// ===============================
// JS Test Tasks – Using map (Step by Step)
// ===============================

/*
GENERAL IDEA:
These test tasks demonstrate the usage of JavaScript's map() method in different scenarios.
Each task shows how to transform an array into another array, either by:
- Converting numbers to pass/fail
- Converting objects into descriptive strings
- Formatting user information with official naming conventions
The expected output is always a new array derived from the original data.
*/


// ===============================
// Task 1 – Convert Student Scores to Pass/Fail
// ===============================

/*
TASK:
You are given an array that contains student scores (numbers only).
You need to create a new array using map that does the following:
1- If the score is less than 50, convert it to "Fail"
2- If the score is 50 or higher, convert it to "Pass"
3- The final result must be an array with the same length,
   but instead of numbers, it should contain the strings "Pass" or "Fail"
*/

// Original array of scores
var scores = [95, 12, 77, 49, 50, 100];

// Solution using map (normal function syntax)
var result = scores.map(function(score) {

  // Decide the result based on the score
  if (score < 50) {
    return "Fail";
  } else {
    return "Pass";
  }

});

// Print the result
console.log("Task 1 – Scores Pass/Fail:");
console.log(result);
// Expected output: ["Pass", "Fail", "Pass", "Fail", "Pass", "Pass"]
console.log("---------------------------------------------------");



// ===============================
// Task 2 – Product Descriptions
// ===============================

/*
TASK:
You have an array of product objects.
Each product has:
- name
- price
- inStock (true/false)

You need to use map to create a NEW array where each product 
is converted into a short description string in this format:

"Product: NAME | Price: $PRICE | Status: AVAILABLE/OUT OF STOCK"

Rules:
1- If inStock is true → Status should be "AVAILABLE"
2- If inStock is false → Status should be "OUT OF STOCK"
3- The new array must contain ONLY strings (not objects)
*/

// Original array of products
var products = [
  { name: "Keyboard",    price: 25,  inStock: true  },
  { name: "Mouse",       price: 10,  inStock: false },
  { name: "Monitor",     price: 99,  inStock: true  },
  { name: "USB Cable",   price: 5,   inStock: true  },
  { name: "Headphones",  price: 40,  inStock: false }
];

// Solution using map
var descriptions = products.map(function(product) {

  // Determine status text
  var statusText;
  if (product.inStock === true) {
    statusText = "AVAILABLE";
  } else {
    statusText = "OUT OF STOCK";
  }

  // Build final string for each product
  return "Product: " + product.name +
         " | Price: $" + product.price +
         " | Status: " + statusText;
});

// Print the result
console.log("Task 2 – Product Descriptions:");
console.log(descriptions);
/*
Expected output:
[
  "Product: Keyboard | Price: $25 | Status: AVAILABLE",
  "Product: Mouse | Price: $10 | Status: OUT OF STOCK",
  "Product: Monitor | Price: $99 | Status: AVAILABLE",
  "Product: USB Cable | Price: $5 | Status: AVAILABLE",
  "Product: Headphones | Price: $40 | Status: OUT OF STOCK"
]
*/
console.log("---------------------------------------------------");



// ===============================
// Task 3 – Users Official Info Display
// ===============================

/*
TASK:
You have an array of user objects. Each user has:
- fullName (3 words)
- age
- active (true/false)

Requirements:
1- Convert the fullName into official name format: FirstName.MiddleInitial.LastName
2- Determine status text: ACTIVE if true, INACTIVE if false
3- Keep age as is
4- Print the user's info in a readable string format
5- The final output should be an array of formatted strings
*/

// Original array of users
var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 22, active: false },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

// Solution using map
var formattedUsers = users.map(function(user) {

  // Split the full name into parts
  var parts = user.fullName.split(" ");

  var firstName = parts[0];
  var middleInitial = parts[1].charAt(0).toUpperCase();
  var lastName = parts[2];

  // Build official name
  var officialName = firstName + "." + middleInitial + "." + lastName;

  // Determine status text
  var statusText = user.active ? "ACTIVE" : "INACTIVE";

  // Build final message string
  return "Name: " + officialName + "\n" +
         "Age: " + user.age + "\n" +
         "Status: " + statusText;
});

// Print each user's official info
console.log("Task 3 – Users Official Info:");
formattedUsers.forEach(function(info) {
  console.log(info);
  console.log("---------------"); // separator for readability
});
/*
Expected Output:

Name: Hassan.K.Hassan
Age: 32
Status: ACTIVE
---------------
Name: Ali.M.Ahmed
Age: 22
Status: INACTIVE
---------------
Name: Sara.A.Kareem
Age: 44
Status: ACTIVE
---------------
Name: Lana.F.Hussein
Age: 19
Status: INACTIVE
---------------
*/