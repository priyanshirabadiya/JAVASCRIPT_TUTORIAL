// positive or negative
// function using variable / function define as expression / anonymous function

// let number = function(a)
// {
//     if(a > 1)
//     {
//         console.log('Number is positive');
//     }
//     else
//     {
//         console.log("Number is negative");
//     }
// };
// var a = prompt("enter a:");
//  let z = number(a);


// --------------------------divisable by 5 or not

// var a = prompt("enter number:");
// function num(a)
// {
//     if(a%5==0)
//     {
//         console.log(`number is divisable by 5`);
//     }
//     else
//     {
//         console.log('number is not divisable by 5');
//     }
// }num(a);


// --------------------------divisable by 15 or not

// var a = prompt("enter number:");
// function num(a)
// {
//     if(a%15==0)
//     {
//         console.log(`number is divisable by 15`);
//     }
//     else
//     {
//         console.log('number is not divisable by 15');
//     }
// }num(a);



// -------------------------- pass or not
// var a = prompt("enter persentage:");
// function myfun(a)
// {
//     if(a > 35)
//     {
//         return  `Student is Pass with ${a} persentage`;
//     }
//     else
//     {
//         return `Student is fail with ${a} persentage`;
//     }
// }
// let z = myfun(a)
// console.log(z);


// enter year whether it is leap or not find

// (function()
// {
//     let a = prompt("enter year:");
//     if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0)
//         console.log("year is leap year");
//     else
//         console.log("Year is not leap year");
// })();   


// print n to 1

// let n = prompt("enter number:");
// var x = function(n)
// {
//     for(let i = n ; i >= 1 ; i--)
//     {
//         console.log(parseInt(i));
//     }
// }
// x(n);

// print 1 to n
// let n = prompt("enter number:");
// for(i = 1 ; i <= n ; i++)
// {
//     let x = () => i;
//     console.log(x());
// }

// print 1 4 3 16
// let n = prompt("enter n:")
// function myfun(n)
// {
//     let j;
//     for(i = 1 ; i <= n ; i++)
//     {
//         j = i * i;
//         console.log(j);
//     }   
// }
// myfun(n);

// 1 4 3 16
// (function() {
// var j , i;
// var n = prompt("enter n:")
// for(i = 1 ; i < n ; i++)
// {
//     if(i % 2 == 0)
//     {
//         j = i * i;
//         console.log(j);
//     }
//     else
//     {
//         console.log(i);
//     }
// }
// })();


// 1 2 4 8 16
// let n = prompt("enter n:")
// let x = function(n)
// {
//     j = 1;
//     for(let i = 1 ; i < n ; i++)
//     {
//         console.log(j); 
//         j *= 2;
//     }
// }
// x(n);

// 1 2 4 8 16
// let n = prompt("enter n:")
// let x = function(n)
// {
//     j = 1;
//     for(let i = 1 ; i < n ; i++)
//     {
//         console.log(j * i); 
//         j *= 2;
//     }
// }
// x(n);

