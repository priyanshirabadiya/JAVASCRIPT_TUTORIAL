

//hoisting  &  no argu no return
// x();
// function x() {
//     let n = prompt("enter n:");
//     let i , j;
//     for (i = 1; i < 10; i++) {
//         j = n * i;
//         console.log(`${n} * ${i} = ${j}`);
//     }
// }


// Function Parameters with user input & with argument no return

// function hello(i , n , j)
// {
//     for(i = 1; i < 10 ; i++)
//     {
//         j = n * i;
//         console.log(`${n} * ${i} = ${j}`);
//     }
// }
// n = prompt("enter n:");
// let x = hello(1 , n , 1);
// console.log(x);

// with argu with ret
// -------------------------------------------------
// function  hello(i, n , j) {
//     for(i ; i < 10 ; i++)
//     {
//         j = n * i;
//         console.log(j);
//         // return j;
//     }
// }
// var n = prompt("enter n:");
// console.log(hello(1, n , 1));

// -------------------------------------------------

// no argu with ret

// function hello()
// {
//     let i , j ;
//     let n = prompt("enter n:");
//     for(i = 0 ; i < 10 ; i++)
//     {
//         j = n * i;
//         return j + "name";
//     }
// }
// console.log(hello());



// function returnMe() {
//     var j ;
//     for (var i = 0; i <= 9; i++) {
//       j = i * 5;
//       console.log(j);
//     }
//     return j;
//   }
//   console.log(returnMe());


// self-invoking function
// (function()
// {
//     let i , j;
//     let n = prompt("enter n:");
//     for(i = 0 ; i < 10 ; i++)
//     {
//         j = n * i;
//         console.log(j);
//     }
// })();

