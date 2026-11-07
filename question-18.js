// Question 18 — Multiplication Table Grid
// Uses nested loops to generate multiplication tables from 2 to 5.
// Each table contains multiplication from 1 to 10.

// Algorithm: Use an outer loop for table numbers from 2 to 5.
// Use an inner loop for multiplication from 1 to 10.
// Display the table header and each multiplication expression.

for (var table = 2; table <= 5; table++) {
    document.write("<h3>Table of " + table + "</h3>");
    for (var i = 1; i <= 10; i++) {
        document.write(table + " x " + i + " = " + (table * i) + "<br>");
    }
    document.write("<br>");
}