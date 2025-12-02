/* ============================================================
   Browser Object Model (BOM) – Full Educational Example
   Topics Covered:
   1. Location Object (Reading + Changing URL)
   2. Window Open / Close (Full Features)
   3. History API (Navigation Control)
   4. Window Controls (stop, print, focus, scrollTo, scroll, scrollBy)
   5. Scroll API + Scroll-To-Top Button
   ============================================================ */


/* ============================================================
   1. LOCATION OBJECT – FULL DEMO
   ============================================================ */

// The location object contains information about the current URL
console.log(location);
// RESULT: Full location object (protocol, host, path, etc.)

// Show full URL
console.log(location.href);
// RESULT: Prints the current page URL

// Show host (domain + port)
console.log(location.host);
// RESULT: example.com:80

// Show hostname only
console.log(location.hostname);
// RESULT: example.com

// Show protocol
console.log(location.protocol);
// RESULT: "https:" or "http:"

// Show hash value (#section)
console.log(location.hash);
// RESULT: "#sectionName" or empty string

// Reload page
// location.reload();

// Assign new URL
// location.assign("https://google.com");

// Replace current URL (no history)
// location.replace("https://google.com");







/* ============================================================
   2. WINDOW OPEN / CLOSE – FULL DEMO
   ============================================================ */

// Open popup window
let popup1 = window.open(
  "https://google.com",
  "_blank",
  "width=400,height=400,left=200,top=50,menubar=no"
);
// RESULT: Opens Google in a small popup window

// Open empty window after 2 seconds
setTimeout(() => {
  window.open("", "_self", "", false);
}, 2000);
// RESULT: After 2 seconds a new blank page opens (may be blocked)

// Close popup after 3 seconds
setTimeout(() => {
  if (popup1) popup1.close();
}, 3000);
// RESULT: Popup automatically closes







/* ============================================================
   3. HISTORY API – FULL DEMO
   ============================================================ */

// history object controls browser navigation
console.log(history);
// RESULT: Shows history object with "length"

// Back one page
history.back();

// Forward one page
history.forward();

// Move relative to current page
history.go(-2);
// RESULT: Moves back two pages in history






/* ============================================================
   4. WINDOW CONTROLS – stop(), print(), focus(), scrollTo(), scroll(), scrollBy()
   ============================================================ */

/*
  stop()    → Stops the loading of the current page
  print()   → Opens print dialog
  focus()   → Moves focus to a window
  scrollTo(), scroll(), scrollBy() → Control page scrolling
*/

// Open a new window to demonstrate focus
let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// RESULT: Opens a 500x500 Google window

// Give focus to the window
myNewWindow.focus();
// RESULT: The new window becomes active

// Stop page loading
window.stop();
// RESULT: Immediately stops loading elements (images, scripts)

// Print the page
window.print();
// RESULT: Shows the browser print dialog

// Scroll the page to a specific position
window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth"
  });
// RESULT: Smooth scroll to coordinates (500, 200)

// Scroll relative to current position
 window.scrollBy(0, 300);
// RESULT: Scroll 300px down from current position

// Scroll instantly without options
 window.scroll(0, 100);
// RESULT: Moves page to Y = 100








/* ============================================================
   5. SCROLL-TO-TOP BUTTON – FULL DEMO
   ============================================================ */

// Reference to button in HTML
let btn = document.querySelector("button");

// Show button when scrolling down
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
// RESULT: Button appears after scrolling 600px down

// Scroll to top smoothly
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};
// RESULT: Smooth scroll to top when button is clicked

// Show current scroll values
console.log(window.scrollX, window.scrollY);
// RESULT: Displays horizontal & vertical scroll offsets

