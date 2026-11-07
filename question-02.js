// Question 02 — Reverse Counting
// Prints numbers from 50 down to 1 using a reverse loop.

// Algorithm: Use a for loop starting at 50, decrementing by 1, ending at 1.
// Each number is displayed with a space separator.

for (var i = 50; i >= 1; i--) {
    process.stdout.write(i + " ");
}
console.log();