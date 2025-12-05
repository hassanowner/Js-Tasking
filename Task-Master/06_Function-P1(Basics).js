/*  
========================================================
 JAVASCRIPT – FUNCTION FULL LESSON (ALL TOPICS TO TEACH)
========================================================

Topics included:

1. What Is a Function?
2. User-Defined vs Built-In Functions
3. Function Syntax + Basic Usage
4. Real-Life Function Example
5. Parameters & Arguments
6. Practical Examples
7. Advanced Function Examples
8. return Keyword
9. Automatic Semicolon Insertion (ASI)
10. Interrupting Function Execution
11. Default Parameters (Old & ES6)
12. Rest Parameters (...args)

========================================================
   PRACTICAL EXAMPLES + EXPLANATIONS + ALL POSSIBLE CASES
========================================================
*/


/* =======================================================
   1) BASIC FUNCTION – Single Parameter
========================================================== */

function greetUser(name) {
  console.log(`Hello ${name}!`);
}

greetUser("Sara");
greetUser("Ahmed");
greetUser("Lina");
greetUser("");       // empty string
greetUser(123);      // number instead of string
greetUser();         // no argument

/*
EXPLANATION:
- greetUser() accepts one parameter: name.
- It prints a simple greeting message.

POSSIBLE CASES:
1) Normal string  
   greetUser("Sara") → "Hello Sara!"

2) Empty string  
   greetUser("") → "Hello !"  
   → Still valid, but meaningless.

3) Number passed  
   greetUser(123) → "Hello 123!"  
   → JS automatically converts numbers to strings.

4) No argument passed  
   greetUser() → "Hello undefined!"  
   → Because name = undefined when missing.
*/







/* =======================================================
   2) FUNCTION WITH CONDITIONS – Two Parameters
========================================================== */

function checkAccess(username, age) {
  if (typeof age !== "number") {
    console.log("Invalid age type. Age must be a number.");
    return;
  }

  if (age < 18) {
    console.log(`${username}, you are not allowed to enter.`);
  } else {
    console.log(`${username}, access granted.`);
  }
}

checkAccess("Omar", 22);
checkAccess("Lina", 15);
checkAccess("Rami", "20");  // invalid type
checkAccess("Maya");        // age missing

/*
EXPLANATION:
- Function checks if the user is allowed based on age.
- It also validates the type of the argument.

POSSIBLE CASES:
1) Age ≥ 18 → access granted
2) Age < 18 → access denied
3) Age as string → "Invalid age type"
4) Missing age → treated as undefined → invalid type
*/







/* =======================================================
   3) LOOP FUNCTION – Practical Example (Skipping Value)
========================================================== */

function printRange(start, end, skip) {
  for (let i = start; i <= end; i++) {
    if (i === skip) {
      console.log(`Skipping ${skip}`);
      continue;
    }
    console.log(i);
  }
}

printRange(1, 10, 5);

/*
EXPLANATION:
- Loops from start → end.
- Skips one specific number.

POSSIBLE CASES:
1) skip exists in range → loop skips it
2) skip not in range → nothing is skipped
3) start > end → loop never runs
4) skip equals start → skip first number
5) skip equals end → skip last number
*/







/* =======================================================
   4) RETURN STATEMENT – Interrupting the Function
========================================================== */

function countUntil(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i === 7) {
      return "Interrupted at 7";
    }
    console.log(i);
  }
  return "Finished normally";
}

console.log(countUntil(10));

/*
EXPLANATION:
- return immediately stops the function.
- Anything after return does NOT run.

POSSIBLE CASES:
1) limit > 7 → stops at number 7
2) limit = 7 → returns immediately
3) limit < 7 → never interrupts → "Finished normally"
*/







/* =======================================================
   5) DEFAULT PARAMETERS (ES6 Modern Method)
========================================================== */

function registerUser(name = "Guest", country = "Unknown") {
  console.log(`Name: ${name}, Country: ${country}`);
}

registerUser("Daniel", "USA");
registerUser("Sami");        
registerUser();

/*
EXPLANATION:
- If a parameter is not provided → default value is used.

POSSIBLE CASES:
1) Full arguments → uses provided data
2) One argument → second uses default value
3) No arguments → both default values
*/






/* =======================================================
   6) REST PARAMETERS (...numbers)
========================================================== */

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

console.log(sumAll(10, 20, 30, 5));
console.log(sumAll());  // no numbers
console.log(sumAll(5)); // one number

/*
EXPLANATION:
- ...nums collects all arguments into an array.
- You can pass unlimited numbers.

POSSIBLE CASES:
1) Multiple numbers → summed normally
2) One number → returns that number
3) No numbers → total = 0
4) Passing non-numbers → results in NaN (not a number)
*/
