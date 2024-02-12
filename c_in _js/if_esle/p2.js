// var a = 70, b = 50 , c = 30;
// var largest = a > b && a > c ? a : b > c ? b : c 
// {
//     console.log(`largest values is:`)
//     console.log(largest);
// }


// ------------------------------------------total to n

// var n = prompt("enter n:")
// var i , total = 0;
// for(i = 0 ; i <= n ; i++)
// {
//     console.log(i);
//     total += i;
// }
// console.log(total);

// ------------------------------------------total of odd

// var n = prompt("enter n:")
// var i , total = 0;
// for(i = 0 ; i <= n ; i = i+2)
// {
//     console.log(i);
//     total += i;
// }
// console.log(`total is:`);
// console.log(total);

// ------------------------------------------total of even

// var n = prompt("enter n:")
// var i , total = 0;
// for(i = 1 ; i <= n ; i = i+2)
// {
//     console.log(i);
//     total += i;
// }
// console.log(`total is:`);
// console.log(total);

// ------------------------------------------1 , 4 , 9 , 16..

// var i , n = prompt("`enter n:")
// for(i = 1 ; i <= n ; i++)
// {
//     k = i * i;
//     console.log(k);
// }

// ------------------------------------------1 , 4 , 3 , 16 , 5..

// var i , n = prompt("enter n:")
// for(i = 1 ; i <= n ; i++)
// {
//     if(i % 2 == 0)
//     {
//         k = i * i;
//         console.log(k);
//     }
//     else
//     {
//         console.log(i);
//     }
// }

// ------------------------------------------1 , 2 , 4 , 8 , 16 ...

// var n = prompt("enter n:")
// var k = 1 
// for(i = 1 ; i <= n ; i++)
// {
//     k = k * 2;
//     console.log(k);
// }

// ------------------------------------------1 , 4 , 12 , 32...
// var n = parseInt(prompt("enter n:")) , a = 1 , i 
// for(i = 1 ; i <= n ; i++)
// {
//     console.log(i * a);
//     a *= 2;
// }

// ------------------------------------------1 , 1 , 2 , 3 , 5...

// var n = parseInt(prompt("enter n:"))
// var a = 1 , b = 0
// for(i = 1 ; i < n ; i++)
// {
//     c = a + b 
//     console.log(c);
//     a = b;
//     b = c;
// }

// ------------------------------------------0.5 , 2 , 5.5 , 13 , 28.5 ...

// var i 
// var n = 3 , k , j = 0 , m = 0.5
// for(i = 0 ; i < n ; i = i + 0.5)
// {
//     j = j * 2  + m;
//     console.log(j)
//     m = m + 0.5;
// }


