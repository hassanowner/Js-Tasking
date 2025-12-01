

<!-- ============================================================
   DOM MASTER PANEL – FULL STRUCTURED TASKS

   This document demonstrates key DOM manipulation concepts
   in JavaScript. Each section includes:

     1) HTML Reference Block
     2) JS Test Task Code with detailed comments

   ------------------------------------------------------------
   Topics Covered (in order):

     1. DOM CSS Manipulation
        - Changing styles dynamically using JS
        - Using style, cssText, removeProperty, setProperty
     
     2. Deal With Elements
        - Adding elements before, after, inside (append, prepend)
        - Removing elements dynamically
     
     3. DOM Traversing
        - Accessing parent, next, previous siblings and children
     
     4. DOM Cloning
        - cloneNode with deep copy
     
     5. Add Event Listener + Cloned Element Handling
        - addEventListener
        - Handling multiple events and detecting cloned elements
============================================================ -->

        
<!-- ============================================================
   1) DOM CSS Manipulation
   ============================================================ -->

<!-- HTML Reference -->
<div id="my-div">Testing Styles</div>

<style>
  div {
    line-height: 1.6;
  }

/*
  ============================================
  DOM [CSS]
  - style                        → modify inline styles
  - cssText                      → set multiple inline styles at once
  - removeProperty(propertyName) → remove specific inline or stylesheet style
  - setProperty(propertyName, value, priority) → add or modify style with optional priority
  ============================================
*/

<script>
let element = document.getElementById("my-div");

// Apply single inline styles
element.style.color = "red";
element.style.fontWeight = "bold";

// Apply multiple styles at once
element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// Remove a specific style
element.style.removeProperty("color");

// Set a new property with priority
element.style.setProperty("font-size", "40px", "important");

// Manipulate first stylesheet
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");


  




<!-- ============================================================
   2) Deal With Elements
   ============================================================ -->

<!-- HTML Reference -->
<div id="my-div">Main Div</div>

/*
  ============================================
  DOM [Deal With Elements]
  - before()   → Add an element BEFORE the target element
  - after()    → Add an element AFTER the target element
  - append()   → Add an element INSIDE the target (at the END)
  - prepend()  → Add an element INSIDE the target (at the START)
  - remove()   → Remove the target element from the DOM
  ============================================
*/


// Select the main element
let element2 = document.getElementById("my-div");

// Create elements for each method demonstration
let elBefore = document.createElement("p");
elBefore.textContent = "This paragraph was added BEFORE the div";

let elAfter = document.createElement("p");
elAfter.textContent = "This paragraph was added AFTER the div";

let elAppend = document.createElement("p");
elAppend.textContent = "This paragraph was APPENDED (added at the end inside the div)";

let elPrepend = document.createElement("p");
elPrepend.textContent = "This paragraph was PREPENDED (added at the start inside the div)";

// Apply the methods
element2.before(elBefore);   // Insert BEFORE
element2.after(elAfter);     // Insert AFTER
element2.append(elAppend);   // Append INSIDE (end)
element2.prepend(elPrepend); // Prepend INSIDE (start)

// Remove the element completely (uncomment to test)
// element2.remove();





  


<!-- ============================================================
   3) DOM Traversing
   ============================================================ -->

<!-- HTML Reference -->
<div class="box">
  <p class="one">Paragraph One</p>
  <span class="two">Child Span</span>
  <h3 class="three">Heading Three</h3>
</div>

/*
  ============================================
  DOM Traversing – Navigating Between DOM Nodes
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
  ============================================
*/

let span = document.querySelector(".two");

// 1) nextSibling — may return a Text Node (spaces, line breaks, comments)
console.log("nextSibling:");
console.log(span.nextSibling);

// 2) nextElementSibling — returns the next element only (ignores text nodes)
console.log("nextElementSibling:");
console.log(span.nextElementSibling);

// 3) previousSibling — may return a Text Node (spaces, line breaks)
console.log("previousSibling:");
console.log(span.previousSibling);

// 4) previousElementSibling — returns the previous element only
console.log("previousElementSibling:");
console.log(span.previousElementSibling);

// 5) parentElement — returns the direct parent element of the node
console.log("parentElement:");
console.log(span.parentElement);

// When clicking the span element, remove its parent from the DOM
span.onclick = function () {
  span.parentElement.remove();
};






<!-- ============================================================
   4) DOM Cloning
   ============================================================ -->

<!-- HTML Reference -->
<div>
  <p id="main-p">Original Paragraph</p>
</div>


/*
  ============================================
  DOM [Cloning]
  - cloneNode(Deep)
  ============================================
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);








<!-- ============================================================
   5) Add Event Listener + Clone Handling
   ============================================================ -->

<!-- HTML Reference -->
<p>Click to Clone</p>


/*
  ============================================
  DOM [Add Event Listener]
  - addEventListener
  - attach multiple events
  - removeEventListener
  - click, clone, detect clone
  ============================================
*/

let mainPara = document.querySelector("p");

// Clone on click
mainPara.onclick = function () {
  let newP = mainPara.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// Detect click on cloned elements
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am a Cloned Paragraph");
  }
});

