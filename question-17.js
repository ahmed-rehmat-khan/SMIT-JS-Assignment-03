// Question 17 — Number Triangle
// Uses nested loops to generate a triangle of numbers: 1, 12, 123, 1234, 12345.

// Algorithm: Use an outer loop for rows (1 to 5).
// Use an inner loop to print numbers from 1 to the current row number.
// Build the number string by appending each digit.
// After the inner loop, print the string.

for (var i = 1; i <= 5; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += j;
    }
    document.write(row + "<br>");
}