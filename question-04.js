// Question 04 — Multiplication Table
// Asks the user to enter a number using prompt() and generates its multiplication table from 1 to 10.

// Algorithm: Use prompt() to get a number from the user.
// Use a for loop from 1 to 10 to calculate and display the multiplication.

var num = Number(prompt("Enter a number: "));
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}