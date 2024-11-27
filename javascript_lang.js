// Log a welcome message
console.log("Welcome to this basic JavaScript file!");

// Function to greet the user
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Call the function and log the result
const greeting = greetUser("John");
console.log(greeting);

// Perform a calculation
function multiplyNumbers(a, b) {
    return a * b;
}

const product = multiplyNumbers(4, 5);
console.log(`The product of 4 and 5 is: ${product}`);

// Simple loop
for (let i = 1; i <= 5; i++) {
    console.log(`Counting: ${i}`);
}

// Create and use an object
const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(`Person's full name is: ${person.fullName()}`);
console.log(`Person's age is: ${person.age}`);
