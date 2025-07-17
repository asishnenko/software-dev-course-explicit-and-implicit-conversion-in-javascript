/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like Number(), String(), or Boolean() where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write your own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null.
Use console.log() to clearly show the before-and-after type conversions.

*/

//Debugging and Fixes ---

let result = Number("5") - 2; // Explicitly convert "5" to number to ensure mathematical subtraction
console.log("The result is: " + result); // Output: 3

let isValid = ("false" === "false"); // Fixed: Boolean("false") is truthy, so we compare string directly
if (isValid) {
    console.log("This is valid!"); // Output: This is valid!
}

let age = "25";
let totalAge = Number(age) + 5; // Convert string to number to do correct arithmetic
console.log("Total Age: " + totalAge); // Output: 30


// Custom Examples ---

// Implicit type conversion (string + number)
let items = 3 + " apples";
console.log("Implicit Conversion Example:", items); // 3 is implicitly converted to "3", result: "3 apples"

// Explicit type conversion with edge case: null
let input = null;
let numericInput = Number(input); // null becomes 0
console.log("Explicit Conversion Example:", numericInput); // Output: 0
