// Question 14 — Remove Duplicate Numbers
// Uses the array: var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
// Creates a new array containing only unique values.

// Algorithm: Use a for loop to iterate through the numbers array.
// Use a nested for loop or a checking mechanism to determine if the number already exists in the new array.
// Use a Boolean flag to track if the number was already added.
// Use push() only if the number is not already in the new array.

var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
var unique = [];

for (var i = 0; i < numbers.length; i++) {
    var alreadyExists = false;
    for (var j = 0; j < unique.length; j++) {
        if (unique[j] === numbers[i]) {
            alreadyExists = true;
            break;
        }
    }
    if (!alreadyExists) {
        unique.push(numbers[i]);
    }
}

document.write("<h3>Unique Values:</h3>[");
for (var i = 0; i < unique.length; i++) {
    document.write(unique[i]);
    if (i < unique.length - 1) { document.write(", "); }
}
document.write("]");