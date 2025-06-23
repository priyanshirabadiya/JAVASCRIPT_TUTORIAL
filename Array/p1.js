// Array in javascript:
// An array is a special variable that can hold more than one value at a time.

//  Why Use an Array?
// Instead of creating many variables:
// let fruit1 = "apple";
// let fruit2 = "banana";
// let fruit3 = "orange";
// You can store them all in one array:
// let fruits = ["apple", "banana", "orange"];

// How to Create an Array
// Using square brackets []:
// let colors = ["red", "green", "blue"];
// let colors = new Array("red", "green", "blue");

// Common Array Methods
// push() – Add item to the end
// pop() – Remove item from the end
// shift() – Remove item from the beginning
// unshift() – Add item to the beginning
// includes() – Check if item exists
// indexOf() – Find the index of an item

// array methods(practice) line by line methods are available in Array methods folder

// const arr = [1,2,3,'hello' , true , false];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);

// const data = [11, 22, 33, 44, 55, 66];

// push method -> add element in last
// var p = data.push(77);
// data.push(78);
// console.log(data);
// console.log(data.push()); //this will not work

// pop method -> delete last element
// data.pop()
// console.log(data);

// shift and unshift

// const data = [11, 22, 33, 44, 55, 66];

// unshift -> insert record at first position
// shift   -> first delete -> you might write more than 1 time if you want to delete more than one record
// data.unshift(110);
// data.unshift(200,56,23);
// data.shift();
// data.shift();
// data.shift();
// data.shift();
// console.log(data);

// concat

// let arr = ['skill' , 'Qode'];
// console.log(arr);
// console.log(data.concat(arr , 'hello' , 12 , 45 , 56));
// console.log(data.concat(arr , ['hello'] , [12 , 45 , 56]));

// splice method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(1,2);
// fruits.splice(3);
// console.log(fruits);
// Banana,Orange,Lemon,Kiwi,Apple,Mango

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(1, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits
// console.log(fruits.length);
// console.log(fruits.push("lemon"));
// console.log(fruits);

// // slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// const citrus0 = fruits.slice(3);
// const citrus1 = fruits.splice(3);
// const citrus = fruits.slice(1,2);
// const citrus2 = fruits.splice(1,3);
// console.log(citrus0);
// console.log(citrus1);
// console.log(citrus);
// console.log(citrus2);

// console.log(fruits.slice(5));
// console.log(fruits.splice(1));

// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' ];
// console.log(a.slice(1,3));
// console.log(a.slice(2)); // all values after 2

// splice(index(position no where you want to insert) , howmany , "new value")

// a.splice(2 , 0 , "kena");
// a.splice(2 , 1); // sanjay , aman , rahul

// console.log(a);

// sort
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// Apple, Banana, Mango, Orange

// numeric sort
// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a, b){
// 				return a - b;
// });
// console.log(points);
// 1,5,10,25,40,100

// console.log(citrus);
// Orange, Lemon, Apple, Mango

// reverese
// const data = [11,22,33,568,44,55,125,66];
// console.log(data.reverse());

// sort method

// let txt = [88 , 26 , 11 , 13 , 44 , 22 , 15 , 9 ]; // It make to revese using 1 , 2 , 3 ...9 that's why 9 is at last
// let txt = ["88" ,"26" , "11" , "13" , "44" , "22" , "15" , "9" ]; // It make to revese using 1 , 2 , 3 ...9 that's why 9 is at last
// let a = txt.slice(2,5,"jk","ui");
// console.log(a);

// let txt = [88 , 266 , 11 , 133 , 44 , 22 , 155 , 9 ];
// let a = txt.sort((a,b)=>a-b);
// console.log(a);

// let str = ["bdsa" , 'hello' , 'Apple' , 'banana'];
// console.log(str.sort());

// console.log(Math.max.apply(null,txt));
// console.log(Math.min.apply(null,txt));

// slice
// txt na main array na data ma koi farak padse nai and only slice part j output ma aapse
// console.log(txt);
// a = txt.slice(2);
// console.log(a);

// function uppercase(str) {
//     var array1 = str.split(' ');
//     console.log(array1);
//     var newarray1 = [];
//     for (var x = 0; x < array1.length; x++) {
//       newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//       console.log(array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }
//   console.log(uppercase("the quick brown fox"));

// a = txt.slice(2,5);
// console.log(txt.slice(2));
// console.log(txt.splice(2,5));

// splice 2 pchi thi 5 indexs count krshe and splice valo part j output ma aapshe
// console.log(txt.splice(2,4, 'hello' ,'mam'));  //[11, 133, 44, 22]
// console.log(txt);

// shift
// let he = [xc,gf];
// console.log(he);

// let arr1 = [10,520,60,89];
// console.log(arr1.shift(520));
// console.log(arr1.shift());
// console.log(arr1.shift());
// console.log(arr1.shift());

// let arr1 = [10,520,60,89];
// arr1.unshift(9)
// arr1.unshift(56)
// arr1.unshift(23)
// console.log(arr1);
// console.log(arr1.unshift());

// revese data
// let data = [10 , 20 , 50 , 60];
// console.log(data.reverse());

// map method
// let data = [10 , 20 , 50 , 60];

// function myfun(1 , 2 , 3){
//     return 1 * 2;
// }
