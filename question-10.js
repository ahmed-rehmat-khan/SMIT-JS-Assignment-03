// Question 10 — Sum & Average of Array
// Uses the array: var prices = [1200, 850, 430, 1600, 990];
// Calculates the total and average price.

// Algorithm: Use a for loop to iterate through the prices array.
// Use an accumulator variable to calculate the total.
// Calculate average by dividing total by array length.
// Display total and average.

var prices = [1200, 850, 430, 1600, 990];
var total = 0;

for (var i = 0; i < prices.length; i++) {
    total += prices[i];
}

var average = total / prices.length;

document.write("<h3>Total:</h3>" + total + "<br>");
document.write("<h3>Average:</h3>" + average);