/* ============================================================
   Combined JavaScript Challenges – Full Reference Code
   Includes:
   - Number Formatting
   - Math Operations
   - String Methods
   - Mixed Challenges
============================================================ */


/* ============================================================
   Challenge 1 – Mixed Number & String Operations
============================================================ */

let num1 = 150.56789;
let num2 = "300.55 JS";
let word = "  JavaScript Mastery  ";

// 1) Number Formatting
console.log(num1.toFixed(2));           // 150.57
console.log(Number.parseInt(num2));     // 300
console.log(Number.parseFloat(num2));   // 300.55

// 2) Math Operations
console.log(Math.ceil(Math.random() * 10)); // random 1–10
console.log(Math.max(10, 20, -5, 99));      // 99
console.log(Math.pow(2, 5));                // 32

// 3) String Operations
console.log(word.trim());                   // remove spaces
console.log(word.trim().slice(0, 4));       // "Java"
console.log(word.trim().toUpperCase());     // JAVASCRIPT MASTERY

// 4) Bonus Combination
console.log(
  word.trim().slice(0, 3) + " = " + (word.trim().length * Math.trunc(num1))
);






/* ============================================================
   Challenge 2 – Advanced Numbers + String Rebuilding
============================================================ */

let A = 99.5;
let B = "500.3 Text";
let sentence = "Elzero Web School";

// 1) Number Validations
console.log(Number.isInteger(A));          // false
console.log(Number.isNaN(Number(B)));      // true

// 2) Math Manipulations
console.log(Math.round(A));                // 100
console.log(Math.trunc(A));                // 99
console.log(Math.floor(A));                // 99

// 3) Rebuild String (Reverse)
let reversed = sentence.split("").reverse().join("");
console.log(reversed);

// 4) Bonus Mix
console.log(Math.round(A) + sentence.length);







/* ============================================================
   Challenge 3 – Full Combined Test
============================================================ */

let X = 200.444;
let Y = "150 JS";
let title = "Mastering JavaScript";

// 1) Number & Parsing
console.log(parseInt(Y));                 // 150
console.log(parseFloat(Y));               // 150
console.log(X.toFixed(1));                // 200.4

// 2) Math
console.log(Math.min(5, 20, -10, 99));    // -10
console.log(Math.trunc(X));               // 200
console.log(Math.random().toFixed(3));    // random 0.xxx

// 3) String Tests
console.log(title.includes("Java"));      // true
console.log(title.startsWith("Master"));  // true
console.log(title.endsWith("Script"));    // true

// 4) Slice & Build
console.log(title.slice(0, 8));           // Masterin
console.log(title.slice(-6));             // Script

// 5) Bonus Mixed Final
let final =
  title.charAt(0).toUpperCase() +
  title.slice(-3).toLowerCase() +
  " => " +
  (Math.random() * X).toFixed(2);

console.log(final);
