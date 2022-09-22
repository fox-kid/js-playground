// In JS closure means that an inner function can access variables from to the outer function
// That's possible even after the execution of the outer function is finished

function outer() {
    const a = "Hello ";

    function inner() {
        const b = "World!"; 
        console.log(a + b); // Here you can access variable a from outer function
    }

    return inner;
 }


outer()(); // "Hello world!"

// or

const sayHello = outer();

sayHello(); // "Hello world!"

// When sayHello() is run, inner() is run after outer(), when outer() has already
// finished execution but inner() still has an access to outer()'s variables.
// This is because it's a closure.

// For a more practical example

// You can define counter variable here, outside of the function like this:
// let counter = 0;
// But this variable may be used and messed up later and to avoid this error you declare it
// inside of the function scope where you need it

function createCounter() {
    let counter = 0;

    function increment() {
      counter++;
      console.log(counter);
    }
    return increment;
 }

let add = createCounter();

add(); // 1
add(); // 2
add(); // 3

// The add() knows the counter variable because increment() knows the counter variable
// even after createCounter() has done executing

// Variables of the parent {} curly braces can be accessed inside of a child {} scope
// But child {} scope variables can not be accessed outside of it, even from the parent {} scope

// { This is also called a lexical environment }
// Creating a function is creating a lexical environment, and creating an inner function is creating
// an additional lexical environment inside of it. We can access variables of the parent function because
// the inner function always has access to the lexical environment it was created in.