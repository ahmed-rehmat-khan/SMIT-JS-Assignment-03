// Question 12 — Find a Number
// Uses the array: var numbers = [10, 25, 40, 55, 70, 85, 100];
// Asks the user to enter a number and displays its index if found.

// Algorithm: Use prompt() to get the number from the user.
// Use a for loop to iterate through the numbers array.
// Use a Boolean flag and a variable to store the index.
// When the number is found, set the flag and store the index, then break.
// Display the index if found, otherwise display "Number not found."

var numbers = [10, 25, 40, 55, 70, 85, 100];
var searchNum = Number(prompt("Enter a number: "));
var found = false;
var index = -1;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchNum) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    alert("Number found at index " + index + ".");
    document.write("Number found at index " + index + ".<br>");
} else {
    alert("Number not found.");
    document.write("Number not found.<br>");
}