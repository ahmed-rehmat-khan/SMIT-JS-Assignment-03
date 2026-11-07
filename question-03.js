// Question 03 — Even & Odd Number Generator
// Prints all even and odd numbers separately between 1 and 50.

// Algorithm: Use two separate for loops.
// Loop 1: Iterate from 2 to 50 with step 2 to get even numbers.
// Loop 2: Iterate from 1 to 49 with step 2 to get odd numbers.
// Display results with "Even:" and "Odd:" labels.

console.log("Even: ");
for (var i = 2; i <= 50; i += 2) {
    process.stdout.write(i + " ");
}
console.log();

console.log("Odd: ");
for (var i = 1; i <= 49; i += 2) {
    process.stdout.write(i + " ");
}
console.log();