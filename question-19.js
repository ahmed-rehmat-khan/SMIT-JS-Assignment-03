// Question 19 — Student Result Analyzer
// Uses the arrays: var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
//              var marks = [78, 92, 45, 88, 33];
// Displays every student's name and marks, PASS/FAIL status, total passed/failed,
// top student, and class average.

// Algorithm: Use a for loop to iterate through both arrays (they have the same length).
// For each student, display their name, marks, and PASS/FAIL status based on marks >= 50.
// Use accumulator variables to count passed and failed students.
// Track the highest-scoring student and calculate the class average at the end.

var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
var marks = [78, 92, 45, 88, 33];

var passed = 0;
var failed = 0;
var totalMarks = 0;
var topStudent = "";
var topScore = 0;

document.write("<h3>Student Results:</h3><br>");
for (var i = 0; i < students.length; i++) {
    var status = (marks[i] >= 50) ? "PASS" : "FAIL";
    document.write(students[i] + " - " + marks[i] + " - " + status + "<br>");
    totalMarks += marks[i];
    if (marks[i] > topScore) {
        topScore = marks[i];
        topStudent = students[i];
    }
    if (status === "PASS") {
        passed++;
    } else {
        failed++;
    }
}

document.write("<br>Total Students: " + students.length + "<br>");
document.write("Passed: " + passed + "<br>");
document.write("Failed: " + failed + "<br>");
document.write("Top Student: " + topStudent + " (" + topScore + ")<br>");
document.write("Class Average: " + (totalMarks / students.length).toFixed(1));