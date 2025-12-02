/* ============================================================
   Browser Object Model (BOM) – Full Educational Example
   Topics Covered:
   1. Window Object (All demonstrated features)
   2. alert – confirm – prompt (All features included)
   3. setTimeout + clearTimeout (All features included)
   4. setInterval + clearInterval (All features included)
   ============================================================ */


/* ============================================================
   1. WINDOW OBJECT – FULL DEMO
   ============================================================ */

// Change the document title using window (basic BOM example)
window.document.title = "BOM Full Demo – JavaScript";
// RESULT: The browser tab title becomes: "BOM Full Demo – JavaScript"


// Using the BOM we can create many examples related to browser access,
// such as controlling window size, getting the URL, or opening new windows.
// The following examples demonstrate these capabilities.

/* 
============================================================
NOTE:
The code below is ONLY an example of what BOM can do.
These features (window size, location, opening windows, etc.)
WILL BE STUDIED LATER in detail.
============================================================

// Log the window size
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);
// RESULT: Console prints current window width and height.

// Show the current URL
console.log("Current URL is:", window.location.href);
// RESULT: Console prints the full URL of the current page.

// Open a new window (may be blocked in some browsers)
let newWin = window.open("", "", "width=300,height=150");
newWin.document.write("<h3>This is a new window opened by JavaScript</h3>");
// RESULT: A small popup window opens with the text inside it.

// Close the new window after 3 seconds
setTimeout(() => {
  newWin.close();
}, 3000);
// RESULT: The popup window closes automatically after 3 seconds.

============================================================
*/




/* ============================================================
   2. alert(), confirm(), prompt() – FULL DEMO
   ============================================================ */

// alert(): simple message
alert("Welcome to the BOM demo! Press OK to continue.");
// RESULT: A popup appears with the message and only an OK button.


// confirm(): asks the user yes/no
let wantsToDelete = confirm("Do you really want to delete this file?");
if (wantsToDelete) {
  console.log("User confirmed deletion.");
} else {
  console.log("User canceled deletion.");
}
// RESULT:
// If user clicks OK → "User confirmed deletion." appears in the console.
// If user clicks Cancel → "User canceled deletion." appears.

// prompt(): collects user input
let day = prompt("What is your favorite day?", "Type your day here...");
console.log("User's favorite day:", day);
// RESULT: Whatever the user types in prompt is logged in the console.

// An additional example: ask for age
let age = prompt("How old are you?", "18");
console.log("User age is:", age);
// RESULT: Console prints the age the user entered.









/* ============================================================
   3. setTimeout() + clearTimeout() – FULL DEMO
   ============================================================ */

// Create a function that will run later
function delayedMessage(name, country) {
  console.log(`Hello ${name}, welcome from ${country}!`);
}
// RESULT (when function runs): Console prints a greeting message.


// Schedule 3 delayed messages
let t1 = setTimeout(delayedMessage, 2000, "Hassan", "Iraq");
// RESULT after 2 seconds: "Hello Hassan, welcome from Iraq!"

let t2 = setTimeout(delayedMessage, 4000, "John", "USA");
// RESULT after 4 seconds: "Hello John, welcome from USA!"

let t3 = setTimeout(() => console.log("This message runs after 6 seconds!"), 6000);
// RESULT after 6 seconds: Console prints: "This message runs after 6 seconds!"


// Add a button (already existing in page) to cancel all timeouts
let cancelTimeoutBtn = document.querySelector("button");
cancelTimeoutBtn.onclick = function () {
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  console.log("All timeouts have been canceled!");
};
// RESULT: If user clicks the button BEFORE time is up,
// none of the delayed messages will run, and console shows:
// "All timeouts have been canceled!"









/* ============================================================
   4. setInterval() + clearInterval() – FULL DEMO
   ============================================================ */

// Select the div to display countdown
let counterDiv = document.querySelector("div");


// Example 1: A countdown timer
function countdown() {
  counterDiv.innerHTML = Number(counterDiv.innerHTML) - 1;

  if (counterDiv.innerHTML === "0") {
    clearInterval(countDownInterval);
    console.log("Countdown completed.");
  }
}

let countDownInterval = setInterval(countdown, 1000);
// RESULT: The number inside the div decreases every second until it reaches 0.
// Console prints "Countdown completed." at the end.


// Example 2: Print a message repeatedly
let msgInterval = setInterval(() => {
  console.log("This message appears every 2 seconds...");
}, 2000);
// RESULT: Console prints the message every 2 seconds.


// Stop it after 10 seconds
setTimeout(() => {
  clearInterval(msgInterval);
  console.log("Stopped the repeating message.");
}, 10000);
// RESULT: After 10 seconds, the repeating message stops,
// and console prints: "Stopped the repeating message."


// Example 3: Repeated greeting
let greetInterval = setInterval(() => {
  console.log("Hello again!");
}, 1500);
// RESULT: Console prints "Hello again!" every 1.5 seconds.


// Stop greeting after 5 seconds
setTimeout(() => {
  clearInterval(greetInterval);
  console.log("Greeting interval stopped.");
}, 5000);
// RESULT: After 5 seconds, "Hello again!" stops repeating,
// and console prints: "Greeting interval stopped."

