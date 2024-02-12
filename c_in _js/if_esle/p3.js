// ----------------------------------------------------------multification of table

// var i , n = parseInt(prompt("enter n :")) , j
// for(i = 1 ; i <= 10 ; i++)
// {
//     j = n * i;
//     console.log(`${n} * ${i} = ${j}`);
// }
// ----------------------------------------------------------count number of digits

var i , n = 7854
var count = 1
while(n != 0)
{
n /= 10;
count++;
}
console.log(count);

