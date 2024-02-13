// function -> perform specific task

// function mtfuc(a,b)
// {
//     return a * b;
// }
// console.log(mtfuc(5,5));



//  Function Expression:-
// A JavaScript function can also be defined using an expression.
// - The function above is an anonymous function (a function without a name).
// - Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// let x = function(a , b)
// {
//     return a*b;
// };
// let z = x(4,5);
// console.log(z);


// function hosting  -->function hoisting means it find value of function at anywhere in the program
// function myfun(a , b)
// {
//     return a*b;
// }
// console.log(myfun(5,2));


// self-involking function
// (function()
// {
//     let x  = "Hello , I called function by myself"
//     console.log(x);
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

// IIFE --> immediately invoked function expressin  
// function that is called imediatley after declaring


// console.log((function (a, b) {
//     return a + b;
//    })(2, 3));
        

// let x = (function hello(a , b , c ,d){
//      return{ 
//      sum: a + b,
//      sub: c - d
//     };
//   }
// )("5" , 2 , 8 , 9);
// console.log(x);



