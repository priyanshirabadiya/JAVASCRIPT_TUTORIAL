// function -> perform specific task

// function mtfuc(a, b) {
//   return a * b;
// }
// console.log(mtfuc(5, 5));

// function FunCtion(a, b) {
//   return a * b;
// }
// console.log(FunCtion(10 , 20));

// Function Expression:-
// A JavaScript function can also be defined using an expression.
// - The function above is an anonymous function (a function without a name).
// - Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
// - it is also called - 1. Anonymous function expression 2. Named function expression

// let x = function(a , b)
// {
//     return a*b;
// };
// let z = x(4,5);
// console.log(z);

// function hosting  --> function hoisting means it find value of function at anywhere in the program
// function myfun(a, b) {
//   return a * b;
// }
// console.log(myfun(5, 2));

// self-involking function
// (function () {
//   let x = "Hello , I called function by myself";
//   console.log(x);
// })();

// (function()
// {
//     let x = 4
//     let b = 5 , c
//     c = x + b;
//     console.log(c);
// })();

// direct return value
// function greeting() {
//     return "Hello!";
// }
// console.log(greeting());

// IIFE --> immediately invoked function expression  / self-involking
// function that is called imediatley after declaring

// console.log((function (a, b) {
//     return a + b;
//    })(2, 3));

// (function printNum(a,b){
//     console.log(a,b);
// })(1,2);

// let x = (function hello(a, b, c, d) {
//   return {
//     sum: a + b,
//     sub: c - d,
//   };
// })("5", 2, 9, 8);
// console.log(x);

// console.log(
//   (function hello1(a, b) {
//     return {
//       sum: a + b,
//       sub: a - b,
//     };
//   })(5, 4)
// );

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 20));

// arrow function

// let add = (a, b) => a + b;
// console.log(add(4, 5));

// --------------------------------------- table

// function table() {
//   let i, j;
//   var n = 5;
//   let m = "";
//   for (i = 1; i <= 10; i++) {
//     j = n * i;
//     m = m + n + " * " + i + " = " + j + "\n";
//   }
//   return m;
// }
// console.log(table());

// function table() {
//   let j;
//   let n = 5;
//   for (let i = 1; i <= 10; i++) {
//     console.log("5" + " * " + i  + " = " + 5*i);
//   }
// }
// table();

// ---------------------------------- function constroctor
// In JavaScript, a constructor function is used to create and initialize objects.
// It acts as a blueprint for creating multiple objects of the same type.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// let person1 = new Person("John", 30);
// let person2 = new Person("Alice", 25);

// person1.greet(); // Output: Hello, my name is John
// person2.greet(); // Output: Hello, my name is Alice

// function PersonName(fname, lname) {
//     this.fname = fname,
//     this.lname = lname,
//     this.fullName = function () {
//       console.log(`I'm ` + this.fname + " " + this.lname);
//     }
// }
// let x = new PersonName("priyanshi", "rabadiya");
// x.fullName();

// const myFunction = new Function("a", "b", "return a * b");
// let x = myFunction(4, 3); // 12
// console.log(x);

// const myFunction = new Function("a" , "b", "return a + b");
// let x = myFunction(2 , 8);
// console.log(x);

//----------------- arrow

// var x = (x, y) => x * y;
// console.log(x(5, 10));

// --------------------------- The arguments Object(function are object)

// The arguments object is an array-like object available inside non-arrow functions.
// It contains all the arguments passed to the function, regardless of the function's formal parameters.
// It's often used to work with functions when the number of arguments is unknown or variable.

// function myFunction(a, b, c, k) {
//   return arguments.length;
// }
// let text = myFunction(4, 3, 5, 2);
// console.log(text);

// function myfun(a, f, d, s) {
//   return arguments.length;
// }
// let len = myfun(1, 2, 4, 5, 8, 8, 7).toString();
// console.log(len);

// function func1(a, b, c) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// x = func1(1, 2, 3, 4, 5, 8);
// console.log(x);

// function add(...args) {
//   let sum = 0;
//   for (let i = 1; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }
// console.log(add(1, 2, 5, 8));

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // 326
// console.log(x);


// javascipt object and the this Keyword

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// }; // John Doe
// console.log(person.fullName());
// console.log(person);
