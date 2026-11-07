// Question 20 — Mini Shopping Cart
// Uses the arrays: var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
//              var prices = [2500, 1200, 22000, 800, 3500];
// Displays all products with prices, asks user to select a product number and quantity,
// calculates subtotal, applies 10% discount if total >= Rs. 5000, and displays final bill.

// Algorithm: Use a for loop to display all products with product numbers.
// Use prompt() to ask the user to select a product number and validate it.
// Use prompt() to ask for quantity and validate it.
// Calculate subtotal = price * quantity.
// If subtotal >= 5000, apply 10% discount.
// Display the final bill with all details.

var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
var prices = [2500, 1200, 22000, 800, 3500];

document.write("<h3>Product List:</h3>");
for (var i = 0; i < products.length; i++) {
    document.write((i + 1) + ". " + products[i] + " - Rs " + prices[i] + "<br>");
}

var prodNum = Number(prompt("Enter product number: "));
var productIndex = prodNum - 1;

if (productIndex >= 0 && productIndex < products.length) {
    var quantity = Number(prompt("Enter quantity: "));
    var price = prices[productIndex];
    var subtotal = price * quantity;
    var discount = 0;
    var finalBill = subtotal;

    if (subtotal >= 5000) {
        discount = subtotal * 0.10;
        finalBill = subtotal - discount;
    }

    document.write("<h3>Product: " + products[productIndex] + "</h3>");
    document.write("Unit Price: Rs " + price + "<br>");
    document.write("Quantity: " + quantity + "<br>");
    document.write("Subtotal: Rs " + subtotal + "<br>");
    document.write("Discount: Rs " + discount.toFixed(0) + "<br>");
    document.write("Final Bill: Rs " + finalBill.toFixed(0) + "<br>");
} else {
    alert("Invalid product number selected.");
    document.write("<br>Invalid product number selected.<br>");
}