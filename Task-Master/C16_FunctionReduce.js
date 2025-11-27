// ===============================
// JS Test Tasks – Using reduce()
// ===============================

/*
GENERAL IDEA:
These test tasks demonstrate the usage of JavaScript's reduce() method.
Reduce is used to accumulate values from an array into a single result:
- Task 1: Sum of numbers
- Task 2: Total value of products in stock
- Task 3: Count active users
- Task 4: Aggregate student scores with pass/fail categorization
*/

// ===============================
// Task 1 – Sum of Numbers
// ===============================

/*
TASK:
You are given an array of numbers.
Use reduce to calculate the total sum of all numbers.
*/

var numbers = [10, 20, 5, 15, 50];

var totalSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); //<= accumulator start wit 0

console.log("Task 1 – Total Sum of Numbers:");
console.log(totalSum);
// Expected output: 100
console.log("---------------------------------------------------");





// ===============================
// Task 2 – Total Value of Products in Stock
// ===============================

/*
TASK:
You have an array of product objects. Each product has:
- name
- price
- quantity

Use reduce to calculate the TOTAL value of all products in stock (price * quantity).
*/

var products = [
  { name: "Keyboard", price: 25, quantity: 2 },
  { name: "Mouse", price: 10, quantity: 0 },
  { name: "Monitor", price: 99, quantity: 1 },
  { name: "USB Cable", price: 5, quantity: 5 }
];

var totalValue = products.reduce(function(accumulator, product) {
  return accumulator + (product.price * product.quantity);
}, 0);

console.log("Task 2 – Total Value of Products in Stock:");
console.log(totalValue);
// Expected output: 25*2 + 0 + 99*1 + 5*5 = 50 + 0 + 99 + 25 = 174
console.log("---------------------------------------------------");





// ===============================
// Task 3 – Count Active Users
// ===============================

/*
TASK:
You have an array of user objects. Each user has:
- fullName
- age
- active (true/false)

Use reduce to count how many users are ACTIVE.
*/

var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 22, active: false },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

var activeCount = users.reduce(function(accumulator, user){
  return accumulator + (user.active ? 1 : 0);
}, 0);

console.log("Task 3 – Number of Active Users:");
console.log(activeCount);
// Expected output: 2
console.log("---------------------------------------------------");








// ===============================
// Task 4 – Aggregate Student Scores with Pass/Fail
// ===============================

/*
TASK:
You have an array of student objects. Each student has:
- fullName
- score

Use reduce to create a single object with two arrays:
{
  pass: [...students who scored 50 or more...],
  fail: [...students who scored less than 50...]
}
*/

var students = [
  { fullName: "Hassan Kadem Hassan", score: 95 },
  { fullName: "Ali Mohammed Ahmed", score: 45 },
  { fullName: "Sara Adel Kareem", score: 77 },
  { fullName: "Lana Firas Hussein", score: 49 }
];

var passFail = students.reduce(function(accumulator, student) {
  if (student.score >= 50) {
    accumulator.pass.push(student.fullName);
  } else {
    accumulator.fail.push(student.fullName);
  }
  return accumulator;
}, { pass: [], fail: [] });

console.log("Task 4 – Pass/Fail Students:");
console.log(passFail);
/*
Expected output:
{
  pass: ["Hassan Kadem Hassan", "Sara Adel Kareem"],
  fail: ["Ali Mohammed Ahmed", "Lana Firas Hussein"]
}
*/
console.log("---------------------------------------------------");







// ===============================
// Task 5 – map + filter + reduce (Nested)
// ===============================
//
// This task demonstrates how to combine map, filter, and reduce
// in a nested and realistic data-processing pipeline.
//
// Idea:
// - We have a list of customer orders.
// - Each order contains several items with price and quantity.
// - We will:
//   1. Use map to calculate the total price of each order.
//   2. Use filter to keep only orders whose total is >= 50.
//   3. Use reduce to compute the final combined total of the filtered orders.
// ===============================


// Original data
var orders = [
  {
    customer: "Hassan",
    items: [
      { name: "Keyboard", qty: 1, price: 25 },
      { name: "Mouse", qty: 2, price: 30 }
    ]
  },
  {
    customer: "Ali",
    items: [
      { name: "USB Cable", qty: 1, price: 5 },
      { name: "Sticker", qty: 3, price: 2 }
    ]
  },
  {
    customer: "Sara",
    items: [
      { name: "Monitor", qty: 1, price: 99 }
    ]
  }
];


// ==================================
// Step 1: map → calculate order total
// ==================================
//
// map() will transform each order object into a new object that (instead of items)
// only contains the customer's name and the total cost of their order.
//
// Inside map, we use reduce to sum all item prices of the order.
// This is a common real-world pattern: reduce inside map (nested).
//
var ordersWithTotal = orders.map(function(order) {

  // reduce → accumulates total price of items
  var total = order.items.reduce(function(sum, item) {

    // Each item contributes (qty × price) to the order total
    return sum + (item.qty * item.price);

  }, 0); // Initial sum = 0

  // map returns a new object containing customer name + total
  return {
    customer: order.customer,
    total: total
  };
});

console.log("After map:");
console.log(ordersWithTotal);



// ======================================
// Step 2: filter → keep expensive orders
// ======================================
//
// Now we remove all orders with total less than 50.
// filter() keeps only the elements that satisfy the condition.
//
var filteredOrders = ordersWithTotal.filter(function(order) {
  return order.total >= 50;  // Keep only orders >= $50
});

console.log("After filter:");
console.log(filteredOrders);



// ===============================================
// Step 3: reduce → compute combined grand total
// ===============================================
//
// Now we take the filtered orders only and sum their totals.
// reduce() is used to combine everything into one value: the grand total.
//
var grandTotal = filteredOrders.reduce(function(sum, order) {

  // Add each order's total to the accumulator
  return sum + order.total;

}, 0); // Initial value = 0

console.log("Final Result – Grand Total:");
console.log(grandTotal);

console.log("-------------------------------------------");
