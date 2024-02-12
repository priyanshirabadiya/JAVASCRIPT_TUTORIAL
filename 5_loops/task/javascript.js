// ----------------------------------1--------------------------
// var i = 10;
// while(i>=1)
// {
//     document.write(i);
//     document.write("<br>");
//     i--;
// }
// ----------------------------------2--------------------------
// var i = 0 , total = 0;
// while(i<=10)
// {
//     document.write(i);
//     document.write("<br>");
//     i++;
//     total += i;
// }
// document.write(`Total is ${total}`);

// ----------------------------------3-------------------------

// var n = 5 , i = 1;
// while(i<=10)
// {
//     var mul = n * i ;
//     document.write(n `*` i = mun);
//     i++;
// }

// -------------------------------5-------------------------


// var a = 0 , b = 1 , c;
// var n = 5 ;
// console.log(1);
// for( i = 0 ; i <= n ; i++)
// {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }


// -----------------------------5---------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberToFind = 5;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === numberToFind) {
//     console.log(`The number ${numberToFind} is at index ${i}`);
//     break;
//   }
// }

// -----------------------------10---------------------------------

// var numebrs = [ 1 , 2 , 3 , 4 , 5 , 6 , 7];
// var fnumber = 8 ;

// for (var i = 0 ; i <= 6 ; i++)
// {
//     if(numebrs[i] == fnumber)
//     {
//         console.log(`Find number is at : ${i}  position`);
//         break;
//     }
//     else 
//     {
//         console.log(`number is not found`);
//     }
// }

// -----------------------------11---------------------------------

// var n = [1 , 3 , 3 , 4 , 5 , 6 ];
// var i = 1;
// while(i < 6)
// {
//     var find = n[i] % 2 == 0;
//     if(find)
//         {
//             console.log(`first odd number is : ${n[i]}`);
//             break;
//         }
//         i++;
// }

// -----------------------------12---------------------------------

// var n = prompt("enter n:");
// var i;
// for ( i = 2 ; i < n ; i++)
// {
//     if(n % i == 0)
//     {
//         document.write(`${i} number : ${n} is not prime `);
//         break;
//     }
// }
// if(i == n)
// {
//     document.write(`number : ${n} is prime `);
// }


// -----------------------------14---------------------------------

// var i , n ;
// for(i = 1 ; i <= 10 ; i++)
// {
//     if(i % 2 != 0)
//     {
//         continue;
//     }
//     console.log(i);
// }

// -----------------------------15---------------------------------

// var i = 1 , n = 40;
// while(i <= n)
// {
//     if(i % 3 == 0)
//     {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//-----------------------------16---------------------------------

// var i , n = 10;
// for ( i = 1 ; i <= 10 ; i++ )
// {
//     if( i == 5 )
//     {
//         continue;
//     } 
//     console.log(i);
// }


// var i = 1, n = 10;
// do 
// {
//     if(i % 5 == 0)
//     {
//         continue;
//     }
//     console.log(i);
//     i++;    
// }while(i <= n);

{
  // let randomNumber = 20;
  // let guessCount = 0;
  // let guess = 10;

  // while (guessCount < guess) {
  //   let userGuess = prompt("Enter a number between 1 and 100");
  //   guessCount++;

  //   if (userGuess == randomNumber) {
  //     alert(
  //       "Congratulations! You guessed the number in " + guessCount + " tries."
  //     );
  //     break;
  //   }

  //   if (userGuess > randomNumber) {
  //     alert("Your guess is too high. Try again.");
  //   } else if (userGuess < randomNumber) {
  //     alert("Your guess is too low. Try again.");
  //   }

  //   if (guessCount == guess) {
  //     alert(
  //       "Sorry, you have exceeded the guess limit. The number was " +
  //         randomNumber +
  //         "."
  //     );
  //   }
  // }
}

{
// var n = 5 , i=1;
// var string = "";
// while(i <= n)
// {
//     let j = 1;
//     while(j<=i)
//     {
//         string += j;
//         j++;
//     }
//     string += "\n";
//     i++;
//   }
//     console.log(string);
}