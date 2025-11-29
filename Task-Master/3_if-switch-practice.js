/*
  ===========================================================
  JAVASCRIPT TEST TASK – OPERATORS & CONTROL FLOW
  ===========================================================

  This comprehensive test task covers the following topics:

  1) Comparison Operators
     - == Equal (checks value only)
     - != Not Equal (checks value only)
     - === Identical (checks value + type)
     - !== Not Identical (checks value + type)
     - >, >=, <, <= (Relational operators for comparing numbers)

  2) Logical Operators
     - ! (Not) → reverses boolean value
     - && (And) → true if all conditions are true
     - || (Or) → true if any condition is true

  3) Control Flow
     - if / else if / else → executes blocks based on conditions
     - Nested if → condition inside another condition

  4) Conditional (Ternary) Operator
     - Syntax: condition ? ifTrue : ifFalse
     - Can be nested for multiple conditions
     - Useful for short conditional assignments or prints

  5) Logical OR || and Nullish Coalescing ??
     - || returns first truthy value (considers falsy: 0, "", null, undefined, false)
     - ?? returns first defined value (only checks null or undefined)

  ===========================================================
*/

/* ================================
   TASK 1: Comparison Operators
   ================================ */
console.log("1) Comparison Operators Tests");

// Compare value only
console.log(10 == "10");     // true → values are equal
console.log(-100 == "-100"); // true → values are equal
console.log(10 != "10");     // false → values are equal

// Compare value and type
console.log(10 === "10"); // false → type mismatch
console.log(10 !== "10"); // true → different type
console.log(10 !== 10);   // false → same value & type

// Relational operators
console.log(10 > 20);   // false
console.log(10 > 10);   // false
console.log(10 >= 10);  // true
console.log(10 < 20);   // true
console.log(10 < 10);   // false
console.log(10 <= 10);  // true

console.log(typeof "Osama" === typeof "Ahmed"); // true → both are strings

/* ================================
   TASK 2: Logical Operators
   ================================ */
console.log("\n2) Logical Operators Tests");

console.log(!true);                      // false → negates true
console.log(!(10 == "10"));              // false → 10 == "10" is true, !true = false
console.log(10 == "10" && 10 > 8 && 10 > 50); // false → last condition is false
console.log(10 == "10" || 10 > 80 || 10 > 50); // true → first condition is true

/* ================================
   TASK 3: Control Flow
   ================================ */
console.log("\n3) Control Flow Tests");

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

// if-else ladder
if (discount === true) {
  price -= discountAmount; // apply discount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price); // 70 → discount applied

// Nested if example
price = 100;
discount = false;
country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30; // student gets extra discount
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price); // 40 → nested if applied

/* ================================
   TASK 4: Conditional (Ternary) Operator
   ================================ */
console.log("\n4) Ternary Operator Tests");

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

// Classic if-else
if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs"); // Mrs → because female
}

// Ternary operator
console.log(theGender === "Male" ? "Mr" : "Mrs"); // Mrs
let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result); // Mrs
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`); // Hello Mrs Mona

// Nested ternary
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60") // 20 To 60 → age = 30
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/* ================================
   TASK 5: Logical OR || and Nullish Coalescing ??
   ================================ */
console.log("\n5) Logical OR || and Nullish Coalescing Tests");

// Boolean conversion
console.log(Boolean(100));  // true
console.log(Boolean(-100)); // true
console.log(Boolean(0));    // false → falsy
console.log(Boolean(""));   // false → falsy
console.log(Boolean(null)); // false → falsy

price = 0;

// Logical OR → returns first truthy
console.log(`The Price Is ${price || 200}`);  // 200 → 0 is falsy

// Nullish Coalescing → returns first non-null/undefined
console.log(`The Price Is ${price ?? 200}`);  // 0 → 0 is defined, not null/undefined

/*
  ================================
  Expected Output Summary:

  TASK 1: Comparison Operators
  true, true, false, false, true, false
  false, false, true, true, false, true
  true

  TASK 2: Logical Operators
  false, false, false, true

  TASK 3: Control Flow
  70
  40

  TASK 4: Conditional (Ternary) Operator
  Mrs
  Mrs
  Mrs
  Hello Mrs Mona
  20 To 60

  TASK 5: Logical OR || and Nullish Coalescing ??
  true, true, false, false, false
  The Price Is 200
  The Price Is 0
*/
