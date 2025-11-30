    <!-- ============================================================
         DOM EVENTS & CLASSLIST MASTER PANEL
         
         This file demonstrates key DOM events and classList usage.
         Each section includes reference HTML followed by the
         corresponding JavaScript code.

         Topics Covered:

         1. DOM Events
            - Using events directly in HTML or via JS
            - Common events: onclick, oncontextmenu, onmouseenter, onmouseleave
            - Window events: onload, onscroll, onresize
            - Input events: onfocus, onblur, onsubmit

         2. Form Validation & Prevent Default
            - Validating user input
            - Preventing form submission if invalid
            - Prevent default action on links

         3. Event Simulation
            - Programmatically triggering click, focus, blur

         4. DOM ClassList
            - Accessing classList
            - Methods: length, contains, item, add, remove, toggle
       ============================================================ -->
             
<!-- ============================================================
   1) DOM EVENTS
============================================================ -->

<!-- HTML Reference -->
<button id="btn">Hover Me</button>

<script>
/*
  DOM [Events]
  - Use events directly in HTML or via JS
  - Common events: onclick, oncontextmenu, onmouseenter, onmouseleave
  - Window events: onload, onscroll, onresize
*/
let myBtn = document.getElementById("btn");

// Triggered when mouse leaves the button
myBtn.onmouseleave = function () {
  console.log("Mouse left the button");
};

// Triggered when window is resized
window.onresize = function () {
  console.log("Window resized");
};
</script>





    

<!-- ============================================================
   2) FORM VALIDATION & PREVENT DEFAULT
============================================================ -->

<!-- HTML Reference -->
<form>
  <input type="text" name="username" placeholder="Username" />
  <input type="number" name="age" placeholder="Age" />
  <button type="submit">Submit</button>
</form>

<a href="https://www.google.com/">Google Link</a>

<script>
/*
  DOM [Form Validation & Prevent Default]
  - Validate user input fields
  - Prevent form submission if input invalid
  - Prevent default action on links
*/
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

// Form submission validation
document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (!userValid || !ageValid) {
    e.preventDefault(); // Stop submission if invalid
  }
};

// Prevent default action on the first link
document.links[0].onclick = function (event) {
  console.log("Link clicked:", event);
  event.preventDefault();
};
</script>





    

<!-- ============================================================
   3) EVENT SIMULATION
============================================================ -->

<!-- HTML Reference -->
<input type="text" class="one" placeholder="Field One" />
<input type="text" class="two" placeholder="Field Two" />
<a href="https://www.google.com/">Trigger Link</a>

<script>
/*
  DOM [Event Simulation]
  - Programmatically trigger focus, blur, click
*/
let one = document.querySelector(".one");
let two = document.querySelector(".two");

// Automatically focus the second input on window load
window.onload = function () {
  two.focus();
};

// When the first input loses focus, trigger the link click
one.onblur = function () {
  document.links[0].click();
};
</script>





    

<!-- ============================================================
   4) DOM CLASSLIST
============================================================ -->

<!-- HTML Reference -->
<div id="my-div" class="osama example">Click Me To Toggle</div>

<script>
/*
  DOM [ClassList]
  - Access classList
  - Methods: length, contains, item, add, remove, toggle
*/
let element = document.getElementById("my-div");

// Log classList information
console.log(element.classList);           // DOMTokenList of classes
console.log(typeof element.classList);   // object
console.log(element.classList.contains("osama")); // true
console.log(element.classList.contains("show"));  // false
console.log(element.classList.item(1));          // second class

// Toggle 'show' class on click
element.onclick = function () {
  element.classList.toggle("show");
};
</script>

