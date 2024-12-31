// -----------------------------------------------greater value two

// var a = prompt("enter value of a:")
// var b = prompt("enter value of b:")
// {
//     if(a > b)
//     {
//         console.log(`A is greater :${a}`);
//     }
//     else
//     {
//         console.log(`B is greater :${b}`);
//     }
// }

// -----------------------------------------------greater value three

// var a = prompt("enter a:")
// var b = prompt("enter b:")
// var c = prompt("enter c:")
// {
//     if(a > b && a > c)
//     {
//         console.log(a)
//     }
//     else if(b > a && b > c)
//     {
//         console.log(b)
//     }   
//     else
//     {
//         console.log(c)
//     }
// }

// -----------------------------------------------Number is negative / positive

// let a = prompt("enter a:");
// if(a < 0)
// {
//     console.log(`${a} number is negative`);
// }
// else if(a > 0)
// {
//     console.log(`${a} number is positive`);
// }
// else
// {
//     console.log("number is 0");
// }


// -----------------------------------------------Number is devisable by 5 & 11

// var a = prompt("enter a:")
// if(a % 5 == 0 && a % 11 == 0)
// {
//     console.log(`${a} number is divisable by 5 and 11`);
// }
// else
// {
//     console.log("not divisable");
// }

// -----------------------------------------------Number is odd  / even

// var a = prompt("enter a:")
// if(a % 2 == 0)
// {
//     console.log(`${a} number is even`);
// }
// else
// {
//     console.log(`number is odd`);
// }

// -----------------------------------------------leap year

// var a = prompt("enter a:")
// if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0)
// {
//     console.log(`${a} number is leap`);
// }
// else
// {
//     console.log(`number is not leap`);
// }

// -----------------------------------------------uupercase/lowercase year

// var a = prompt("enter alphabet:")
// if(a >= 'A' && a <= 'Z')
// {
//     console.log("uupercase");
// }
// else if(a >= 'a' && a <= 'z')
// {
//     console.log("lowecase");
// }
// else
// {
//     console.log("not a alphabet");
// }

// ----------------------------------------------number of note

// var n = 350;
// var amt = 0 , amt1 = 0 ;

// if(n >= 500)
// {
//     amt = parseInt(n / 500);
//     console.log("notes of 500")
//     console.log(parseInt(amt))
//     n = n - (amt * 500)
// }
// if(n >= 200)
// {
//     amt1 = parseInt(n / 200);
//     console.log("notes of 200");
//     console.log(parseInt(amt1));
//     n = n - (amt1 * 200);
// }
// if(n >= 100)
// {
//     amt1 = parseInt(n / 100);
//     console.log("notes of 100");
//     console.log(parseInt(amt1));
//     n = n - (amt1 * 100);
// }

// ---------------------------------------------- triangle is valid or not

// var a = prompt(a) , b = prompt(b) , c = prompt(c)

// if((a + b)> c)
// {
//     if((a + c) > b)
//     {
//         if((b + c) > a)
//         {
//             console.log('triangle is valid');
//         }
//         else
//         {
//             console.log("triangle is not-valid");
//         }
//     }
//         else
//         {
//             console.log("triangle is not-valid");
//         }
// } 
// else
// {
//     console.log("triangle is not-valid");
// }


// ---------------------------------------------- profit or loss

// var c = prompt("enter prompt price:")
// var s = prompt("enter selling price:")
// var profit;
// if(c > s)
// {
//     profit = c - s;
//     console.log(`you your in loss`);
// }
// if(s > c)
// {
//     profit = c - s;
//     console.log(`you your in profit`);
// }

// ---------------------------------------------- result

// let e_name = prompt("enter name:") ,acc =  parseInt(prompt("enter account marks:")), total , percentage
// let stat = parseInt(prompt("enter stat marks:"))
// let guj = parseInt(prompt("enter guj marks:"))
// let eng = parseInt(prompt("enter eng marks:"))
//  total = acc + stat + guj + eng
//  percentage = total / 4;
// console.log(`name is:${e_name}`);
// console.log(`total is :${total}`)
// console.log(`percentage is :${percentage}%`)
// if(percentage > 80)
// {
//     console.log(`Grade is A`);
// }
// else if(percentage > 70)
// {
//     console.log(`Grade is B`);
// }
// else if(percentage > 50)
// {
//     console.log(`Grade is C`);
// }
// else
// {
//     console.log(`Grade is D`);
// }

// ---------------------------------------------- Gross salary

// var salary = parseInt(prompt("enter salary")) , hra , da , gross

// if(salary > 10000)
// {
//     hra = salary * 20/ 100
//     da = salary * 40 / 100 
//     gross = salary + hra + da
//     console.log(`salary is:${salary}`);
//     console.log(`hra is:${hra}`);
//     console.log(`da is:${da}`);
//     console.log(`Gross salary is:${gross}`);
// }

// if(salary < 10000)
// {
//     hra = salary * 30/ 100
//     da = salary * 50 / 100 
//     gross = salary + hra + da
//     console.log(`salary is:${salary}`);
//     console.log(`hra is:${hra}`);
//     console.log(`da is:${da}`);
//     console.log(`Gross salary is:${gross}`);
// }

// ---------------------------------------------- units of electricity light bill

// let units = parseInt(prompt(`enter units:`))
// var total
// if(units <= 50)
// {
//      total = units * 0.50
//     console.log(`total is:${parseInt(total)}`)
// }
// else if(units <= 100)
// {
//     total =  25 + ((units - 50) * 0.75)
//     console.log(`total is:${parseInt(total)}`)
// }
// else if(units <= 200)
// {
//     total = 75 + 25  + (units * 1.20)
//     console.log(`total is:${parseInt(total)}`)
// }
// else
// {
//     console.log(`can't count`);
// }