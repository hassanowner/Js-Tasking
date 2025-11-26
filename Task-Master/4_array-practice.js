// ===============================
// JavaScript Array Basics
// Topics covered:
// 1. Array Introduction
// 2. Using Length with Array
// 3. Add and Remove from Array
// 4. Searching Array
// 5. Sorting Array
// 6. Slicing Array
// 7. Joining Arrays
// ===============================


// ===============================
// PARR 1: Manage a Shopping List
// Instructions:
// 1. Start with 4 items in the shopping list.
// 2. Add "Cheese" at the end and "Juice" at the beginning.
// 3. Remove the first and last items (bought).
// 4. Display the final list and remaining item count.
// ===============================

let shoppingList = ["Milk", "Bread", "Eggs", "Butter"];

// Remove items that were bought
shoppingList.shift();               // Remove first item
shoppingList.pop();                 // Remove last item

// Add items
shoppingList.push("Cheese");        // Add at the end
shoppingList.unshift("Juice");      // Add at the beginning

console.log("Shopping List:", shoppingList); 
// Result: ["Milk", "Bread", "Eggs", "Butter"]
console.log("Remaining Items:", shoppingList.length); 
// Result: 4




// ===============================
// PART 2: Search for Employees
// Instructions:
// 1. Start with 4 employee names.
// 2. Search for "Sayed" and "Osama".
// 3. Display the index of each employee (-1 if not found).
// ===============================

let employees = ["Ahmed", "Mohamed", "Sayed", "Ali"];

console.log("Sayed index:", employees.indexOf("Sayed"));   
// Result: 2
console.log("Osama index:", employees.indexOf("Osama"));   
// Result: -1




// ===============================
// PART 3: Sort Student Names
// Instructions:
// 1. Start with 4 student names.
// 2. Sort the names alphabetically.
// 3. Display the sorted names.
// ===============================

let students = ["Zain", "Ahmed", "Lina", "Omar"];

// Sort alphabetically
students.sort();

console.log("Sorted Students:", students);
// Result: ["Ahmed", "Lina", "Omar", "Zain"]




// ===============================
// PART 4: Slice Student Grades
// Instructions:
// 1. Start with 6 student grades.
// 2. Extract grades from 2nd to 5th elements.
// 3. Display the selected grades.
// ===============================

let grades = [85, 70, 90, 60, 75, 95];

// Slice grades from index 1 to index 5 (not including 5)
let selectedGrades = grades.slice(1, 5);

console.log("Selected Grades:", selectedGrades);
// Result: [70, 90, 60, 75]




// ===============================
// PART 5: Merge Products from Two Branches
// Instructions:
// 1. Start with two arrays of products from branch A and B.
// 2. Merge both arrays.
// 3. Convert the merged array into a text separated by commas.
// 4. Display both the merged array and the text.
// ===============================

let branchA = ["Milk", "Eggs", "Bread", "Butter"];
let branchB = ["Juice", "Cheese", "Eggs", "Bread"];

// Merge arrays
let allProducts = branchA.concat(branchB);

// Convert to text
let productsText = allProducts.join(", ");

console.log("All Products:", allProducts);
// Result: ["Milk", "Eggs", "Bread", "Butter", "Juice", "Cheese", "Eggs", "Bread"]
console.log("Products Text:", productsText);
// Result: "Milk, Eggs, Bread, Butter, Juice, Cheese, Eggs, Bread"
