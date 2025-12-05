/* =========================================
   TEST TASK 1 – Full Loop Challenge
   =========================================
   Topics Used:
   - For Loop
   - Looping Arrays
   - Nested Loops
   - break / continue
   - Labeled Loops
   - For Loop (No Conditions)
   - While Loop
   - Do / While Loop
   ========================================= */

let users = ["Hassan", "Ali", "Zain"];
let colors = ["Red", "Green", "Blue"];
let banned = "Ali";

// 1) Normal For Loop
for (let i = 0; i < users.length; i++) {
  if (users[i] === banned) continue; 
  console.log(`# Main User: ${users[i]}`);

  // 2) Nested For Loop
  for (let j = 0; j < colors.length; j++) {
    console.log(`-- Favorite Color: ${colors[j]}`);
    if (colors[j] === "Green") break; 
  }
}

// 3) Advanced For Loop (no conditions)
let s = 3;
for (;; s--) {
  if (s <= 0) break;
  console.log("Countdown:", s);
}

// 4) While Loop
let x = 0;
while (x < 2) {
  console.log("While Loop:", x);
  x++;
}

// 5) Do/While Loop
let y = 0;
do {
  console.log("Do/While Loop:", y);
  y++;
} while (y < 2);

/*
EXPECTED OUTPUT:
# Main User: Hassan
-- Favorite Color: Red
-- Favorite Color: Green
# Main User: Zain
-- Favorite Color: Red
-- Favorite Color: Green
Countdown: 3
Countdown: 2
Countdown: 1
While Loop: 0
While Loop: 1
Do/While Loop: 0
Do/While Loop: 1
*/




/* =========================================
   TEST TASK 2 – Products × Colors System
   =========================================
   Topics Used:
   - For Loop
   - Looping Arrays
   - Nested Loops
   - break / continue
   - Labeled Loops
   - For Loop (No Conditions)
   - While Loop
   - Do / While Loop
   ========================================= */

let products = ["Phone", "Laptop", "Tablet"];
let colors2 = ["Black", "White", "Gold"];
let stopProduct = "Laptop";

// 1) Main Products Loop
mainLoop: 
for (let i = 0; i < products.length; i++) {
  console.log(`Product: ${products[i]}`);

  if (products[i] === stopProduct) {
    console.log("** Skipping Laptop Colors **");
    continue mainLoop;
  }

  // 2) Nested Loop – product colors
  for (let j = 0; j < colors2.length; j++) {
    console.log(`-- Color: ${colors2[j]}`);
    if (colors2[j] === "White") break;
  }
}

// 3) For Loop With No Conditions
let count = 5;
for (;; count--) {
  if (count === 0) break;
  console.log("Stock Check:", count);
}

// 4) While Loop
let w = 1;
while (w <= 2) {
  console.log("While Loop Step:", w);
  w++;
}

// 5) Do/While Loop
let d = 1;
do {
  console.log("Do/While Running:", d);
  d++;
} while (d <= 2);

/*
EXPECTED OUTPUT:
Product: Phone
-- Color: Black
-- Color: White
Product: Laptop
** Skipping Laptop Colors **
Product: Tablet
-- Color: Black
-- Color: White
Stock Check: 5
Stock Check: 4
Stock Check: 3
Stock Check: 2
Stock Check: 1
While Loop Step: 1
While Loop Step: 2
Do/While Running: 1
Do/While Running: 2
*/
