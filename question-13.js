// Question 13 — Filter Numbers
// Uses the array: var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];
// Creates three separate arrays: Positive, Negative, and Zeros.

// Algorithm: Use a for loop to iterate through the numbers array.
// Use conditions to check if number > 0 (positive), < 0 (negative), or === 0 (zero).
// Use push() to add each number to the appropriate array.
// Display all three arrays at the end.

var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];
var positive = [];
var negative = [];
var zeros = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive.push(numbers[i]);
    } else if (numbers[i] < 0) {
        negative.push(numbers[i]);
    } else {
        zeros.push(numbers[i]);
    }
}

document.write("<h3>Positive:</h3>[");
for (var i = 0; i < positive.length; i++) {
    document.write(positive[i]);
    if (i < positive.length - 1) { document.write(", "); }
}
document.write("]<br>");

document.write("<h3>Negative:</h3>[");
for (var i = 0; i < negative.length; i++) {
    document.write(negative[i]);
    if (i < negative.length - 1) { document.write(", "); }
}
document.write("]<br>");

document.write("<h3>Zeros:</h3>[");
for (var i = 0; i < zeros.length; i++) {
    document.write(zeros[i]);
    if (i < zeros.length - 1) { document.write(", "); }
}
document.write("]<br>");