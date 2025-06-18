// Array Methods in javascript -
// JavaScript methods make our code:
// Shorter
// Easier to read
// More powerful
// Instead of writing a lot of code manually, methods let you do common tasks quickly.

// JavaScript Array length Method
// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.length);

//  JavaScript Array toString() Method
// let a  = ["HTML", "CSS", "JS", "React"];
// let s = a.toString();
// console.log(s);
// console.log(typeof s);

// JavaScript Array join() Method
// let arr = ["hj","utiy","main","js"];
// console.log(arr);
// console.log(arr.join(""));
// let join = arr.join(",");
// console.log(join);

// JavaScript Array delete Operator :
// The delete operator is used to delete the given value which can be an object, array, or anything.
// let emp = {
//     fname : "john",
//     lname : "Doe",
//     salary : 4000
// }
// console.log(delete emp.fname);
// console.log(emp);

// let arr = [10, 20, 30];
// delete arr[1];
// console.log(arr);

// JavaScript Array concat() Method
// The concat() method is used to concatenate two or more arrays and it gives the merged array.

// let arr = [1, 2, 4, 5];
// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [6, 5, 7, 8, 7];
// console.log(arr.concat(arr2,arr1));

// JavaScript Array.push() Method
// The push() method is used to add an element at the end of an Array.
// let pt = ["ty","fy","sy"];
// console.log(pt.push("elementadded"));
// console.log(pt);

// JavaScript Array.unshift() Method
// The unshift() method is used to add elements to the front of an Array.

// let arr = [10, 20, 30];
// arr.unshift(5, 1);
// console.log(arr);

// JavaScript Array.pop() Method
// The pop() method is used to remove elements from the end of an array.
// let arr = [10, 20, 30, 40, 5];
// arr.pop();
// console.log(arr);

// JavaScript Array.shift() Method
// The shift() method is used to remove elements from the beginning of an array
// let arr = [50, 10, 20, 30];
// arr.shift();
// console.log(arr);

// JavaScript Array.splice() Method
// The splice() method is used to Insert and Remove elements in between the Array.
// splice() -
// Modifies the original array
// Can add, remove, or replace elements
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: index at which to start changing the array
// deleteCount: number of elements to remove
// item1, item2, ...: optional elements to add

// let arr = [10, 20, 30, 40];
// console.log(arr.splice(1, 2));
// console.log(arr);

// let numArr = [20, 30, 40, 50];
// numArr.splice(1, 2, 0, 3, 4, 5);
// console.log(numArr);
// let strArr = ["amit", "sumit", "anil"];
// strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2");
// console.log(strArr);

// Replacing Elements in an Array
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(1, 2, "Orange", "Grape");
// console.log(fruits);

// JavaScript Array.slice() Method
// Does not modify the original array
// Returns a shallow copy of a portion of the array
// Syntax: array.slice(start, end)
// start: index to begin extraction (inclusive)
// end: index to stop extraction (exclusive)

// let arr = [10, 20, 30, 40];
// console.log(arr.slice(1,2))
// console.log(arr);

// let arr = [1, 2, 3, 8, 5, 12, 6, 89];
// let m = arr.slice(3);
// console.log(m);

// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' ];
// console.log(a.slice(1,3));
// console.log(a.slice(2)); // all values after 2
// splice(index(position no where you want to insert) , howmany , "new value")
// a.splice(2 , 0 , "kena");
// a.splice(2 , 1); // sanjay , aman , rahul
// console.log(a);


// Javascript Array map() Method
// The map() method in javascript creates a new array by applying a function to each element of the original array.
// It skips empty elements and does not modify the original array.
// Syntax
// arr.map((element, index, array) => { /* … */ })
// Parameters 
// element: It is a required parameter and holds the current element's value.
// index: It is an optional parameter and it holds the index of the current element.
// arr: It is an optional parameter and it holds the array.

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);
// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2);
// 90, 8, 18, 32, 50

// Original array
// const numbers = [1, 2, 3, 4, 5];
// Mapping function: square of each number
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Javascript Array filter() Method
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value) {
// 	return value > 18;
// }
// console.log(over18);
// 45,25.

// array some
// function myfun(ele)
// {
//     return ele > 5;
// }
// let arr = [4,3,7,6,5,9,23];
// let val = arr.filter(myfun);
// console.log(val);

// let a = x => x > 5;
// let arr2 = [2,5,6,8,6,3];
// z = arr2.filter(a);
// console.log(z);

// (function(a){
//     let array = a.filter(a => a > 5);
//     console.log(array);
// })([2,4,5,3,6,8,56,2,78]);

// reduce
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduce(function(total , val){
// 			return total + val ;
// });
// console.log(sum);
// // 99

// const numbers = [45, 100];
// const sum = numbers.reduceRight(function ( tatol){
// 			return tatol;
// });
// console.log(sum);
// 99

// let red = [3,6,45,78,2,9];
// let fun = red.reduce(function(total,v){
//     return total + v;
// })
// console.log(fun);

// const numbers = [45, 4, 9, 16, 25];
// const allOver18 = numbers.every(function (val){
// 			return val > 18;
// });
// console.log(allOver18);
// false

// let sm = function(a)
// {
//     arr = a.filter(a => a > 5);
//     return arr;
// }
// console.log(sm([2,4,5,7,3,7,6,90,76,54]));

// find method --> returns only first element of array
// const numbers = [78, 45, 4, 9, 16, 25 , 56];
// const first = numbers.find(function (val){
// 			return val > 18;
// });
// console.log(first);
// // 25

// const numbers = [78, 45, 4, 9, 16, 25 , 56];
// const fun = numbers.find(function(val){
//     return val > 10;
// })
// console.log(fun);

// let num = [2,4,,7,6,54,8,0];
// console.log(num.find(num => num > 5));
// function findn(num)
// {
//     let z = num.find(num => num > 5);
//     console.log(z);
// }
// findn(num);

// let x = [25,6,5,9,8];
// let z = x.findIndex(function(val){
//     return val > 5;
// })
// console.log(z);

// let x = [25,6,5,9,8];
// console.log(x.findIndex(x => x > 10));

// let val = [25,6,5,99,8];
// function x(val)
// {
//     let z = val.findIndex(val => val > 55);
//     console.log(z);
// }
// x(val);

// array entries

// let array = ['w','drow','main'];
// let array2 = array.entries();
// console.log(array2.next().val);

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value); // [0, "a"]
// console.log(iterator1.next().value); // [1, "b"]

// const nums = ['hello' , 'worls' , 'i' , 'say' , 'this' , 'at' , 'last'];
// for (const [index, num] of nums.entries()) {
//   console.log(`Index: ${index} Value: ${num}`);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("kiwi"));

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value); // [0, "a"]
// console.log(iterator1.next().value); // [1, "b"]

// let arr = [34,67,54,87,23,17,90];
// console.log(Math.max.apply(null,arr));
// console.log(arr.every(arr => arr > 500));

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }
// const points = [40, 100, 1, 5, 25, 10];
// myArrayMax(points);
// // The highest number is 100.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.copyWithin(2, 1)); // Banana, Orange, Banana, Orange

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits);
// console.log(fruits.copyWithin(2, 0, 2));
// Banana, Orange, Banana, Orange, Kiwi, Papaya

// const numbers = [45, 4, 9, 16, 25];
// const first = numbers.find(function(numbers){
// 			return numbers > 18;
// });
// console.log(first);
// 25

// let num = [1,2,3,4,5,6];
// let fnum = num.find(num => num > 5);
// console.log(fnum);
