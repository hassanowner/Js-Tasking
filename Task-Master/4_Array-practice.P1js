/*
  ===========================================================
  JAVASCRIPT TEST TASK – ARRAYS
  ===========================================================

  This test task covers the following topics in order:

  1) Creating Arrays
     - Using new Array() and []
     - Accessing array elements
     - Nested arrays
     - Changing array elements
     - Checking if variable is array (Array.isArray)

  2) Array Length
     - Get array length
     - Modify length to truncate array

  3) Adding and Removing Elements
     - unshift() → Add to start
     - push() → Add to end
     - shift() → Remove first element
     - pop() → Remove last element

  4) Searching in Arrays
     - indexOf(value, fromIndex)
     - lastIndexOf(value, fromIndex)
     - includes(value, fromIndex)

  5) Sorting Arrays
     - sort()
     - reverse()

  6) Slicing and Splicing
     - slice(start, end)
     - splice(start, deleteCount, items…)

  7) Joining Arrays
     - concat()
     - join(separator)
*/

/* ================================
   TASK 1: Creating Arrays
   ================================ */
console.log("1) Creating Arrays and Nested Arrays");

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// Access elements
console.log(`Hello ${myFriends[0]}`);        // Ahmed
console.log(`Hello ${myFriends[2]}`);        // Sayed
console.log(`${myFriends[1][2]}`);           // undefined → string index not valid
console.log(`Hello ${myFriends[3][1]}`);     // Ali
console.log(`${myFriends[3][1][2]}`);        // l → third char of "Ali"

// Change elements
myFriends[1] = "Gamal";                      // Modify "Mohamed" → "Gamal"
myFriends[3] = ["Sameh", "Ameer"];           // Change nested array

console.log(myFriends);                       // Updated array

// Check if array
console.log(Array.isArray(myFriends));        // true

// Result:
// Hello Ahmed
// Hello Sayed
// undefined
// Hello Ali
// l
// ["Ahmed","Gamal", "Sayed", ["Sameh","Ameer"]]
// true




/* ================================
   TASK 2: Array Length
   ================================ */
console.log("\n2) Array Length Manipulation");

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// Truncate array
myFriends2.length = 2;

console.log(myFriends2); // ["Ahmed", "Mohamed"]

// Result:
// ["Ahmed","Mohamed"]





/* ================================
   TASK 3: Adding and Removing Elements
   ================================ */
console.log("\n3) Adding and Removing Elements");

let myFriends3 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends3);

// Add to start
myFriends3.unshift("Osama", "Nabil");
console.log(myFriends3);

// Add to end
myFriends3.push("Samah", "Eman");
console.log(myFriends3);

// Remove first element
let first = myFriends3.shift();
console.log(myFriends3);
console.log(`First Name Is ${first}`);

// Remove last element
let last = myFriends3.pop();
console.log(myFriends3);
console.log(`Last Name Is ${last}`);

// Result:
// ["Ahmed","Mohamed","Sayed","Alaa"]
// ["Osama","Nabil","Ahmed","Mohamed","Sayed","Alaa"]
// ["Osama","Nabil","Ahmed","Mohamed","Sayed","Alaa","Samah","Eman"]
// ["Nabil","Ahmed","Mohamed","Sayed","Alaa","Samah","Eman"]
// First Name Is Osama
// ["Nabil","Ahmed","Mohamed","Sayed","Alaa","Samah"]
// Last Name Is Eman




/* ================================
   TASK 4: Searching in Arrays
   ================================ */
console.log("\n4) Searching in Arrays");

let myFriends4 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends4);

console.log(myFriends4.indexOf("Ahmed"));        // 0
console.log(myFriends4.indexOf("Ahmed", 2));     // 4
console.log(myFriends4.lastIndexOf("Ahmed"));    // 4
console.log(myFriends4.lastIndexOf("Ahmed", -2));// 0 (from left)

console.log(myFriends4.includes("Ahmed"));       // true
console.log(myFriends4.includes("Ahmed", 2));    // true

if (myFriends4.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}
console.log(myFriends4.indexOf("Osama"));        // -1
console.log(myFriends4.lastIndexOf("Osama"));    // -1

// Result:
// ["Ahmed","Mohamed","Sayed","Alaa","Ahmed"]
// 0
// 4
// 4
// 0
// true
// true
// Not Found
// -1
// -1




/* ================================
   TASK 5: Sorting Arrays
   ================================ */
console.log("\n5) Sorting Arrays");

let myFriends5 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends5);
console.log(myFriends5.sort().reverse()); // sort converts to string by default

// Result (sorted as strings and reversed):
// [10,"Sayed","Mohamed","90",9000,100,20,"10",-20,-10]
// ["Sayed","Mohamed","90","20","10",100,10,9000,-10,-20]




/* ================================
   TASK 6: Slicing and Splicing
   ================================ */
console.log("\n6) Slicing and Splicing Arrays");

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends6);

// Slicing examples
console.log(myFriends6.slice());        // All array
console.log(myFriends6.slice(1));       // From index 1
console.log(myFriends6.slice(1, 3));    // From index 1 to 2
console.log(myFriends6.slice(-3));      // Last 3 elements
console.log(myFriends6.slice(1, -2));   // From index 1 to third last
console.log(myFriends6.slice(-4, -2));  // Slice using negative indexes
console.log(myFriends6);                // Original array remains unchanged

// Splicing example
myFriends6.splice(1, 2, "Sameer", "Samara"); // remove 2 elements from index 1, add 2 new
console.log(myFriends6);

// Result:
// ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"]
// ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"]
// ["Sayed","Ali","Osama","Gamal","Ameer"]
// ["Sayed","Ali"]
// ["Ali","Osama","Gamal"]
// ["Sayed","Ali"]
// ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"]
// ["Ahmed","Sameer","Samara","Osama","Gamal","Ameer"]





/* ================================
   TASK 7: Joining Arrays
   ================================ */
console.log("\n7) Joining Arrays");

let myFriends7 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

// Concat arrays
let allFriends = myFriends7.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends);

// Join arrays into string
console.log(allFriends.join());       // default comma
console.log(allFriends.join(""));     // no separator
console.log(allFriends.join(" @ "));  // custom separator
console.log(allFriends.join("|"));    // pipe
console.log(allFriends.join("|").toUpperCase()); // uppercase

// Result:
// ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer","Samar","Sameh","Haytham","Shady","Gameel",1,2]
// "Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2"
// "AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12"
// "Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2"

// "Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2"
// "AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1|2"
