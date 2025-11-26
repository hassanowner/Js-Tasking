function analyzeData(arr) {
  let sum = 0;
  let texts = "";
  let booleanCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
     if (typeof arr[i] === "number") {
       sum += arr[i];
    } else if (typeof arr[i] === "string") {
      
      if (texts !== "") {
        texts += " - ";  }
      texts += arr[i];

    } else if (typeof arr[i] === "boolean") {
      booleanCount++;  }
  }

  document.write(
    `Sum Of Numbers = ${sum}<br>` +
    `Texts = ${texts}<br>` +
    `Booleans Count = ${booleanCount}` );
}

analyzeData([12, "Hello", false, 22, "World", true, 53, "Osama", false]);

/* Sum Of Numbers = 87
 Texts = Hello - World - Osama
 Booleans Count = 3 */

/*
- Any else or else if in the code always belongs to the nearest preceding if 
  that has not yet been closed with a }.
  This means it is directly associated with that if only, not with any other outer if.

-If the if block has already been closed with }, any following else or else if 
 belongs to the next nearest outer if. */
