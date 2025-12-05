============================================================
 Browser Object Model (BOM) – Full Educational Tutorial
============================================================

This document will walk through three main topics of the BOM in order:

1. Local Storage – (Basics: setItem, getItem, removeItem, clear, key)
2. Local Storage Practice – (Color picker with saving state)
3. Session Storage – (Storing input temporarily per tab)

Each topic includes:
- The educational purpose
- Clean explained code
- Comments inside the code
- A final explanation of the expected output


============================================================
 PART 1 — BOM: Local Storage (JavaScript Only)
============================================================

This example demonstrates the main Local Storage methods and shows how
data can be saved, retrieved, removed, and applied to the page.

------------------------------------------------------------
 Code (With Educational Comments)
------------------------------------------------------------

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem(key, value)
  - getItem(key)
  - removeItem(key)
  - clear()
  - key(index)

  Notes:
  - Data in Local Storage never expires.
  - Works on both HTTP and HTTPS.
  - Private/Incognito mode may block saving.
*/

// Store values in Local Storage using different syntax styles:
window.localStorage.setItem("color", "#F00");     // Method 1
window.localStorage.fontWeight = "bold";          // Method 2
window.localStorage["fontSize"] = "20px";         // Method 3

// Retrieve values from Local Storage:
console.log(window.localStorage.getItem("color")); // "#F00"
console.log(window.localStorage.color);            // "#F00"
console.log(window.localStorage["color"]);         // "#F00"

// Display the first key in Local Storage
console.log(window.localStorage.key(0));

// Apply Local Storage color to the page background
document.body.style.backgroundColor =
  window.localStorage.getItem("color");

// Display the full Local Storage object
console.log(window.localStorage);
console.log(typeof window.localStorage);

------------------------------------------------------------




  

  ============================================================
  PART 2 - COLOR PICKER + LOCAL STORAGE (FULL ENGLISH EXPLANATION)
  ============================================================

   This example demonstrates how to:
   - Create a modern color picker using 4 square color boxes.
   - Apply the selected color to the page background.
   - Save the chosen color inside Local Storage.
   - Load and apply the saved color automatically on page refresh.
   - Use a variable (selectedColor) to store the active color.
   - Add click events that update both the UI and Local Storage.
   - Maintain color persistence even after reloading the page.
   - Provide a clean user experience by storing only the last choice.
-->

<!-- ===================== CSS ===================== -->
<style>
  /* Main container that holds all the color squares */
  .color-picker {
    display: flex;
    gap: 15px;
    margin: 20px;
  }

  /* Style for each individual color square */
  .color-picker div {
    width: 60px;
    height: 60px;
    border-radius: 10px;   /* Gives smooth rounded corners */
    cursor: pointer;       /* Indicates that each square is clickable */
    opacity: 0.7;          /* Default low visibility */
    transition: 0.3s;      /* Smooth hover & active transitions */
  }

  /* When a color is active (selected), make it fully visible */
  .color-picker div.active {
    opacity: 1;
    transform: scale(1.05);
  }

  /* Modern aesthetic color palette */
  .c1 { background: #ff6b6b; }  /* Soft Red */
  .c2 { background: #4ecdc4; }  /* Aqua Mint */
  .c3 { background: #ffe66d; }  /* Pastel Yellow */
  .c4 { background: #1a535c; }  /* Dark Teal */
</style>

<!-- ===================== HTML ===================== -->
<!-- Four color squares inside one color picker container -->
<div class="color-picker">
  <div class="c1" data-color="#ff6b6b"></div>
  <div class="c2" data-color="#4ecdc4"></div>
  <div class="c3" data-color="#ffe66d"></div>
  <div class="c4" data-color="#1a535c"></div>
</div>

<!-- ===================== JavaScript ===================== -->
<script>
  // Variable that will store the color chosen by the user
  let selectedColor;

  // Select all color boxes from the page
  let boxes = document.querySelectorAll(".color-picker div");

  // Load the saved color from localStorage (if it exists)
  let saved = localStorage.getItem("pageColor");

  /*
    If a previously saved color exists:
    - Store it inside the variable
    - Apply it to the background of the page
    - Find the color box matching this color and add "active" class
  */
  if (saved) {
    selectedColor = saved;
    document.body.style.background = saved;

    boxes.forEach(box => {
      if (box.dataset.color === saved) {
        box.classList.add("active");
      }
    });
  }

  // Add click event to each color box
  boxes.forEach(box => {
    box.onclick = () => {
      /*
        When a box is clicked:
        - Remove the active class from all boxes
        - Get the clicked box color from data-color
        - Store it inside the selectedColor variable
        - Apply the color to the background
        - Save the color to localStorage
        - Add the "active" class to the clicked box
      */

      // Remove active class from all boxes
      boxes.forEach(b => b.classList.remove("active"));

      // Get the selected color
      selectedColor = box.dataset.color;

      // Apply the background color
      document.body.style.background = selectedColor;

      // Save it to localStorage
      localStorage.setItem("pageColor", selectedColor);

      // Mark the clicked color as active
      box.classList.add("active");
    };
  });
</script>

<!-- ============================================================
   RESULT EXPLANATION
   ------------------------------------------------------------
   - Clicking any colored square changes the page background.
   - The clicked square becomes fully opaque (active).
   - The selected color is stored in Local Storage.
   - After refreshing the page:
       * The last chosen color is applied automatically.
       * The matching color square regains the "active" class.
   - This demonstrates persistent UI state using Local Storage.
   ============================================================ -->





  


  
============================================================
 PART 3 — Session Storage Example (HTML + JS)
============================================================

This example explains how Session Storage works:
- Data is saved for the current tab only.
- A new tab has a fresh session.
- Duplicating a tab copies its session.

------------------------------------------------------------
 HTML CODE
------------------------------------------------------------

<form action="">
  <input type="text" class="name" />
</form>


------------------------------------------------------------
 JS CODE
------------------------------------------------------------

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem()
  - getItem()
  - removeItem()
  - clear()
  - key()

  Notes:
  - Each browser tab has its own session.
  - Closing the tab erases all sessionStorage values.
*/

// Save input value when user leaves the field
document.querySelector(".name").onblur = function () {
  window.localStorage.setItem("input-name", this.value);
};


------------------------------------------------------------
 RESULT EXPLANATION
------------------------------------------------------------
- When the user types into the input and leaves it (blur event),
  the text is saved into Local Storage (or sessionStorage if used).
- Refreshing the page keeps the saved text.
- Opening a new tab does *not* keep sessionStorage values,
  but Local Storage values remain across all tabs.

