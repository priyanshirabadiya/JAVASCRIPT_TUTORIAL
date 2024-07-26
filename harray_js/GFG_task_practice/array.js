

// Number programs ->generate random number
// multiply by * for range in which you want to create rendom 

// let x = Math.random() * 100 ;
// x = Number.parseInt(x);
// console.log(x);


// prime number

// let n = 55;
// let flag = 0; 
// for (i = 2 ; i < n ; i++ ){
//     if(n % i == 0){
//         flag = 1;
//         break;
//     }

// }
// if(flag == 1){
//     console.log("not prime");
// }
// else{
//     console.log("prime");
// }

// 3. program to find largest of three number

// let a = 40;
// let b = 40;
// let c = 40;


// (a > b && a > c) ? console.log('A is greater') :
//     (b > a && b > c) ? console.log('B is greater') :
//         (c > a && c > b) ? console.log('c is greater') :
//             console.log('some numbers are equal');


// let x = Math.max(92,45,56);
// console.log(x);



//4. JavaScript Program to Print All Prime Numbers in an Interval
// let a, b, i, j, flag; 

// a = 2 
// b = 11 
// for (i = a; i <= b; i++) { 
// 	flag = 1; 

// 	for (j = 2; j <= i / 2; ++j) { 
// 		if (i % j == 0) { 
// 			flag = 0; 
// 			break; 
// 		} 
// 	} 

// 	// flag = 1 means i is prime 
// 	// and flag = 0 means i is not prime 
// 	if (flag == 1) 
// 		console.log(i); 
// }


// 5.-------------------------------------------------------------------------------------------------- Aayush code from kk

// A to z
// let a = 'a';

// for(let i = a ; i < 'z' ; i = String.fromCharCode(i.charCodeAt(0)+1))
// {
//     console.log(i);
// }


// print sum of odd

// let n = 10;
// let to = 0;
// for (let i = 0 ; i < n ; i += 2){
//     console.log(i);
//      to = to + i;
// }
// console.log(to);


// multoplie table

// let n = prompt("enter prompt:");
// let table = 0;
// for(let i = 1 ; i < 10 ; i++)
// {
//     table = n * i;
//     console.log(table);
// }


// count number of digits

// var num = 123554685631146  , count = 0;

// while(num != 0){
//     num = Number.parseInt(num / 10)
//     ++count;
// }
// console.log(count);


// Find first and last digit in number
// let num = 5370;
// let Fst, Lst;

// Fst = num;
// while (Fst >= 10) {
//     Fst = Math.floor(Fst / 10);
// }
// console.log(Fst);

// Lst = num;
// Lst = Lst % 10;
// console.log(Lst);


// Swap first and last digit in number

// let num = 45231;
// let fst , lst ;

// fst = num;
// while(fst >= 10){
//     fst = Math.floor(fst / 10);
// }

// console.log(fst);

// lst = num ;
// lst = Number.parseInt(lst % 10);
// console.log(lst);

// let c = fst ;
// fst = lst;
// lst = c;

// console.log(fst);
// console.log(lst);



// calculate sum of digits of number

// let num = 123;
// let total = 0;
// let orignal;

// while(num > 0)
// {
//     total += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(total);


// product of digit of number


// product of digits

// let a = 1234;
// let num = 1;
// while (a != 0) {
//     num *= a % 10;
//     a = Number.parseInt(a / 10);
// }
// console.log(num);

// revese a number

// let num = 123;
// let rev = 0, remi , sto;
// while(num > 0){
//     remi = num % 10;
//     rev = rev * 10 + remi;
//     num = Number.parseInt(num / 10);
// }

// console.log(rev);


// Palin derom number

// let num = 11;
// let origin = num;
// let rev = 0, remi , sto;
// let flag = 1;
// while(num > 0){
//     remi = num % 10;
//     rev = rev * 10 + remi;
//     num = Number.parseInt(num / 10);
// }
// console.log(rev);
// if(rev == origin)
// {
//     console.log('number is Palindrome number');
// }
// else {
//     console.log('Number is not palindrome');
// }

// function digitFrequency(num) {
//     let frequency = {}; // Object to store digit frequencies

//     // Convert number to string to easily iterate through its digits
//     let numStr = num.toString();

//     // Iterate through each digit in the string
//     for (let digit of numStr) {
//         // Increment the count of the current digit in the frequency object
//         frequency[digit] = (frequency[digit] || 0) + 1;
//     }

//     return frequency;
// }

// // Example usage:
// let number = 1223044;
// let result = digitFrequency(number);

// // Display the frequency of each digit
// for (let digit in result) {
//     console.log(`Frequency of ${digit}: ${result[digit]}`);
// }





// print it's number
// // Function to convert a single digit into word
// function convertSingleDigit(digit) {
//     const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     return words[digit];
// }

// // Function to convert a two-digit number into words
// function convertTwoDigits(num) {
//     const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const onesWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//     if (num >= 10 && num <= 19) {
//         const teenWords = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//         return teenWords[num - 10];
//     } else {
//         const tens = Math.floor(num / 10);
//         const ones = num % 10;
//         return tensWords[tens] + " " + onesWords[ones];
//     }
// }

// // Function to convert a number into words
// function convertNumberToWords(num) {
//     if (num === 0) {
//         return "Zero";
//     }

//     let words = "";


//     // Handle thousands
//     if (num >= 1000) {
//         words += convertNumberToWords(Math.floor(num / 1000)) + " Thousand ";
//         num %= 1000;
//     }

//     // Handle hundreds
//     if (num >= 100) {
//         words += convertSingleDigit(Math.floor(num / 100)) + " Hundred ";
//         num %= 100;
//     }

//     // Handle tens and ones
//     if (num > 0) {
//         if (num >= 10) {
//             words += convertTwoDigits(num);
//         } else {
//             words += convertSingleDigit(num);
//         }
//     }

//     return words.trim();
// }

// // Main function
// function main() {
//     let number;

//     // Input the number
//     number = parseInt(prompt("Enter a number: "));

//     // Convert and print the number in words
//     console.log("In words: " + convertNumberToWords(number));
// }

// main();





// function convertSingleDigit(digit) {
//     const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     return words[digit];
// }

// function convertTwoDigits(num) {
//     const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const onesWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//     if (num >= 10 && num <= 19) {
//         const teenWords = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//         return teenWords[num - 10];
//     }
//     else {
//         const tens = Math.floor(num / 10);
//         const ones = num % 10;
//         return tensWords[tens] + " " + onesWords[ones];
//     }
// }

// function convertNumberToWords(num) {
//     if (num === 0) {
//         return "Zero";
//     }

//     let words = "";

//     // Handle thousands
//     if (num >= 1000) {
//         words += convertNumberToWords(Math.floor(num / 1000)) + " Thousand ";
//         num %= 1000;
//     }

//     // Handle hundreds
//     if (num >= 100) {
//         words += convertSingleDigit(Math.floor(num / 100)) + " Hundred ";
//         num %= 100;
//     }

//     // Handle tens and ones
//     if (num > 0) {
//         if (num >= 10) {
//             words += convertTwoDigits(num);
//         } else {
//             words += convertSingleDigit(num);
//         }
//     }

//     return words.trim();
// }
// function main() {
//     let number;
//     number = parseInt(prompt("Enter a number: "));
//     console.log("In words: " + convertNumberToWords(number));
// }

// main();

// --------------------------------------------------------------------------------------------------complete AAyush code

// let num = 123;
// let num2 = 458;
// let lst, lst2;
// num = num % 10;
// num2 = num2 % 10;
// console.log(num);
// console.log(num2);

// if(num == num2)
// {
//     console.log('Last Numners are same');
// }
// else
// {
//     console.log('Last numbers are not same');
// }

// Split a number into indivisual digit

// let num = 4563;
// // num = toString(num);

// let store = num.toString().split("");
// console.log(store);


// let num = "1235";
// let arr = [];

// console.log(arr);

// while(num > 0){
//         arr.unshift(num % 10);
//         num = Number.parseInt(num / 10);
// }

// console.log(arr);



// ---------------------------------------------------------javscript math programs

// 5. Factorial number

// let num = 5;
// let store = 1;
// for(let i = 1 ; i <= num ; i++)
// {
//         store = store * i;
// }
// console.log(store);  



// Fibonacci sereies

// let a = 0 , b = 1 ,c = 1, n = 9; 
// for(let i = 0 ; i < n ; i++)
// {
//         a = b; 
//         b = c;
//         console.log(c);
//         c = a + b;  
// }


// JavaScript Array Programs

// program to get first and last elemrnt in array


// let arr = [45, 89 , 78 , 66 , 2 , 4 , 56];

// let z =  arr.filter(() => {
//     return arr[0] + 'and' + arr.length[-1];
// })

// console.log(z);
// let z = arr.shift();
// let y = arr.pop();
// console.log(y); 
// console.log(z); 

// let z = arr.splice(1,5);
// console.log(arr);


// let arr = [45, 89 , 78 , 66 , 2 , 4 , 56];
// arr.unshift(56);
// arr.splice(0 ,0, 3)
// console.log(arr);

// arr = [56 , ...arr];
// console.log(arr);

// let x = (val) => {
//     return val > 1;
// }

// let arr = [10 , 56 , 89 , -1 , 656].filter(x);
// console.log(arr);



// let arr = [45, 89, 78, 66, 2, 4, 56];

// let rev = [];

// arr.forEach((element)=>{
//     rev.unshift(element);
// })

// console.log(rev);



// empty array in js
// arr.splice(0,7);
// let z = arr.slice(7);
// console.log(arr);
// console.log(z);


// let fruits_array = [
//     "mango",
//     "banana",
//     "apple",
//     "pineapple",
//     "pomegranate",
//     "orange",
// ];


// let val = (check) => {
//     for (let i = 0; i < fruits_array.length; i++) {
//         let curval = fruits_array[i];
//         if (check === curval) {
//             return check + 'index is' + i;
//         }
//     }
//     return check + ' not present in array';
// }

// console.log(val("banana"));



// let arr = [45, 89, 78, 66, 2, 4, 56];

// let index = 2 ;
// let eleent = 458;

// arr.splice(index, 0 , eleent);
// console.log(arr);

// let num = 4563;

// let x = Array.from(num.toString());
//  x = x.map((x)=>{
//     return Number(parseInt(x))
// })
// console.log(x); // Output: [4, 5, 6, 3]


// let arr = [1, 2, 3 , 89 , 85];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {

//     sum = sum + arr[i]; 

// }

// console.log(sum);



// sort in alphanethical order
// let arr = [
//     'banana',
//     'kiwi',
//     'apple',
//     'banana',
//     'tarbuch'
// ];

// let arr2 = [
//     'banana',
//     'kiwi',
//     'apple',
//     'banana',
//     'tarbuch'
// ];

// function filter(arr, arr2) {
//     const setArr2 = new Set(arr2);
//     return arr.filter((item) => setArr2.has(item));
// }

// console.log(filter(arr, arr2));


// let x = arr.sort();
// console.log(x);


// function removed(arr){
//     return arr.filter((item,index)=>arr.indexOf(item) == index);
// }

// console.log(removed(arr));


// replace array item

// let arr = ['banana' , 'kiwi' , 'stoberry' , 'apple'];
// let replace = arr.replace('banana','mango');
// arr[0] = 'mango';
// console.log(arr);

// let checkobj=  Array.isArray('hsudfhus');

// console.log(checkobj);
// let strore = [];
// for(let i = 0 ; i < 10 ; i++)
// {
// strore = i;
// console.log(strore);
//     strore.push(i);
// }



// let strore = [];
// for(let i = 65 ; i < 92 ; i++)
// {

//     strore.push(String.fromCharCode(i));
// }
// console.log(strore);


// strore = Array.from(strore);
// console.log(strore);
// console.log(typeof(strore));


// Dublicate element


// const check_duplicate_in_array = (input_array) => {
//     const duplicates = input_array.filter((item, index) => input_array.indexOf(item) !== index);
//     return Array.from(new Set(duplicates));
// }
// const arr = ["Manish", "Chandan", "Piyush",
//     "Sunil", "Pankaj", "Piyush",
//     "Pankaj", "Tiny", "Chandan",
//     "Manish"];
// console.log(check_duplicate_in_array(arr));


// const check_duplicate = (input_arr) =>{
//     const duplicates = input_arr.filter((items,index)=>input_arr.indexOf(items) === index);
//     return Array.from(duplicates);
// }

// const arr = ["Manish", "Chandan", "Piyush",
//     "Sunil", "Pankaj", "Piyush",
//     "Pankaj", "Tiny", "Chandan",
//     "Manish"];

//     console.log(check_duplicate(arr));

// let arr = [10 , 20 , 55 , 7 ,12];
// let arr2 = [10 , 20 , 56 , 9 ,12];
// let arr3 = arr.concat(arr2);
// console.log(arr3);

// let removed = (arr3) => {
//     const check = arr3.filter((item , index) => arr3.indexOf(item) === index)
//     return Array.from(check);
// }

// console.log(removed(arr3));

// const GFG_object = [
//     { name: "Rahul", age: 30 },
//     { name: "Aman", age: 25 },
//     { name: "Deepak", age: 35 }
// ];

// let result = GFG_object.sort((a, b) =>
//     a.name.localeCompare(b.name));

// console.log(result);



// let s = [];
// let h = 0
// for(let i = 0 ; i < 3 ; i++)
// {
//     s[i] = [];
//     for(let j = 0 ; j < 3 ; j++)
//     {
//         s[i][j] = h++;
//     }
// }

// console.log(s);


// // Creating an array 
// let originalArr = ["c", "cpp", "java",
// 	"python", "javascript", "kotlin"];

// let cloneArr = originalArr.slice(0);
// console.log(cloneArr);


// let extractedArr = cloneArr.splice(0, 4);

// console.log("Extracted Array");
// console.log(extractedArr);

// console.log("Original Array");
// console.log(originalArr);



// let desiredValue = (arr) => { 
//     let output = []; 
//     for (let [item,index] of [arr,index]) { 
//         output.push(item.num); 
//     } 
//     return output; 
// }; 
// let arr = [ 
//     {
//         num : 1,
//         name : "priyanshi"
//     },
//     {
//         num : 2,
//         name : "masnsukh"
//     },
//     {
//         num : 3,
//         name : "rekha"
//     }
// ]

// let result = desiredValue(arr); 
// console.log(result);


// let a = [10, 20, 30, 45, 8, 89];
// let b = [10, 20, 30, 45, 8, 89];


// function localeCompare(a, b) {
//     if (a.length !== b.length) {
//         return 'False';
//     }
//     else {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] != b[i])
//                 return "False";
//         }
//         return "True";
//     }

// }

// console.log(localeCompare(a, b));

// let a = [10, 20, 30, 45, 8, 89];
// let randomIndex = Math.floor(Math.random() * a.length);
// // let randomElement = a[randomIndex];
// let random = a[randomIndex]

// console.log(random); // Output will be a random element from the array



// let a = [1, 2, 3, 45, 7, 8];
// let b = [1, 0, 4, 45, 7, 8];

// let c = a.filter((element)=> b.includes(element));

// console.log(c);


// let a = [1, 2, 3, 45, 7, 8 , 89];
// const chunk = 4;
// console.log(a.slice(0,chunk));
// console.log(a.slice(chunk,a.length));


// let a = "hello welcome to this world baby";
// let x = a.split('e');
// console.log(x);


// let a = [1, 2, 3, 45, 7, 8 , 89];


// let b = a.slice();
// console.log(b);

// let b = a.map(item => item)
// console.log(b);

// let take = (a) => a.filter((element) =>
//     b.push(element)
// )

// take(a)
// console.log(b);



// Array index
// let a = [1,7, 2, 3, 45, 7, 8, 89];
// let index = a.findIndex(ind => ind > 3)
// let index = a.map((item, index) => [item, index]);


// let arr = [1,7, 2, 3, 45, 7, 8, 89];

// let removed = (a) => a.filter((item,index) =>  a.indexOf(item) == index )

// console.log(removed(arr));



// let a = [1, 7, 2, 3, 45, 7, 8, 89];
// let removed = (a) => Array.from(new Set(a));
// console.log(removed(a));




// let arr = [
//     'geeks', 2, 'geeks', 2, 'Javascript', 4,
//     'Javascript', 5, 'for', 6, 'Javascript', 1,
//     'for', 5, 7, 8, 'for'
// ];

// const counter = {};

// arr.forEach(ele => {
//    if(counter[ele]){
//         counter[ele] += 1; 
//     }
//     else{
//         counter[ele] = 1;
//     }
// });

// console.log(counter);


// let x = [12 ,5,6,9,5,4,1,62,5,7];

// let fil = (x) => x.filter((item,index) => x.indexOf(item) === index)

// console.log(fil(x));


// let lar = Math.max.apply(null,x)
// console.log(lar);



// function maxseeing(arr){
// const counter= {};

// for (let num of arr) {
//     counter[num] = (counter[num] || 0) + 1;
// }

// const maxcount = Math.max(...Object.values(counter));

// const freq = Object.keys(counter).find(key => counter[key] === maxcount)

// return maxcount;

// }
// const arr = [1, 5, 2, 3, 5, 6, 4]; 
// console.log(maxseeing(arr));



// const arr = [1, 5, 2, 3, 5, 6, 4]; 
// let sum = 0;
// let narr = [];
// arr.forEach((element) => {
//     sum += element;
//     narr.push(sum);
// })
// console.log(narr);
// const opt = narr[narr.length-1];
// console.log(opt);



// let arr = [4, 5, 9, 2, 8, 1];
// function dub(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) !== i)
//             return false;
//     }
//     return true;
// }

// console.log(dub(arr))



// arr = [
//     1, 1, 3, 5, 7, 6, 8, 5, 6, 4,
//     7, 6, 0, 2, 1, 6, 8, 9, 5,
// ];

// arr.sort();

// let count = 1;
// let max = 0;
// let el;

// for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] === arr[i - 1]) {
//         count++;
//     }
//     else {
//         count = 1;
//     }

//     if (count > max) {
//         max = count;
//         el = arr[i];
//     }

// }
// console.log(el);


let arr = [10 , 20 , 30 , 40 , 50];

let element = arr[0];
let x = arr.slice(1);

let third = [...x , element]

console.log(third);