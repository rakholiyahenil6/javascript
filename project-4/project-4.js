// 1. Write a JAVASCRIPT Program to print a greeting message using with argument
// no return type function when call a function without argument at that time print
// message Good Morning.
function printGreeting(message = "Good Morning") {
    console.log(message);
}
printGreeting();
printGreeting("Hello, Have a great day!");
/=================================================/

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type
// with argument function.
function circleArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}
console.log("Circle Area:", circleArea(5));
/=================================================/

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return
// type with argument function.
function triangleArea(length, height) {
    return (length * height) / 2;
}
console.log("Triangle Area:", triangleArea(10, 5));
/=================================================/

// 4. Write a JAVASCRIPT Program to find Rectangle area = I * h using return type with
// argument function.
function rectangleArea(length, height) {
    return length * height;
}
console.log("Rectangle Area:", rectangleArea(8, 4));
/=================================================/

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type
// with argument function.
function formula1(a, b, c) {
    return ((b * b) - (4 * a * c)) / (2 * a);
}
console.log("Formula 1 Result:", formula1(1, -3, 2));
/=================================================/

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return
// type with argument function.
function formula2(a, b) {
    return (a * a) + (2 * a * b) + (b * b);
}
console.log("Formula 2 Result:", formula2(3, 4));
/=================================================/

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 )
// using return type with argument function.
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(98.6));
/=================================================/

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f: (c*1.8)+32 )
// using return type with argument function.
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(37));
/=================================================/

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an
// argument with no return type.
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}
checkOddEven(5);
checkOddEven(8);
/=================================================/

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with
// argument no return type.
function swapValues(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After Swap: a =", a, ", b =", b);
}
swapValues(10, 20);