// Question 08 — Reverse an Array
// Uses the array: var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// Displays all elements in reverse order using a loop.

// Algorithm: Use a for loop starting from the last index (length - 1) down to 0.
// Display each element on a new line.

var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
document.write("<h3>Fruits in Reverse:</h3>");
for (var i = fruits.length - 1; i >= 0; i--) {
    document.write(fruits[i] + "<br>");
}