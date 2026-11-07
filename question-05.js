// Question 05 — Sum of Natural Numbers
// Asks the user to enter a positive integer N and calculates the sum of all numbers from 1 to N using a loop.

// Algorithm: Use prompt() to get N from the user.
// Use a for loop from 1 to N with an accumulator variable to calculate the sum.
// Display the result.

var N = Number(prompt("Enter a positive integer N: "));
var sum = 0;
for (var i = 1; i <= N; i++) {
    sum += i;
}
document.write("Sum = " + sum + "<br>");