// Question 09 — Filter Passing Students
// Uses the array: var marks = [85, 42, 67, 30, 90, 55, 25, 78];
// Creates a new array containing only marks greater than or equal to 50.

// Algorithm: Use a for loop to iterate through the marks array.
// Use a condition to check if mark >= 50.
// Use push() to add passing marks to a new array.
// Display the passing marks array and total passed count.

var marks = [85, 42, 67, 30, 90, 55, 25, 78];
var passing = [];

for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        passing.push(marks[i]);
    }
}

document.write("<h3>Passing Marks:</h3>");
document.write("[");
for (var i = 0; i < passing.length; i++) {
    document.write(passing[i]);
    if (i < passing.length - 1) {
        document.write(", ");
    }
}
document.write("]<br>");
document.write("Total Passed: " + passing.length);