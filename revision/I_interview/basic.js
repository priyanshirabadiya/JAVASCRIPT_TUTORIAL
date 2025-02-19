// let @df = "Sdf"
// console.log(@df);



// let a = 10;
// console.log(a);


// work 
// {
//     let b = 10;
// }
// console.log(b);

// cause syntax error
// const a;
// console.log(a);

// const a = 10;
// a = 20;
// console.log(a);



// JavaScript Implicit Conversion
// When you use arithmetic operators like - , * , or / with numeric strings, JavaScript automatically changes those strings into numbers. but with + operator it isn't change numeric strings into number so count it as it is as string. Let's look at an example. The table shows the conversion of different values to String , Number , and Boolean in JavaScript.


// let result = "3" + 2;
// let result = "3" - 2;
// console.log(result);
// console.log(typeof result);

// let res;
// // res = "3" + 2;
// res = "3" + true; // 3true
// res = "3" + null; // 3null
// res = "3" - true; // 3 
// res = "3" - null; // 3
// console.log(res);
// console.log(typeof res);

// // haivng due to implicit conversion it will count boolean true as 1 or false as 0 
// console.log(3 + true);
// console.log(3 - true);

// const data =['sdf', "sdfsd"];
// data.length = 1;
// console.log(data[0]);

// 10, 20, 30, 40, 50
//  0   1   2   3   4

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// arr[2.1] = 56;
// // console.log(arr);
// arr['11'] = 12
// console.log(arr);
// // console.log(arr.length);

// let num = '22';
// console.log(typeof(num));

// console.log(typeof(arr[2]));
// console.log(typeof(arr));
// console.log(typeof(arr[8]))
// console.log(typeof(arr[11]))


// let arr = [10, 20, 30, 40, 50];
// arr[100] = 400;
// console.log(arr);
// console.log(arr.length);
// arr['105'] = 500;
// console.log(arr);
// arr.length = 110;
// console.log(arr.length);
// console.log(arr);


// array of object cannot count length
// let a = [];
// for(let i = 0 ; i < 10 ; i++)
// {
//     a["i" + i] = i * 100
// }
// console.log(a);
// console.log(a.length);



// let a = [10 , 20 , 30 , 40 , 50];
// console.log(a);
// console.log(a[0],a[1],a[2],a[3],a[-100]);


// let a = [];
// a[0] = 10;
// console.log(a);
// console.log(a.length);


// let a = [10 , 20 , 30 , 40 , 50];
// console.log(a);
// console.log(a.length);
// delete a[0];
// console.log(a);
// console.log(a.length);
// a[0] = 500;
// console.log(a);


// let a = [0];
// console.log(a);
// console.log(a[0]);
// console.log(a[0] == " ");
// console.log(a[0] === " ");

// console.log(" "*10); // because " " is consided as 0 and multification of 0 with any number is 0 so ans will be 0 

// console.log(typeof(" "));
// console.log([] == false);
// console.log(typeof []);
// console.log([] == []);

// Arrays in JavaScript are objects, and comparisons with == or === check reference equality, not value equality.
// now in following arr1 and arr3 reference are same in memory where as arr1 and arr2 are diffrent memory locations so it will not return false  

// let arr1 = [];
// let arr2 = [];
// let arr3 = arr1;
// console.log(arr1 === arr3);

// console.log(typeof ["sdsd"]);
// console.log(typeof []);

// console.log([] == false); // true
// console.log(" " == false); // true
// console.log(false == " "); // true
// console.log(" " === false); // false

// console.log([] == 0 );
// console.log([] == "0");  // When [] is coerced to a string, it becomes an empty string "".
// console.log(0 == " ");


// console.log(false == " ");
// console.log([] == 0); // true
// console.log([] == "0"); // false
// console.log([0] == 0);
// console.log(0 === 0);
// This line compares [0] (an array) with 0 (a number) using the strict equality operator (===).

// Explicit type conversion
// Explicit coercion in JavaScript is when you intentionally convert a value from one type to another using built-in functions or operators. Here's a breakdown of the common methods:

// Number(): Converts a value to a number.
// String(): Converts a value to a string.
// Boolean(): Converts a value to a boolean.
// parseInt(): Parses a string and returns an integer.
// parseFloat(): Parses a string and returns a floating-point number.

// console.log(typeof ("5454"));
// console.log(typeof Number("5454"));
// console.log(typeof String(533453));
// console.log(typeof Boolean(533453));
// console.log(typeof Boolean("sdfdsf"));
// console.log(typeof parseInt("sdfdsf"));

// console.log(typeof parseInt('10px'));
// console.log(parseInt('10px'));  // parseInt(): Stops parsing when it encounters a non-numeric character.
// console.log(typeof parseInt('10px'));  // parseInt(): Stops parsing when it encounters a non-numeric character.
// console.log(Number('10px')); // Returns NaN (Not a Number) if the entire input cannot be converted to a number.   
// console.log(typeof Number('10px')); // Returns NaN (Not a Number) if the entire input cannot be converted to a number.   
// // consider typeof Number and parseInt is always number evenif it don't give result in NaN ncz type of NaN is number
// console.log(typeof NaN);

// --------------------------------- Array ---------------------------------

// array -> The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// ----> print in this way
// 0    1    2    3    4    5    6    7    8    9
// 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100  
// -10  -9   -8   -7   -6   -5   -4   -3   -2    -1

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.push(500);
// arr.unshift(500);
// arr.pop()
// arr.shift()

// arr.splice(5)
// arr.splice(8)
// console.log(arr.splice(8));
// arr.splice(-3);
// arr.splice(-8);
// console.log(arr.splice(-8));  // it's show that this values are removed
// splice(start index (can conut from 0) , deletecount)
// console.log(arr.splice(2, 4 , 89 , 78));
// console.log(arr);



// slice method
// 0    1    2    3    4    5    6    7    8    9
// 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100  
// -10  -9   -8   -7   -6   -5   -4   -3   -2    -1

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.slice(5);
// console.log(arr);

// console.log(arr.splice(2,8));


// slice == to understand slice we need to understand shallow copy and deep copy

// shallow copy and deep copy
// A shallow copy occurs when two variables refer to the same underlying object in memory. Any changes made to the object through one variable will also affect the other because they both point to the same object.
// second_person is assigned first_person, creating a shallow copy. Both variables now refer to the same object in memory.

// const first_person = {
//     name: "Jack",
//     age: 24,
// };

// // console.log(first_person);
// const second_person = first_person;
// console.log(second_person);
// second_person.age = 56;
// console.log(second_person); 
// console.log(first_person);


// console.log(first_person.age); // output: 56
// console.log(first_person); // output: 56
// console.log(second_person.age); // output: 56

// const obj = {
//     name: "cjsdi",
//     rno: 2
// }
// const obj2 = obj;
// obj2.name = "mital";
// console.log(obj.name);
// console.log(obj2.name);
// console.log(obj2);



// deep  copy
// A deep copy creates a completely independent copy of an object, meaning the new variable does not share memory with the original object. Changes made to one object do not affect the other because they are separate entities.

// const first_person = {
//     name: "Jack",
//     age: 24,
// };
// // console.log(first_person);
// const second_person = { ...first_person };
// second_person.age = 25;
// console.log(second_person);
// console.log(first_person.age); // output: 24
// console.log(second_person.age); // output: 25


// deep copy

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// // let newEmployee = JSON.parse(JSON.stringify(employee));
// let newEmployee = { ...employee };

// // console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);



// ---------------------------------------------------------------------


// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'strawberyy']

// console.log(fruits.slice(2));
// console.log(fruits);
// fruits.slice(2,4);
// console.log(fruits);
// console.log(fruits.slice(-2));


