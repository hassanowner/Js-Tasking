/*
  ===========================================================
  TASK 1: IF + Logical Operators + Ternary + OR/?? 
  ===========================================================

  Scenario:
  - You have a user with age, subscription status, and points
  - Determine the user's access level based on multiple conditions:
      * Age < 18 → "Minor Access"
      * Age >= 18 && Age < 60 → "Adult Access"
      * Age >= 60 → "Senior Access"
      * Subscription active → add "Premium"
      * Points < 50 → add "Low Points Warning"
  - Use if/else, nested if, logical operators, ternary, and OR/?? operators
*/

let userAge = 25;
let subscriptionActive = false;
let points = null;

// Handle default points using nullish coalescing
let userPoints = points ?? 0;

let accessLevel = "";

// If / Else with nested if and logical operators
if (userAge < 18) {
  accessLevel = "Minor Access";
} else if (userAge >= 18 && userAge < 60) {
  accessLevel = "Adult Access";
  // Nested check for subscription
  if (subscriptionActive === true && userPoints >= 50) {
    accessLevel += " + Premium";
  } else if (subscriptionActive === true && userPoints < 50) {
    accessLevel += " + Premium + Low Points Warning";
  } else if (subscriptionActive === false && userPoints < 50) {
    accessLevel += " + Low Points Warning";
  }
} else {
  accessLevel = "Senior Access";
  // Nested ternary for subscription
  accessLevel += subscriptionActive ? " + Premium" : "";
}

console.log(accessLevel);

// Result: "Adult Access + Low Points Warning"
// Explanation: userAge = 25 (Adult), subscriptionActive = false, points = null → userPoints = 0 → triggers Low Points Warning

/*
  ===========================================================
  TASK 2: SWITCH + Comparison Operators + Logical Operators
  ===========================================================

  Scenario:
  - You have a day code (0-6) and a holiday flag
  - Determine the message:
      * 0 → Saturday
      * 1 → Sunday
      * 2,3 → Monday
      * 4 → Tuesday
      * 5 → Wednesday
      * 6 → Thursday
      * Any other value → "Unknown Day"
  - Add logic: If it's a holiday (true) append " - Holiday!" to message
  - Use switch, comparison operators, logical operators, and multiple matching cases
*/

let dayCode = 3;
let holiday = true;

let dayMessage = "";

switch (dayCode) {
  case 0:
    dayMessage = "Saturday";
    break;
  case 1:
    dayMessage = "Sunday";
    break;
  case 2:
  case 3:
    dayMessage = "Monday"; // multiple cases match
    break;
  case 4:
    dayMessage = "Tuesday";
    break;
  case 5:
    dayMessage = "Wednesday";
    break;
  case 6:
    dayMessage = "Thursday";
    break;
  default:
    dayMessage = "Unknown Day";
}

// Append holiday message using logical AND &&
dayMessage += holiday === true ? " - Holiday!" : "";

console.log(dayMessage);

// Result: "Monday - Holiday!"
// Explanation: dayCode = 3 matches case 3 → Monday, holiday = true → append message
