// 1) Create a School class and create a student and faculty method. 
// The Student method gives the student name, email and contact number as arguments 
// and prints all details the same as faculty using class & object. (3 marks)

class School {
    student(name, email, contactNumber) {
        console.log("Student Details:");
        console.log(Name: ${name});
        console.log(Email: ${email});
        console.log(Contact Number: ${contactNumber});
    }

    faculty(name, email, contactNumber) {
        console.log("Faculty Details:");
        console.log(Name: ${name});
        console.log(Email: ${email});
        console.log(Contact Number: ${contactNumber});
    }
}

const mySchool = new School();
mySchool.student("John Doe", "john@example.com", "1234567890");
mySchool.faculty("Dr. Smith", "smith@example.com", "0987654321");

/------------------------------------------------------------/

// 2) Create a Person class with an argument name and age. 
// Create an Employee class that prints out details of the Person class. (3 marks)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    printDetails() {
        console.log("Employee Details:");
        console.log(Name: ${this.name});
        console.log(Age: ${this.age});
    }
}

const emp = new Employee("Alice", 30);
emp.printDetails();

/------------------------------------------------------------/

// 3) Employee class creates a constructor called print a simple message. (1 mark)

class EmployeeWithMessage {
    constructor() {
        console.log("Welcome to the Employee Class!");
    }
}

const empWithMessage = new EmployeeWithMessage();

/------------------------------------------------------------/

// 4) Create a Shape class and create a rectangle and circle method 
// to find the circle area (3.14*r*r) and rectangle area (width*height) using arguments. (3 marks)

class Shape {
    circleArea(radius) {
        const area = 3.14 * radius * radius;
        console.log(Circle Area: ${area});
    }

    rectangleArea(width, height) {
        const area = width * height;
        console.log(Rectangle Area: ${area});
    }
}

const myShape = new Shape();
myShape.circleArea(5); // Example radius: 5
myShape.rectangleArea(10, 20); // Example dimensions: 10x20

