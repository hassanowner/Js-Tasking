// ===============================
// JS Test Tasks – Variables, Strings & Operators
// Topics: Data Types & typeof, Variables, Identifiers, Var/Let/Const, 
// Strings & Escape Sequences, Concatenation, Template Literals, 
// Arithmetic, Unary Operators, Type Coercion, Assignment
// This block contains tasks for learning purposes
// ===============================

/********************************************
 *  PART 1: Variables & Data Types
 *  Objective: Define variables of different data types
 *  and check their type using the `typeof` operator
 ********************************************/

let productName = "Laptop";   // String → a text value
let price = 500;              // Number → numeric value
let quantity = 2;             // Number → numeric value
let isDiscount = true;        // Boolean → true or false value
let discountValue = "10";     // String → number represented as text
let buyer = {                 // Object → complex structure to store data
  name: "Ali",
  country: "Iraq"
};
// Print the type of each variable
console.log(typeof productName);   // "string" → shows that productName is a text
console.log(typeof price);         // "number" → price is numeric
console.log(typeof quantity);      // "number" → quantity is numeric
console.log(typeof isDiscount);    // "boolean" → true/false
console.log(typeof discountValue); // "string" → even though it looks like a number, it's text
console.log(typeof buyer);         // "object" → complex object




/********************************************
 *  PART 2: Concatenation
 *  Objective: Combine strings and variables using +
 ********************************************/
let userName = "Hassan";        // String → user name
let age = 25;                   // Number → user age

// Concatenate strings and numbers using the + operator
let message1 =
  "Hello " + userName + ", you are " + age + " years old.";
console.log(message1);
// Result → "Hello Hassan, you are 25 years old."
// Explanation: + operator combines strings; numbers are converted to string if needed




/********************************************
 *  PART 3: Template Literals
 *  Objective: Use template literals for easier string interpolation
 ********************************************/
let message2 = `Hello ${userName}, you are ${age} years old.`;
console.log(message2);
// Result → "Hello Hassan, you are 25 years old."
// Explanation: `${}` allows us to insert variables directly into strings
// Using backticks ` instead of quotes makes it easier than + concatenation




/********************************************
 *  PART 4: Unary + Operator & Type Coercion
 *  Objective: Convert strings or booleans to numbers, 
 *  and demonstrate automatic type conversion
 ********************************************/

console.log(+ "100");   // 100 → Unary + converts string to number
console.log(+ true);    // 1 → true converts to 1
console.log("5" + 5);   // "55" → number 5 is coerced to string, concatenation happens
console.log(+"5" - 2);   // 3 → string "5" is converted to number because of - operator
console.log(10 + "");   // "10" → number 10 is converted to string when combined with ""
