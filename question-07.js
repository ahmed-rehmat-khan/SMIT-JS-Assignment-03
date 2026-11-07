// Question 07 — Find Largest & Smallest
// Uses the exact array: var numbers = [45, 12, 89, 3, 67, 22, 91, 10];
// Finds the largest and smallest numbers using loops.

// Algorithm: Initialize largest and smallest with the first element.
// Use a for loop to compare each element with the current largest/smallest.
// Update the variables when a larger/smaller number is found.

var numbers = [45, 12, 89, 3, 67, 22, 91, 10];
var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

document.write("<h3>Largest: " + largest + "</h3>");
document.write("<h3>Smallest: " + smallest + "</h3>");