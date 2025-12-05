# 🏷️JavaScript Fundamentals 

### Data Types & typeof
- Primitive types: string, number, boolean, undefined, null, symbol, bigint  
- typeof operator for detecting data type  
- Special cases like typeof null and typeof arrays  

### Variables Introduction
- Declaring variables  
- Variable naming basics  
- Storing and updating values  

### Identifiers Naming Rules
- Valid vs invalid variable names  
- Rules: no starting with numbers, no spaces, no special characters except _ and $  
- Case sensitivity  

### Var / Let / Const Differences
- var: function-scoped, hoisting behavior  
- let: block-scoped, no redeclaration  
- const: block-scoped, must be assigned at declaration, immutable binding (not immutable value)  

### String Syntax & Escape Sequences
- Using single, double, and backtick quotes  
- Escape sequences: \n, \t, \", \'  
- Multiline strings with template literals  

### Concatenation
- Combining strings using +  
- Implicit type coercion when mixing string + number  

### Template Literals
- Using backticks ``  
- Embedding variables with ${}  
- Multiline strings and expressions inside templates
---

# 🏷️Numbers & Math

### Number Formatting & Precision
- Handling floating point precision issues
- Formatting numbers using toFixed and toPrecision
- Converting strings to numbers using Number(), parseInt(), parseFloat()

### Number Methods
- toString()
- toFixed()
- toPrecision()
- Number.isInteger()
- Number.isNaN()

### Math Object Methods
- Math.round(), Math.floor(), Math.ceil()
- Math.max(), Math.min()
- Math.random()
- Math.pow(), Math.sqrt(), Math.trunc()

### Number Challenge
- Applying number methods together
- Solving formatting, rounding, and conversion tasks

### String Methods (Basics)
- length property
- Accessing characters by index
- toUpperCase(), toLowerCase()
- trim(), trimStart(), trimEnd()

### String Methods (slice, repeat, split)
- slice(start, end)
- repeat(times)
- split(separator, limit)

### String Advanced Methods
- substring(), substr()
- includes(), startsWith(), endsWith()
- indexOf(), lastIndexOf()
- chaining multiple string methods together

---

# 🏷️If Condition/ Else Control Flow

### Comparison Operators
- == Equal (checks value only)
- != Not Equal (checks value only)
- === Identical (checks value + type)
- !== Not Identical (checks value + type)
- >, >=, <, <= (Relational operators for comparing numbers)

### Logical Operators
- ! (Not) → reverses boolean value
- && (And) → true if all conditions are true
- || (Or) → true if any condition is true

### Control Flow (if)
- if / else if / else → executes blocks based on conditions
- Nested if → condition inside another condition

### Conditional (Ternary) Operator
- Syntax: condition ? ifTrue : ifFalse
- Can be nested for multiple conditions
- Useful for short conditional assignments or prints

### Logical OR || and Nullish Coalescing ??
- || returns first truthy value (considers falsy: 0, "", null, undefined, false)
- ?? returns first defined value (only checks null or undefined)

### Switch Statement
- switch(expression) with case and default
- Default ordering matters
- Multiple cases can match the same block
- Comparison uses === (strict equality)

---
# 🏷️Arrays

### Creating Arrays
- Creating arrays using `new Array()` and `[]`  
- Accessing elements by index  
- Working with nested arrays  
- Updating/changing array elements  
- Checking if a value is an array using `Array.isArray()`  

### Array Length
- Getting the length of an array  
- Modifying the length property to truncate or expand the array  

### Adding and Removing Elements
- `unshift()` → Add item to the start  
- `push()` → Add item to the end  
- `shift()` → Remove the first element  
- `pop()` → Remove the last element  

### Searching in Arrays
- `indexOf(value, fromIndex)`  
- `lastIndexOf(value, fromIndex)`  
- `includes(value, fromIndex)`  

### Sorting Arrays
- `sort()` for sorting elements  
- `reverse()` for reversing array order  

### Slicing and Splicing
- `slice(start, end)` for copying a portion without changing the original  
- `splice(start, deleteCount, items…)` for removing/replacing/adding elements in the original array  

### Joining Arrays
- `concat()` for merging arrays  
- `join(separator)` for converting array elements into a string

---
# 🏷️For Loop  
### Looping Over Sequences (Arrays)
- Looping through array elements using index-based loops  
- Accessing each value during iteration  

### Nested Loops
- Loop inside another loop  
- Useful for working with multi-dimensional arrays or combinations  

### Loop Control (break, continue, labels)
- `break` → stops the loop entirely  
- `continue` → skips the current iteration  
- Labels → controlling nested loops by naming them  

### Advanced For Loop (No Conditions)
- Using `for(;;)` as an infinite loop  
- Manual breaking from inside the loop  

### Practical Loop Example (Products + Colors)
- Looping over product list  
- Nested loop to show available colors for each product  
- Demonstrating real usage of loops together  

### While Loop
- Loop that continues as long as a condition is true  
- Good for unknown iteration counts  

### Do / While Loop
- Executes at least once before checking the condition  
- Useful when you need the loop to run once regardless of the condition

---
# 🏷️Function 
### What Is a Function?
- A reusable block of code designed to perform a specific task  
- Helps organize code, avoid repetition, and improve readability  

### User-Defined vs Built-In Functions
- User-Defined: functions you create  
- Built-In: provided by JavaScript (e.g., `console.log()`, `Math.random()`)  

### Function Syntax + Basic Usage
- Declaring a function with `function name() {}`  
- Calling a function to execute its code  

### Real-Life Function Example
- A function that calculates price, shows messages, or formats text  
- Demonstrates how functions simplify tasks  

### Parameters & Arguments
- Parameters: placeholders inside the function  
- Arguments: real values passed when calling the function  

### Practical Examples
- Small functions used to solve real problems  
- Such as calculating totals, formatting data, validating input  

### Advanced Function Examples
- More complex logic inside functions  
- Using conditions, loops, nested functions, and more  

### return Keyword
- Sends a value back from a function  
- Stops execution of the function immediately  

### Automatic Semicolon Insertion (ASI)
- JavaScript may insert semicolons automatically  
- Can cause unexpected behavior in return statements  

### Interrupting Function Execution
- Using `return` inside conditions to stop running  
- Useful for validations or early exits  

### Default Parameters (Old & ES6)
- Old method: checking if parameter is undefined  
- Modern ES6: `function f(x = 10) {}`  

### Rest Parameters (...args)
- Collects unlimited arguments into an array  
- Useful for mathematical operations, merging, logging, etc.  

### Default Parameters
- Setting fallback values for function arguments  
- Used when caller doesn't provide enough values  

### Rest Parameters (...args)
- Allows flexible number of inputs  
- Replaces the old `arguments` object  

### Conditions Inside Functions
- Using `if`, `else`, and nested conditions inside functions  
- Helps control function behavior based on inputs  

### Loops & Array Operations
- Using `for`, `while`, `forEach`, etc. inside functions  
- Processing arrays, filtering, mapping, and transforming data  

### Anonymous Functions
- Functions without a name  
- Used in callbacks, event listeners, and arrays  

### Passing Functions as Arguments (Callbacks)
- Sending a function to another function  
- Used in events, timeouts, array methods, animations  

### setTimeout + Callback
- Delays execution of a function  
- Callback runs after a specified time  

### Nested Functions
- Function inside another function  
- Inner function can access outer variables (closure)  

### Returning Functions
- Function that returns another function  
- Used in factories, configurations, and advanced patterns  

### Arrow Functions
- Short syntax for writing functions  
- `() => {}` or `x => x * 2`  
- Does not have `this`, `arguments`, or `prototype`  

### Scope (Global / Local)
- Global: accessible everywhere  
- Local: inside functions or blocks  

### Block Scope (if / for)
- Variables declared with `let` or `const` exist only inside `{}`  

### Lexical Scope
- Inner functions can access variables from outer functions  
- JavaScript determines scope based on code placement, not execution

### Map Practice
- Practice using the **map()** method  
- Transforming arrays into new arrays  
- Applying calculations or formatting to each element  
- Ensures the output array has the same length as the original  

### Filter Practice
- Practice using the **filter()** method  
- Selecting elements based on conditions  
- Returning a new array with only the matching values  
- Useful for search, cleanup, and validating data  

### Reduce Practice
- Practice using the **reduce()** method  
- Accumulating values into a single result  
- Common uses: sum, max/min, grouping, counting  
- Works with accumulator and current value logic  

### forEach Practice
- Practice using the **forEach()** method  
- Looping through arrays without returning a new one  
- Used for printing, updating UI, applying actions  
- Good for side effects and iteration-only operations  

### Combined Array Methods Practice
- Combined practice using **map, filter, reduce, forEach** together  
- Building full pipelines to transform, clean, calculate, and iterate  
- Shows how array methods work in harmony  
- Practical tasks demonstrating real project patterns

---
# 🏷️Object 
### Object Basics & Accessing Properties
- Creating basic objects  
- Reading and updating properties  
- Understanding property types and values  

### Dot Notation vs Bracket Notation & Dynamic Keys
- Accessing properties using dot notation  
- Accessing properties using bracket notation  
- Using variables to create dynamic property keys  

### Nested Objects & Methods
- Storing objects inside other objects  
- Accessing deeply nested values  
- Adding and calling methods inside objects  

### Creating Objects Using `new Object()`
- Building empty objects with the constructor  
- Adding properties after creation  

### The `this` Keyword (Object Context & Global Context)
- Using `this` inside methods to refer to the object  
- Understanding how `this` behaves in the global scope  

### Object.create()
- Creating new objects with a specific prototype  
- Inheriting properties and methods from another object  

### Object.assign()
- Cloning objects  
- Merging multiple objects  
- Adding or overriding properties during assignment

---
# 🏷️ Documents Object ( DOM )
### DOM Selectors
- getElementById, getElementsByTagName, getElementsByClassName  
- querySelector, querySelectorAll  
- Selecting specific elements from returned collections  

### Get / Set Content & Attributes
- innerHTML vs textContent  
- Direct attribute modification  
- getAttribute / setAttribute  

### Check Attributes
- hasAttribute  
- removeAttribute  
- hasAttributes  

### Create Elements (Basic)
- createElement  
- Adding attributes and comments  
- Appending text and children  

### Create Product (Heading + Paragraph)
- Building a product box dynamically  
- Adding `<h3>` and `<p>` inside `<div>`  

### Deal With Children
- children vs childNodes  
- firstChild / lastChild  
- firstElementChild / lastElementChild  

### DOM Events
- HTML events vs JS events  
- onclick, oncontextmenu, mouseenter, mouseleave  
- Window events: load, scroll, resize  
- Input events: focus, blur, submit  

### Form Validation & Prevent Default
- Validating input before submission  
- Preventing form submit if invalid  
- Blocking default link behavior  

### Event Simulation
- Triggering click  
- Triggering focus / blur programmatically  

### DOM ClassList
- classList.length  
- contains(), item()  
- add(), remove(), toggle()  

### DOM CSS Manipulation
- Changing styles using `.style`  
- Using cssText  
- removeProperty / setProperty  

### Deal With Elements
- append, prepend  
- before, after  
- remove()  

### DOM Traversing
- parentElement  
- nextSibling / previousSibling  
- Navigating children  

### DOM Cloning
- cloneNode(true/false)  
- Deep cloning elements  

### Add Event Listener + Cloned Element Handling
- addEventListener  
- Handling multiple event types  
- Detecting and interacting with cloned elements

---
# 🏷️Window Object ( BOM )
### alert – confirm – prompt
- Understanding user interaction dialogs  

### setTimeout + clearTimeout
- Timer creation and canceling  

### setInterval + clearInterval
- Repeating timers and stopping them  

### Location, Window Control & History API
- **Location Object**  
  - Reading URL  
  - Changing URL  

- **Window Open / Close**  
  - Opening new windows  
  - Closing windows  

- **History API**  
  - back(), forward(), go()  

- **Window Controls**  
  - stop(), print(), focus()  
  - scrollTo(), scroll(), scrollBy()  

- **Scroll API + Scroll-To-Top Button**  
  - Smooth scroll  
  - Handling scroll events  

### Storage (Local + Session)
- **Local Storage (Basics)**  
  - setItem, getItem, removeItem, clear, key  

- **Local Storage Practice**  
  - Color picker with persistent state  

- **Session Storage**  
  - Saving temporary data per tab

