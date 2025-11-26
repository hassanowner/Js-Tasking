// ================================================================
// JavaScript Looping – Topics Covered:
// 1. Loop For And The Concept Of Loop
// 2. Looping On Sequences
// 3. Nested Loops And Trainings
// 4. Loop Control: Break, Continue
// 5. Loop For – Advanced Example
// 6. Practice: Add Products To Page
// 7. Loop While
// 8. Loop Do...While
// ================================================================





// ================================================================
// PART 1: Filter Valid Purchases
// Requirements:
// - You have an array of daily purchases.
// - Ignore any purchase less than 1 using "continue".
// - Calculate the total of valid purchases only.
// ================================================================

let dailyPurchases = [15, 0, 22.5, 1, -5, 13, 0.5, 30];
let total = 0;

// Loop through all purchases
for (let i = 0; i < dailyPurchases.length; i++) {

  // Skip invalid values
  if (dailyPurchases[i] < 1) {
    continue;
  }

  // Add only valid purchase values
  total += dailyPurchases[i];
}

console.log("Valid Total =", total);

// Result:
// Valid Total = 81.5
// ================================================================





// ================================================================
// PART 2: Stop Table Generation When Employee Is Fired
// Requirements:
// - Loop through employees.
// - Stop generating the table when dept = "Fired" using "break".
// - Generate table rows until that moment.
// ================================================================

let employees = [
  {name: "Ahmed", age: 24, dept: "IT"},
  {name: "Sara", age: 27, dept: "HR"},
  {name: "Mona", age: 31, dept: "Fired"},
  {name: "Ali", age: 29, dept: "Sales"},
];

let table = "<table>";

for (let i = 0; i < employees.length; i++) {

  // Stop when a fired employee is found
  if (employees[i].dept === "Fired") {
    break;
  }

  // Add a table row
  table += `
    <tr>
      <td>${employees[i].name}</td>
      <td>${employees[i].age}</td>
      <td>${employees[i].dept}</td>
    </tr>
  `;
}

table += "</table>";

console.log(table);

// Result:
// Table with two rows: Ahmed + Sara
// ================================================================





// ================================================================
// PART 3: Generate All Coffee Size–Flavor Combinations
// Requirements:
// - Use nested loops.
// - Combine every size with every flavor.
// - Store all combos in one array.
// ================================================================

let sizes = ["Small", "Medium", "Large"];
let flavors = ["Vanilla", "Caramel", "Hazelnut"];
let combos = [];

// Loop through sizes
for (let i = 0; i < sizes.length; i++) {

  // Loop through flavors
  for (let j = 0; j < flavors.length; j++) {
    combos.push(`${sizes[i]} - ${flavors[j]}`);
  }
}

console.log(combos);

// Result:
// [
//  'Small - Vanilla', 'Small - Caramel', 'Small - Hazelnut',
//  'Medium - Vanilla', 'Medium - Caramel', 'Medium - Hazelnut',
//  'Large - Vanilla', 'Large - Caramel', 'Large - Hazelnut'
// ]
// ================================================================





// ================================================================
// PART 4: Clean Usernames Using While Loop
// Requirements:
// - Remove empty, null, or undefined values.
// - Add only valid names to new array.
// - Use WHILE loop instead of FOR loop.
// ================================================================

let users = ["Ali", "", null, "Sara", undefined, "Hassan", ""];
let clean = [];

let i = 0;
while (i < users.length) {

  // Add only valid strings
  if (users[i] && users[i] !== "") {
    clean.push(users[i]);
  }

  i++;
}

console.log(clean);

// Result:
// ["Ali", "Sara", "Hassan"]
// ================================================================





// ================================================================
// PART 5: Salary Calculation Until Tax Deduction
// Requirements:
// - Loop through employees.
// - Calculate housing bonus and tax.
// - Show final salary with full details.
// - Demonstrates advanced for-loop usage.
// ================================================================

let employees2 = [
  { name: "Ali", salary: 800, housing: 0.20, tax: 0.05 },
  { name: "Sara", salary: 1200, housing: 0.25, tax: 0.08 },
  { name: "Hassan", salary: 1000, housing: 0.15, tax: 0.07 }
];

for (let i = 0; i < employees2.length; i++) {
  let base = employees2[i].salary;

  let housingAmount = base * employees2[i].housing;  
  let afterHousing = base + housingAmount;

  let taxAmount = afterHousing * employees2[i].tax;
  let finalSalary = afterHousing - taxAmount;

  console.log(`
${i + 1}- ${employees2[i].name}
   Base Salary: ${base}
   + Housing: ${housingAmount}
   - Tax: ${taxAmount}
   = Final Salary: ${finalSalary}
-----------------------
  `);
}

// Result:
// Detailed salary calculations for Ali, Sara, and Hassan
// ================================================================





// ================================================================
// PART 6: Track Sales Until Target Using Do...While
// Requirements:
// - Loop through daily sales.
// - Stop when total reaches 100 or end of array.
// - Show total after each day.
// ================================================================

let dailySales = [10, 15, 8, 20, 5, 12, 18, 7];
let total2 = 0;
let day = 0;

do {
  total2 += dailySales[day];
  console.log(`Day ${day + 1}: Sold ${dailySales[day]} units, Total: ${total2}`);
  day++;

} while (total2 < 100 && day < dailySales.length);

console.log("Reached the target or end of sales array.");

// Result:
// Prints day-by-day sales until reaching 100 total.
// ================================================================