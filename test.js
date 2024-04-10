ignore this thanks
// Simple JavaScript program to implement a basic calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square root of a number
function squareRoot(x) {
    if (x >= 0) {
        return Math.sqrt(x);
    } else {
        return "Invalid input";
    }
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the absolute value of a number
function absoluteValue(x) {
    return Math.abs(x);
}

// Function to round a number to the nearest integer
function round(x) {
    return Math.round(x);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return !isEven(n);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("Factorial of 5 =", factorial(5));
console.log("Square root of 16 =", squareRoot(16));
console.log("2 raised to the power of 5 =", power(2, 5));
console.log("Absolute value of -7 =", absoluteValue(-7));
console.log("Rounding 3.7 =", round(3.7));
console.log("Random number between 1 and 10 =", getRandomNumber(1, 10));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 11 prime?", isPrime(11));

// Simple JavaScript program to implement a basic calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square root of a number
function squareRoot(x) {
    if (x >= 0) {
        return Math.sqrt(x);
    } else {
        return "Invalid input";
    }
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the absolute value of a number
function absoluteValue(x) {
    return Math.abs(x);
}

// Function to round a number to the nearest integer
function round(x) {
    return Math.round(x);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return !isEven(n);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("Factorial of 5 =", factorial(5));
console.log("Square root of 16 =", squareRoot(16));
console.log("2 raised to the power of 5 =", power(2, 5));
console.log("Absolute value of -7 =", absoluteValue(-7));
console.log("Rounding 3.7 =", round(3.7));
console.log("Random number between 1 and 10 =", getRandomNumber(1, 10));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 11 prime?", isPrime(11));

// Simple JavaScript program to implement a basic calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square root of a number
function squareRoot(x) {
    if (x >= 0) {
        return Math.sqrt(x);
    } else {
        return "Invalid input";
    }
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the absolute value of a number
function absoluteValue(x) {
    return Math.abs(x);
}

// Function to round a number to the nearest integer
function round(x) {
    return Math.round(x);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return !isEven(n);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("Factorial of 5 =", factorial(5));
console.log("Square root of 16 =", squareRoot(16));
console.log("2 raised to the power of 5 =", power(2, 5));
console.log("Absolute value of -7 =", absoluteValue(-7));
console.log("Rounding 3.7 =", round(3.7));
console.log("Random number between 1 and 10 =", getRandomNumber(1, 10));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 11 prime?", isPrime(11));

// Simple JavaScript program to implement a basic calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square root of a number
function squareRoot(x) {
    if (x >= 0) {
        return Math.sqrt(x);
    } else {
        return "Invalid input";
    }
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the absolute value of a number
function absoluteValue(x) {
    return Math.abs(x);
}

// Function to round a number to the nearest integer
function round(x) {
    return Math.round(x);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return !isEven(n);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("Factorial of 5 =", factorial(5));
console.log("Square root of 16 =", squareRoot(16));
console.log("2 raised to the power of 5 =", power(2, 5));
console.log("Absolute value of -7 =", absoluteValue(-7));
console.log("Rounding 3.7 =", round(3.7));
console.log("Random number between 1 and 10 =", getRandomNumber(1, 10));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 11 prime?", isPrime(11));


// Simple JavaScript program to implement a basic calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square root of a number
function squareRoot(x) {
    if (x >= 0) {
        return Math.sqrt(x);
    } else {
        return "Invalid input";
    }
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the absolute value of a number
function absoluteValue(x) {
    return Math.abs(x);
}

// Function to round a number to the nearest integer
function round(x) {
    return Math.round(x);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return !isEven(n);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("Factorial of 5 =", factorial(5));
console.log("Square root of 16 =", squareRoot(16));
console.log("2 raised to the power of 5 =", power(2, 5));
console.log("Absolute value of -7 =", absoluteValue(-7));
console.log("Rounding 3.7 =", round(3.7));
console.log("Random number between 1 and 10 =", getRandomNumber(1, 10));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 11 prime?", isPrime(11));
