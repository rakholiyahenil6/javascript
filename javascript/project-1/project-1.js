// 1.write a javascript program to find the area of a triangle


// Prompt the user for the base and height of the triangle
let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));

// Calculate the area of the triangle
let area = 0.5 * base * height;

// Display the result
alert("The area of the triangle is: " + area);





// 2.write a javascript program to convert temperatures to and from celsius, fahrenheit.

// Prompt the user for the temperature value
let temperature = parseFloat(prompt("Enter the temperature value:"));

// Prompt the user to choose the unit of the entered temperature
let unit = prompt("Enter the unit of the temperature (C for Celsius, F for Fahrenheit):");

// Check if the user entered Celsius or Fahrenheit and perform the conversion
if (unit.toUpperCase() === 'C') {
    // Convert Celsius to Fahrenheit
    let fahrenheit = (temperature * 9/5) + 32;
    alert(temperature + "°C is equal to " + fahrenheit + "°F.");
} else if (unit.toUpperCase() === 'F') {
    // Convert Fahrenheit to Celsius
    let celsius = (temperature - 32) * 5/9;
    alert(temperature + "°F is equal to " + celsius + "°C.");
} else {
    alert("Invalid unit. Please enter either 'C' for Celsius or 'F' for Fahrenheit.");
}




// 3.write a javvascript program to find the area of a rectangle

// Prompt the user for the length and width of the rectangle
let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

// Calculate the area of the rectangle
let area = length * width;

// Display the result
alert("The area of the rectangle is: " + area);





// 4.write a javascript program to find the area of circle

// Prompt the user for the radius of the circle
let radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate the area of the circle
let area = Math.PI * radius * radius;  // Area formula: π * r^2

// Display the result
alert("The area of the circle is: " + area);


// 5.write a javascript program to convert to feet into inches

// Prompt the user for the number of feet
let feet = parseFloat(prompt("Enter the number of feet:"));

// Convert feet into inches (1 foot = 12 inches)
let inches = feet * 12;

// Display the result
alert(feet + " feet is equal to " + inches + " inches.");





// 6.write a javasrcipt program to calculate given formulas

// 1. a^2 - b^2 = (a - b)(a + b)
let a = 5, b = 3; // Example values
let result1 = (a - b) * (a + b);
console.log("1. a^2 - b^2 =", result1);

// 2. (a - b)^2 = a^2 - 2ab + b^2
a = 5, b = 3; // Example values
let result2 = Math.pow(a, 2) - 2 * a * b + Math.pow(b, 2);
console.log("2. (a - b)^2 =", result2);

// 3. (a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
a = 2, b = 3, c = 4; // Example values
let result3 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) + 2 * a * b + 2 * a * c + 2 * b * c;
console.log("3. (a + b + c)^2 =", result3);

// 4. (a - b - c)^2 = a^2 + b^2 + c^2 - 2ab - 2ac + 2bc
a = 5, b = 3, c = 2; // Example values
let result4 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) - 2 * a * b - 2 * a * c + 2 * b * c;
console.log("4. (a - b - c)^2 =", result4);

// 5. (a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3
a = 4, b = 2; // Example values
let result5 = Math.pow(a, 3) - 3 * Math.pow(a, 2) * b + 3 * a * Math.pow(b, 2) - Math.pow(b, 3);
console.log("5. (a - b)^3 =", result5);