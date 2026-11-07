// Question 11 — Student Name Search
// Uses the array: var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
// Asks the user to enter a student name and searches using a for loop and Boolean flag.

// Algorithm: Use prompt() to get the student name from the user.
// Use a for loop to iterate through the students array.
// Use a Boolean flag initialized to false, set to true when found, and break the loop.
// Display "Student Found!" if flag is true, otherwise "Student Not Found!".

var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
var searchName = prompt("Enter a student name: ");
var found = false;

for (var i = 0; i < students.length; i++) {
    if (students[i] === searchName) {
        found = true;
        break;
    }
}

if (found) {
    alert("Student Found!");
    document.write("Student Found!<br>");
} else {
    alert("Student Not Found!");
    document.write("Student Not Found!<br>");
}