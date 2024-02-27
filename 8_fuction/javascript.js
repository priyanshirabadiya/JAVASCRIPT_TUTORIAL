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

// IIFE --> immediately invoked function expression  / self-involking
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
// )("5" , 2 , 9 , 8);
// console.log(x);

// function add(a,b)
// {
//     return a+b
// }
// arrow function
// var x = add(a,b) => {
//     return a+b;
// }

// let add = (a,b) => a+b;
// console.log(add(4,5));

// --------------------------------------------------------------table

// function hello() {
//     let i, j;
//     var n = 5;
//     let m = '';
//     for (i = 0; i < 10; i++) {
//         j = n * i;
//         m = m + n + " * " + i + " = " + j + "\n"; 
//     }
//     return m;
// }
// console.log(hello());


// --------------------------------------------------------------function constroctor

// const myFunction = new Function("a", "b", "return a * b");
// let x = myFunction(4, 3); // 12
// console.log(x);


// const myFunction = new Function("a" , "b", "return a + b");
// let x = myFunction(2 , 8);
// console.log(x);

//-----------------arrow

// var x = (x , y) => x * y;
// console.log(x(5,10));



// ---------------------------function are object

// function myFunction(a, b, c, k){
//     return arguments.length; 
// }
// let text = myFunction(4,3,5,2);
// console.log(text);

// ------------------------------------------------------------------

// function myfun(a,f,d,s)
// {
//     return arguments.length;
// }
// let len = myfun(1,2,4,5,8,8,7).toString();
// console.log(len);

// x = func1(1,2,3,4,5,8)
// function func1(a, b, c) {
//     console.log(arguments.length);
//   }


// function add(...args)
// {
//     let sum = 1;
//     for(let i = 1 ; i <= args.length ; i++)
//         sum = sum + args[i];
//         return sum;
//     }
//     console.log(add(1,9,10,5,8));
// console.log(args[i]);
// add(1,2,5,8)