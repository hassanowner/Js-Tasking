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

// Change the document title using window
window.document.title = "BOM Full Demo – JavaScript";

// Log the window size
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// Show the current URL
console.log("Current URL is:", window.location.href);

// Open a new window (disabled in some browsers)
let newWin = window.open("", "", "width=300,height=150");
newWin.document.write("<h3>This is a new window opened by JavaScript</h3>");

// Close the new window after 3 seconds
setTimeout(() => {
  newWin.close();
}, 3000);







/* ============================================================
   2. alert(), confirm(), prompt() – FULL DEMO
   ============================================================ */

// alert(): simple message
alert("Welcome to the BOM demo! Press OK to continue.");

// confirm(): asks the user yes/no
let wantsToDelete = confirm("Do you really want to delete this file?");
if (wantsToDelete) {
  console.log("User confirmed deletion.");
} else {
  console.log("User canceled deletion.");
}

// prompt(): collects user input
let day = prompt("What is your favorite day?", "Type your day here...");
console.log("User's favorite day:", day);

// An additional example: ask for age
let age = prompt("How old are you?", "18");
console.log("User age is:", age);







/* ============================================================
   3. setTimeout() + clearTimeout() – FULL DEMO
   ============================================================ */

// Create a function that will run later
function delayedMessage(name, country) {
  console.log(`Hello ${name}, welcome from ${country}!`);
}

// Schedule 3 delayed messages
let t1 = setTimeout(delayedMessage, 2000, "Hassan", "Iraq");
let t2 = setTimeout(delayedMessage, 4000, "John", "USA");
let t3 = setTimeout(() => console.log("This message runs after 6 seconds!"), 6000);

// Add a button (already existing in page) to cancel all timeouts
let cancelTimeoutBtn = document.querySelector("button");
cancelTimeoutBtn.onclick = function () {
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  console.log("All timeouts have been canceled!");
};







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

// Example 2: Print a message repeatedly
let msgInterval = setInterval(() => {
  console.log("This message appears every 2 seconds...");
}, 2000);

// Stop it after 10 seconds
setTimeout(() => {
  clearInterval(msgInterval);
  console.log("Stopped the repeating message.");
}, 10000);

// Example 3: Repeated greeting
let greetInterval = setInterval(() => {
  console.log("Hello again!");
}, 1500);

// Stop greeting after 5 seconds
setTimeout(() => {
  clearInterval(greetInterval);
  console.log("Greeting interval stopped.");
}, 5000);

