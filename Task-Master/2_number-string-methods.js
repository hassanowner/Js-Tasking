// ===============================
// JavaScript Test Tasks – Numbers & String Methods
// Topics: Number, Number Methods, Math Object, String Methods 
// This single code block contains 5 tasks for educational purposes
// ===============================

/* ===============================
   PART 1: Product Billing System
   Objective:
   - Calculate total price after discount
   - Round the final price
   - Format the product name
   - Create a message using concatenation and template literals
=============================== */
let productName = " Laptop  "; // Product name with extra spaces
let price = 500;               // Price per unit
let quantity = 2;              // Quantity of product
let discount = 10;             // Discount in percent

let totalPrice = price * quantity; // Calculate total price
totalPrice = totalPrice - (totalPrice * discount / 100); // Apply discount
totalPrice = Math.round(totalPrice); // Round total price

productName = productName.trim().toUpperCase(); // Remove spaces and convert to uppercase

let message1 = "Product: " + productName + ", Total Price: " + totalPrice + " USD"; // Concatenation
console.log(message1);

let message2 = `Product: ${productName}, Total Price: ${totalPrice} USD`; // Template literal
console.log(message2);


/* ===============================
   PART 2: Price Rounding & Formatting
   Objective:
   - Round a number to nearest, up, and down
   - Convert number to string with fixed decimals
=============================== */
let price2 = 123.456;

let roundedPrice = Math.round(price2); // Round to nearest integer
let ceilPrice = Math.ceil(price2);     // Round up
let floorPrice = Math.floor(price2);   // Round down
let priceString = price2.toFixed(2);   // Convert to string with 2 decimals
let finalText = "Price: " + priceString + " USD"; // Combine with currency

console.log(roundedPrice); // 123
console.log(ceilPrice);    // 124
console.log(floorPrice);   // 123
console.log(priceString);  // "123.46"
console.log(finalText);    // "Price: 123.46 USD"


/* ===============================
   PART 3: Number Methods Challenge
   Objective:
   - Convert string to number
   - Calculate absolute difference from 100
   - Find square root
   - Convert final result to string with 2 decimals
=============================== */
let strNum = "64";

let num = Number(strNum);             // Convert string to number
let absNum = Math.abs(num - 100);    // Absolute difference from 100
let sqrtNum = Math.sqrt(num);         // Square root
let finalString = sqrtNum.toFixed(2); // Convert to string with 2 decimals

console.log(num);         // 64
console.log(absNum);      // 36
console.log(sqrtNum);     // 8
console.log(finalString); // "8.00"


/* ===============================
   PART 4: Employee Salary Calculation
   Objective:
   - Calculate daily salary
   - Add bonus
   - Calculate final salary for worked days
   - Round final salary
   - Format employee name and create a message
=============================== */
let empName = " ahmed ";
let baseSalary = 2000;
let bonusPercent = 10;
let daysWorked = 22;

let nameFormatted = empName.trim().toUpperCase(); // Remove spaces and convert to uppercase
let dailySalary = baseSalary / 30;                // Calculate daily salary
let bonusAmount = baseSalary * (bonusPercent / 100); // Calculate bonus
let finalSalary = (dailySalary * daysWorked) + bonusAmount; // Calculate final salary
let roundedSalary = Math.round(finalSalary);     // Round final salary
let salaryText = nameFormatted + " will receive " + roundedSalary + " USD"; // Create message

console.log(nameFormatted); // "AHMED"
console.log(dailySalary);   // 66.666...
console.log(bonusAmount);   // 200
console.log(finalSalary);   // 1666.66...
console.log(roundedSalary); // 1667
console.log(salaryText);    // "AHMED will receive 1667 USD"


/* ===============================
   PART 5: Math Object Challenge
   Objective:
   - Find maximum and minimum of three numbers
   - Calculate square root of maximum
   - Calculate absolute value of minimum
   - Convert results to formatted strings
=============================== */
let a = 45.7;
let b = 12.3;
let c = 89.9;

let maxNum = Math.max(a, b, c); // Maximum number
let minNum = Math.min(a, b, c); // Minimum number
let sqrtMax = Math.sqrt(maxNum); // Square root of max
let absMin = Math.abs(minNum);   // Absolute value of min

let maxStr = maxNum.toFixed(1);  // Convert to string with 1 decimal
let minStr = minNum.toFixed(1);
let sqrtStr = sqrtMax.toFixed(2);
let absStr = absMin.toFixed(2);

console.log(maxStr);  // "89.9"
console.log(minStr);  // "12.3"
console.log(sqrtStr); // "9.49"
console.log(absStr);  // "12.30"