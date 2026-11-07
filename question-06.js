// Question 06 — Display Array Elements
// Creates an array containing eight student names and displays each student's name with their position number.

// Given student names from the PDF example.
var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha", "Usman", "Fatima", "Kanwal"];

document.write("<h3>Student List:</h3>");
for (var i = 0; i < students.length; i++) {
    document.write((i + 1) + ". " + students[i] + "<br>");
}