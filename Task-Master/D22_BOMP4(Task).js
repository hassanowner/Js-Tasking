
/*
  Test Task 1:
  Topics covered:
  - DOM Selectors (getElementById, querySelector, querySelectorAll)
  - Get/Set Content & Attributes (innerHTML, textContent, getAttribute, setAttribute)
  - Check Attributes (hasAttribute, removeAttribute, hasAttributes)
  - Create Elements (createElement, appendChild)
  - Deal With Children (children, firstElementChild, lastElementChild)
*/

<!-- HTML Reference -->
<div id="dashboard">
  <h1 class="title">Product Dashboard</h1>
  <ul class="products">
    <li data-id="1">Laptop</li>
    <li data-id="2">Smartphone</li>
    <li data-id="3">Tablet</li>
  </ul>
  <button id="addProductBtn">Add New Product</button>
</div>


// Select main elements
let dashboard = document.getElementById("dashboard");
let productsList = dashboard.querySelector(".products");
let addBtn = document.getElementById("addProductBtn");
let productItems = productsList.getElementsByTagName("li");

// Log some info
console.log(dashboard);
console.log(productsList.children[1]); // Smartphone

// Check attributes
productItems[0].hasAttribute("data-id") && console.log("Laptop has data-id");

// Update content dynamically
productItems[2].textContent = "Updated Tablet";

// Add new product dynamically
addBtn.onclick = function() {
  let newProduct = document.createElement("li");
  newProduct.textContent = "Smartwatch";
  newProduct.setAttribute("data-id", "4");
  productsList.appendChild(newProduct);
  console.log("New product added:", newProduct.textContent);
}

// Access children
console.log(productsList.firstElementChild.textContent);
console.log(productsList.lastElementChild.textContent);







/*
  Test Task 2:
  Topics covered:
  - DOM Events (onfocus, onblur, onsubmit)
  - Form Validation & Prevent Default
  - Event Simulation (triggering events programmatically)
  - ClassList manipulation (add, remove, toggle)
*/

<!-- HTML Reference -->
<form id="userForm">
  <input type="text" name="username" placeholder="Username" />
  <input type="number" name="age" placeholder="Age" />
  <button type="submit">Submit</button>
</form>

<div id="status" class="hidden">Form not submitted yet.</div>


// Select elements
let form = document.getElementById("userForm");
let usernameInput = form.querySelector("[name='username']");
let ageInput = form.querySelector("[name='age']");
let statusDiv = document.getElementById("status");

// Add focus & blur events
usernameInput.onfocus = function() {
  usernameInput.style.backgroundColor = "#e0f7fa";
};
usernameInput.onblur = function() {
  usernameInput.style.backgroundColor = "";
};

// Form submission validation
form.onsubmit = function(e) {
  let valid = true;

  if(usernameInput.value === "" || usernameInput.value.length > 10) valid = false;
  if(ageInput.value === "") valid = false;

  if(!valid) {
    e.preventDefault();
    statusDiv.textContent = "Please fill out the form correctly.";
    statusDiv.classList.add("error");
    statusDiv.classList.remove("hidden");
  } else {
    statusDiv.textContent = "Form submitted successfully!";
    statusDiv.classList.remove("error");
    statusDiv.classList.remove("hidden");
  }
};

// Event simulation: blur triggers form check
usernameInput.onblur = function() {
  form.dispatchEvent(new Event("submit")); // Simulate submit
};

// Toggle class example
statusDiv.onclick = function() {
  statusDiv.classList.toggle("hidden");
};


