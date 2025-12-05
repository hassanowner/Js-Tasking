/*  
============================================================
 ADVANCED JAVASCRIPT FUNCTIONS – FULL PROJECT (TASK MANAGER)
============================================================

Topics Covered:

1. Default Parameters
2. Rest Parameters (...args)
3. Conditions inside Functions
4. Loops & Array Operations
5. Anonymous Functions
6. Passing Functions as Arguments (Callbacks)
7. setTimeout + Callback
8. Nested Functions
9. Returning Functions
10. Arrow Functions
11. Scope (Global / Local)
12. Block Scope (if / for)
13. Lexical Scope

============================================================
 COMPLETE PRACTICAL PROJECT — TASK MANAGER SYSTEM
============================================================
*/


/* ---------------------------------------------------------
   GLOBAL DATA STORE (GLOBAL SCOPE)
---------------------------------------------------------- */
let tasks = [];


/* ---------------------------------------------------------
   1) Add Task 
   - Default Params
   - Rest Params
   - Conditions
   - Nested Functions
---------------------------------------------------------- */
function addTask(
  title = "Untitled Task",
  priority = "low",
  status = "pending",
  showTags = true,
  ...tags
) {
  // Nested function uses lexical scope
  function formatTags() {
    return tags.length > 0 ? tags.join(" | ") : "No Tags";
  }

  let task = {
    title,
    priority,
    status,
    showTags,
    tags: formatTags(),
  };

  tasks.push(task);
  return task;
}

addTask("Fix Bug", "high", "in-progress", true, "urgent", "backend");
addTask("Design Logo", "medium", "pending", false, "UI");
addTask(); // Default task



/* ---------------------------------------------------------
   2) Print Task 
   - Nested Functions
   - Lexical Scope
---------------------------------------------------------- */
function printTask(task) {
  function header() {
    console.log("====== TASK ======");
  }

  function body() {
    console.log("Title:", task.title);
    console.log("Priority:", task.priority);
    console.log("Status:", task.status);
    console.log("Tags:", task.showTags ? task.tags : "Hidden");
  }

  function footer() {
    console.log("==================\n");
  }

  header();
  body();
  footer();
}

printTask(tasks[0]);
printTask(tasks[1]);



/* ---------------------------------------------------------
   3) Search Function
   - Function Returning Function
   - Higher Order Functions
---------------------------------------------------------- */
function searchBy(field) {
  return function (value) {
    return tasks.filter(task => task[field] === value);
  };
}

let searchPriority = searchBy("priority");
let searchStatus = searchBy("status");

console.log(searchPriority("high"));
console.log(searchStatus("pending"));



/* ---------------------------------------------------------
   4) Update Task
   - Passing Function as Argument
   - Anonymous Function
---------------------------------------------------------- */
function updateTask(title, callback) {
  let task = tasks.find(t => t.title === title);

  if (!task) return console.log("Task Not Found!");

  callback(task); // Execute callback
  console.log(`Updated Task: ${task.title}`);
}

updateTask("Fix Bug", function (task) {
  task.status = "done";
  task.tags = "urgent | backend | completed";
});

printTask(tasks[0]);



/* ---------------------------------------------------------
   5) Auto Report
   - setTimeout
   - Callback
   - Arrow Function
---------------------------------------------------------- */
function autoReport(callback) {
  console.log("Generating automatic report...");

  setTimeout(() => {
    console.log("Report Ready!");
    callback(tasks);
  }, 1700);
}

autoReport((allTasks) => {
  console.log("=== FINAL REPORT ===");
  allTasks.forEach(t => console.log(t.title, "→", t.status));
});



/* ---------------------------------------------------------
   6) Arrow Functions (Statistics)
---------------------------------------------------------- */
let countTasks = () => tasks.length;

let completedTasks = () =>
  tasks.filter(t => t.status === "done");

let tasksContainingTag = (tag) =>
  tasks.filter(t => t.tags.includes(tag));

console.log("Total Tasks:", countTasks());
console.log("Completed Tasks:", completedTasks());
console.log("Tasks with 'urgent':", tasksContainingTag("urgent"));



/* ---------------------------------------------------------
   7) Block Scope Example
---------------------------------------------------------- */
if (true) {
  let msg = "Inside Block";
  console.log(msg);
}
// console.log(msg); ❌ Error (Block Scope)



/*  
============================================================
 END OF COMPLETE TASK MANAGER PROJECT
============================================================
*/
