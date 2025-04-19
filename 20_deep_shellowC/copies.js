// import _ from 'lodash';

// understand speard operator before understanding shallow and deep copy
// speard operator
// The spread operator in JavaScript is written as ...
// It is used to "spread out" the elements of an array, object, or iterable into individual elements.
// 💡 What does "spread out" mean?
// It just means breaking things apart.

// Imagine you have a box of toys:
// const toys = ["car", "ball", "doll"];
// console.log(...toys); // car ball doll
// The ... (spread operator) opened the box and took out each toy one by one.

// So, why use ...?
// You want to copy things
// You want to combine things
// You want to change parts without touching the original

// copy array
// const fruits = ["apple", "banana"];
// const moreFruits = [...fruits];
// console.log(moreFruits);

// want to combine things
// const fruits = ["apple","banana"];
// const mergedarray = [1 , 2 , ...fruits , 3 , "hello"]
// console.log(mergedarray);

// copy an object
// let person = { name: "priyanshi", work: "engineering" };
// let storeperson = {...person};
// storeperson.name = "neek"
// console.log(storeperson);
// console.log(person);

// In this code problem is that it is copy address(memory) when we assign obj to another variable so it change value if we give any other value

// PROBLEM

// In this obj it will copy memory
// let obj = {
//     name : "peter"
// };
// let user = obj;
// user.name = "priyanshi";
// console.log(user);
// console.log(obj);

// It will not cause any problem because object copy memory Location whereas variable copy its value
// let x = "anil";
// let y = x;
// y = "ridhi";
// console.log(x);
// console.log(y);

// ------------------------------- SHALLOW COPY -------------------------------
// You want to change parts without touching the original array or object. 
// Shallow copy consider only first object it is not consider object which is in under of object or within object

// SOLUTION 1 - using Object.assign() method
// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     }
// };
// let user = Object.assign({},obj);
// user.name = "Henna";
// console.log(user);
// console.log(obj);

// SOLUTION 2 - using speard operator
// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     }
// };
// let users = { ...obj }; // distructured object
// // let users = obj; // cause problem if we assign directly
// users.name = "Henna";
// console.log(users);
// console.log(obj);

// but shallow copy also have one issue this =>
// Shallow copy consider only first object it is not consider object which is in under of object or within object
// following is problem that it change name in user city and obj city also.
// To solve this problem generally we use deep copy

// PROBLEM

// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     }
// };

// let users = { ...obj };
// users.address.city = "surat";
// console.log(users);
// console.log(obj);

// ------ main diffrence between shallow and deep copy ------ 

// shallow copy
// Copies only the top level.
// Nested objects/arrays are still linked (shared) with the original.
// “Just the surface is copied, the inside is still connected.”

// deep copy
// Copies everything — top level and all nested stuff.
// Completely independent copy.
// “Everything is cloned. No links to the original.”

// ------------------------------- DEEP COPY ----------------------------------
// deep copy consider not only first object it is also consider object which is in under of object or within object

// let obj = {
//   name: "Peter",
//   address: {
//     city: "Noida",
//     stat: "UP",
//   }
// };

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "surat";
// console.log("real object", obj);
// console.log("User", user);

// By using lodash library : we can see function also right now
// const _ = require('lodash');

// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     },
//     hello: function () {
//         return "Hello world";
//     }
// };


// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] } , "OG"];

// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

// ingredientsListDeepCopy[1].list = ["hello","you","all"];

// console.log(ingredientsListDeepCopy);


// let user = _.cloneDeep(obj);
// user.address.city = "Surat";

// console.log("real object", obj);
// console.log("User", user);
// console.log("User says:", user.hello()); // ✅ function still works!


// Interview questions

// 1. what is perform when we do shallow copy or deep copy ?
//  ans : There is copy value instaed of memory location

// 2. Difference between shallow copy and deep copy. 
// ans : shallow copy is just copy only main object whereas in deep copy we can copy nested object also

// 3. How many why to do shallow copy or deep copy
//  shallow copy 
// => 1. Object.assign()  2. Object destructuring using speard operator
// Deep copy
//  => JSON.parse with JSON.STRINGIFY  => in this data and functions are not work to resolve this problem we can use lodash library or manualy you can do using for loop by copying every element to another file.
