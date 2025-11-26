// Task: Convert Boolean values into "Yes" or "No" strings
function boolToText(arr) {

  let result = []; // Empty array to store the converted values

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {

    // If the value is true → push "Yes"
    if (arr[i] === true) {
      result.push("Yes");

    // If the value is false → push "No"
    } else if (arr[i] === false) {
      result.push("No");
    }
  }

  console.log(result); // Print the final result
}

// Test the function
boolToText([true, false, false, true]);