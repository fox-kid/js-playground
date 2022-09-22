// Hoisting is when a variable, function or class is moved to the top of a JS script file

// With variable VAR, you can first initialize it and then declare. The declaration will be hoisted
// and that var value will be accessible before

x = 5;
console.log("Using var variable before declaring it", x); // The output of this is 5
var x;

y = 7;
console.log("Using a variable without declaring it", y); // In this case, without declaring, it's a global property and output is 7

// BUT initializations are not hoisted

var test;
console.log(test); // undefined
test = 9;




// With variable let, you cannot access it before it is declared

// z = 9;
// console.log("Using let variable before declaring it", z); // This will output "Reference error". 
// let z;

// let existing but not being hoisted and accessible is called a "Temporal dead zone"


// While using var variable without initizaling it is "undefined"

console.log(car); // undefined
var car;

// It is also the same as writing

var car;
console.log(car); //undefined





// Using variable const before it's declared is a syntax error
// and initializing it after it's been declared is also an error because you can't
// reinitialize const

table = "table";
// const table;
// Syntax error, Missing initializer in const declaration 




// When a variable is declared inside of a function, it is hoisted only
// to the top of that function

function check() {
    testX = 'test';
    console.log(testX); // "test"
    var testX;
}

check(); // "test"
// console.log(testX); 
// Reference error




// A function is hoisted and can be used before declaring it

sayHi();

function sayHi() {
    console.log("Hi user!"); // "Hi user!"
}

// BUT function expressions are not hoisted. 

// sayHello();

let sayHello = function() {
    console.log("Hello user!"); // Uncaught ReferenceError: greet is not defined
}

// If sayHello was defined with var, the error would be Uncaught TypeError: greet is not a function


// It is always better to first declare variables and then use them to avoid bugs and 
// unexpected errors. It's always better to use let instead of var because of this.



// Classes (constructors) must be defined before they are used

// const rhombus = new Rectangle(); // ReferenceError

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
}
