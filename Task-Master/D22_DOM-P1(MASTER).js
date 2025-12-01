
<!-- ============================================================
         DOM MASTER PANEL – Full Structured Tasks
         
         This file demonstrates key DOM concepts in JavaScript.
         Each section includes a reference HTML snippet followed
         by the corresponding JavaScript code to manipulate it.

         Topics Covered (in order):

         1. DOM Selectors
            - Selecting elements by ID, Tag Name, Class Name
            - Using querySelector and querySelectorAll
            - Accessing specific elements from collections

         2. Get / Set Content & Attributes
            - Reading and modifying innerHTML and textContent
            - Changing element attributes directly
            - Using getAttribute and setAttribute methods

         3. Check Attributes
            - Checking if an attribute exists using hasAttribute
            - Updating or removing attributes
            - Checking if an element has any attributes using hasAttributes

         4. Create Elements (Basic)
            - Creating new elements with createElement
            - Adding attributes and comments
            - Appending text and elements to the DOM

         5. Create Product (Heading + Paragraph)
            - Building a structured product box dynamically
            - Adding a heading and paragraph inside a div

         6. Deal With Children
            - Accessing children and childNodes
            - Using firstChild, lastChild
            - Using firstElementChild, lastElementChild
       ============================================================ -->


<!-- ============================================================
   1) DOM SELECTORS
============================================================ -->

<!-- HTML Reference -->
<ul id="box">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<span class="note">Note 1</span>
<span class="note">Note 2</span>
<span class="note">Note 3</span>

<script>
/*
  DOM [Selectors]
  - Select elements by ID, Tag, Class
  - Use querySelector / querySelectorAll
  - Access specific elements from collections
*/
let box = document.getElementById("box");
let items = document.getElementsByTagName("li");
let notes = document.getElementsByClassName("note");
let firstNote = document.querySelector(".note");
let allNotes = document.querySelectorAll(".note");

console.log(box);          // Element by ID
console.log(items[1]);     // Second <li>
console.log(notes[0]);     // First element with class "note"
console.log(firstNote);    // First matched .note
console.log(allNotes[2]);  // Third matched .note
</script>




         

<!-- ============================================================
   2) Get / Set Content & Attributes
============================================================ -->

<!-- HTML Reference -->
<div class="msg">Original Message</div>
<img src="https://via.placeholder.com/100" alt="Placeholder" />
<a href="https://www.google.com/" class="myLink">Google Official</a>

<script>
/*
  DOM [Get / Set Content & Attributes]
  - Read / modify innerHTML & textContent
  - Change attributes directly
  - Use getAttribute / setAttribute
*/
let msg = document.querySelector(".msg");

console.log(msg.innerHTML);
console.log(msg.textContent);

msg.innerHTML = "Updated <b>Message</b> from JS";
msg.textContent = "Updated <b>Message</b> from JS (textContent)";

// Modify image attributes
document.images[0].src = "https://via.placeholder.com/100";
document.images[0].alt = "Google Image";
document.images[0].title = "Google Logo";
document.images[0].className = "image-box";

// Attribute Methods
let link = document.querySelector(".myLink");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com/");
link.setAttribute("title", "Google Official Website");
</script>





         

<!-- ============================================================
   3) Check Attributes
============================================================ -->

<!-- HTML Reference -->
<p class="info" data-type="oldValue">Some Info Paragraph</p>

<script>
/*
  DOM [Check Attributes]
  - Check if an attribute exists using hasAttribute
  - Update or remove attribute
  - Check if element has any attributes using hasAttributes
*/
let paragraph = document.querySelector(".info");

if (paragraph.hasAttribute("data-type")) {
  if (paragraph.getAttribute("data-type") === "") {
    paragraph.removeAttribute("data-type");
  } else {
    paragraph.setAttribute("data-type", "Updated Value");
  }
} else {
  console.log("Attribute Not Found");
}

if (paragraph.hasAttributes()) {
  console.log("Paragraph has attributes");
} else {
  console.log("Paragraph has NO attributes");
}
</script>





         

<!-- ============================================================
   4) Create Elements (Basic)
============================================================ -->

<!-- HTML Reference -->
<!-- No initial HTML needed -->

<script>
/*
  DOM [Create Elements]
  - createElement
  - createTextNode
  - createComment
  - set attributes
  - appendChild
*/
let card = document.createElement("div");
let cardAttr = document.createAttribute("data-box");
let cardText = document.createTextNode("This is a Google card created by JavaScript");
let comment = document.createComment("This is a JS-generated Google card");

card.className = "card";
card.setAttributeNode(cardAttr);
card.setAttribute("data-test", "123");

card.appendChild(comment);
card.appendChild(cardText);

document.body.appendChild(card);
</script>





         

<!-- ============================================================
   5) Create Product (Heading + Paragraph)
============================================================ -->

<!-- HTML Reference -->
<!-- No initial HTML needed -->

<script>
/*
  DOM [Create Product]
  - Build a structured product box
  - Add heading and paragraph dynamically
*/
let product = document.createElement("div");
let title = document.createElement("h2");
let desc = document.createElement("p");

let titleText = document.createTextNode("Google Pixel 9");
let descText = document.createTextNode("A high-end Google smartphone with advanced features.");

title.appendChild(titleText);
desc.appendChild(descText);

product.className = "product";
product.appendChild(title);
product.appendChild(desc);

document.body.appendChild(product);
</script>





         

<!-- ============================================================
   6) Deal With Children
============================================================ -->

<!-- HTML Reference -->
<div class="container">
  Text Node
  <p>Child Paragraph 1</p>
  <span>Child Span 1</span>
  Comment
</div>

<script>
/*
  DOM [Deal With Children]
  - Access children and childNodes
  - Use firstChild / lastChild
  - Use firstElementChild / lastElementChild
*/
let container = document.querySelector(".container");

console.log(container.children);           // HTMLCollection of elements only
console.log(container.children[0]);        // First element child

console.log(container.childNodes);         // NodeList (text, comment, elements)
console.log(container.childNodes[1]);      // Could be text/comment/element

console.log(container.firstChild);         // First node (text or comment)
console.log(container.lastChild);          // Last node

console.log(container.firstElementChild);  // First element child
console.log(container.lastElementChild);   // Last element child
</script>

