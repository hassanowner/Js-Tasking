/*
Task:

- You have a list of customer orders
- Remove orders that have amount less than 10 or empty name
- Collect all valid orders in one array
- Collect all delivered orders in another array
- Calculate total amount of valid orders
- Print:
  - Valid orders
  - Delivered orders
  - Number of valid orders
  - Number of delivered orders
  - Total amount from valid orders
*/

let orders = [
  { id: 1, name: "Ali", amount: 25, delivered: true },
  { id: 2, name: "Sara", amount: 5, delivered: false },
  { id: 3, name: "", amount: 13, delivered: true },
  { id: 4, name: "John", amount: 50, delivered: false },
  { id: 5, name: "Noor", amount: 9, delivered: true },
  { id: 6, name: "Hassan", amount: 33, delivered: true }
];

let validOrders = [];
let deliveredOrders = [];
let totalAmount = 0;

for (let i = 0; i < orders.length; i++) {

  let order = orders[i];

  // Skip invalid orders
  if (order.amount < 10 || order.name === "") {
    continue;
  }

  // Add valid order
  validOrders.push(order);
  totalAmount += order.amount;

  // Add delivered orders
  if (order.delivered === true) {
    deliveredOrders.push(order);
  }
}

// Print results
console.log("Valid Orders:", validOrders);
console.log("Delivered Orders:", deliveredOrders);
console.log("Total Valid Orders:", validOrders.length);
console.log("Total Delivered:", deliveredOrders.length);
console.log("Total Amount from Valid Orders:", totalAmount);

/*
Expected Output:

Valid Orders: [
  { id: 1, name: "Ali", amount: 25, delivered: true },
  { id: 4, name: "John", amount: 50, delivered: false },
  { id: 6, name: "Hassan", amount: 33, delivered: true }
]

Delivered Orders: [
  { id: 1, name: "Ali", amount: 25, delivered: true },
  { id: 6, name: "Hassan", amount: 33, delivered: true }
]

Total Valid Orders: 3
Total Delivered: 2
Total Amount from Valid Orders: 108
*/