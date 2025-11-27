// =========================
// TEST TASKS COLLECTION – forEach Examples
// Includes: Doubling Numbers, Total Price, Cleaning Data, Orders Summary, User Formatting
// Each task contains concept, objective, step-by-step explanation, and expected output
// =========================


// =========================
// Test Task 1 – Doubling Numbers
// Concept: Multiply each number in an array by 2
// Objective: Create a new array with all numbers doubled
// =========================
let nums = [2, 5, 8, 10];
let doubled = [];

nums.forEach(function(num) {
  // Multiply each number by 2 and add it to the new array
  doubled.push(num * 2);
});

console.log("Doubled Numbers:", doubled);
// Expected Output: [4, 10, 16, 20]






// =========================
// Test Task 2 – Calculating Total Price
// Concept: Sum all numbers in an array using forEach
// Objective: Calculate the total price of all items
// =========================
let prices = [10, 20, 15, 5];
let total = 0;

prices.forEach(function(price) {
  // Add each price to the total
  total += price;
});

console.log("Total =", total);
// Expected Output: Total = 50






// =========================
// Test Task 3 – Cleaning Data (Remove Falsy Values)
// Concept: Remove null, undefined, or empty string values
// Objective: Create a new array containing only valid data
// =========================
let rawData = ["Ali", null, "Sara", "", "Hassan", undefined, "Reem"];
let cleanData = [];

rawData.forEach(function(item) {
  // Only add truthy values to the cleanData array
  if (item) {
    cleanData.push(item);
  }
});

console.log("Clean Data:", cleanData);
// Expected Output: ["Ali", "Sara", "Hassan", "Reem"]






// =========================
// Test Task 4 – Orders Summary
// Concept: Loop through array of objects and calculate totals and counts
// Objective: Compute total amount and count of delivered orders
// =========================
let orders = [
  { id: 1, amount: 20, delivered: true },
  { id: 2, amount: 50, delivered: false },
  { id: 3, amount: 15, delivered: true }
];

let totalAmount = 0;
let deliveredCount = 0;

orders.forEach(function(order) {
  // Add order amount to total
  totalAmount += order.amount;

  // If delivered is true, increment deliveredCount
  if (order.delivered) {
    deliveredCount++;
  }
});

console.log("Total Amount:", totalAmount);
// Expected Output: Total Amount: 85
console.log("Delivered Orders:", deliveredCount);
// Expected Output: Delivered Orders: 2






// =========================
// Test Task 5 – Formatting User Info
// Concept: Create formatted strings from array of objects
// Objective: Generate readable user information strings
// =========================
let users = [
  { name: "Hassan", age: 22 },
  { name: "Sara", age: 19 },
  { name: "Ali", age: 25 }
];

let formatted = [];

users.forEach(function(user) {
  // Create a readable string and add to formatted array
  formatted.push(`User: ${user.name} | Age: ${user.age}`);
});

console.log("Formatted Users:", formatted);
// Expected Output:
// [
//   "User: Hassan | Age: 22",
//   "User: Sara | Age: 19",
//   "User: Ali | Age: 25"
// ]
