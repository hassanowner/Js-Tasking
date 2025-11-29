/*

- You have a list of customer data separated in arrays
- Remove entries with empty names or amounts less than 10
- Collect all valid entries in one array
- Collect delivered entries in another array
- Calculate the total amount of all valid entries
- Print:
  - Valid entries
  - Delivered entries
  - Number of valid entries
  - Number of delivered entries
  - Total amount from valid entries

*/

// Data stored in separate arrays (no objects)
let ids       = [1, 2, 3, 4, 5, 6];
let names     = ["Ali", "Sara", "", "John", "Noor", "Hassan"];
let amounts   = [25, 5, 13, 50, 9, 33];
let delivered = [true, false, true, false, true, true];

let validEntries = [];
let deliveredEntries = [];
let totalAmount = 0;

for (let i = 0; i < ids.length; i++) {

  let name = names[i];
  let amount = amounts[i];
  let isDelivered = delivered[i];

  // Skip invalid entries
  if (name === "" || amount < 10) {
    continue;
  }

  // Add valid entry
  validEntries.push([ids[i], name, amount, isDelivered]);
  totalAmount += amount;

  // Add delivered entry
  if (isDelivered === true) {
    deliveredEntries.push([ids[i], name, amount, isDelivered]);
  }
}

// Print results
console.log("Valid Entries:", validEntries);
console.log("Delivered Entries:", deliveredEntries);
console.log("Total Valid:", validEntries.length);
console.log("Total Delivered:", deliveredEntries.length);
console.log("Total Amount:", totalAmount);

/*
Expected Output:

Valid Entries:
[
  [1, "Ali", 25, true],
  [4, "John", 50, false],
  [6, "Hassan", 33, true]
]

Delivered Entries:
[
  [1, "Ali", 25, true],
  [6, "Hassan", 33, true]
]

Total Valid: 3
Total Delivered: 2
Total Amount: 108
*/
