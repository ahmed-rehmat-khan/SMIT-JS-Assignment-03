// Question 15 — Star Triangle
// Uses nested loops to print a right-angled triangle of stars.

// Algorithm: Use an outer loop for rows (1 to 5).
// Use an inner loop to print stars for each row (1 to current row number).
// Each inner loop iteration prints one star without a newline.
// After the inner loop, print a newline.

for (var i = 1; i <= 5; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars += "*";
    }
    document.write(stars + "<br>");
}