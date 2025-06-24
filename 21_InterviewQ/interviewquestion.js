// 1.what is scripting language ?
// 2.what is javascript ?
// 3.what is object-oriented programming ?

// --------------------------------------------shallow/deep copy --------------------------------------------

// 1. what is perform when we do shallow copy or deep copy ?
// => ans : There is copy value instaed of memory location

// 2. Difference between shallow copy and deep copy.
// =>  shallow copy is just copy only main object whereas in deep copy we can copy nested object also

// 3. How many way to do shallow copy or deep copy ?
// => shallow copy => 1. Object.assign()
//  2. Object destructuring
// Deep copy => JSON.parse with JSON.STRINGIFY  => in this data and functions are not work to resolve this problem we can use lodash library or manualy you can do using for loop by copying every element to another file

// let obj = {
//   name: "Peter",
//   address: {
//     city: "Noida",
//     stat: "UP",
//   }
// };

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "surat";

// let user = JSON.parse(JSON.stringify(obj))
// user.address.city = "surat"
// console.log("real object", obj);
// console.log("User", user);

// shallow copy
// => shallow copy occurs when you copy the reference of an object to the variable
// A shallow copy means copying the main object, but not the nested objects inside it.

// const original = { name: "John", address: { city: "Delhi" } };
// const copy = { ...original }; // Shallow copy using spread operator

// copy.name = "Mike"; // OK, changes only in copy
// copy.address.city = "Mumbai"; // ❗ Changes original too!

// let employee = {
//   id: 1,
//   name: "priyanshi",
//   sname: "rabadiya",
//   salary: 50,
// };

// console.log("Employee", employee);
// let newEmployee = employee;
// newEmployee.name = "shubham";
// console.log("newEmployee", newEmployee);
// console.log("Employee change or not", employee);

// -------------------------------------------- Map/set --------------------------------------------

// 1. what is map method ?
// => The map() method in JavaScript is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.

// 2. what is set method ?
// => Set is a built-in data structure that stores unique values of any type. It provides methods for adding, removing, and checking for elements. Creating a Set.

// -------------------------------------------- Null / undefine / NaN --------------------------------------------

// 1. null => Null value represents the intentional absence of any object.

// 2. Undefined => A variable that has not been assigned value that is called undefine.

// let a;
// console.log(a);

// 3. Empty value => An empty has nothing to do with undefined

// 4. NaN => NaN is a number that is not legal number.

// -------------------------------------------- Array slice / splice --------------------------------------------

// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' , 'Karan' ];
// console.log(a.slice(1,3)); // Aman , Rehman // syntax : firstindex of array which value you want to get and lastindex + 1 then and only it will give your acject value
// console.log(a.slice(2)); // all values after 2nd index

// splice
// splice(Staringindex , howmanyelements , "new value")
// Splice method is LIKE mid insert and mid delete topic of javascript

// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' , 'Karan' ];
// console.log(a.splice(2 , 3 , "kena")); // 'Rehman' , 'Rahul' , 'Karan'  2 to 3
// console.log(a.splice(2 , 1)); // Rehman

// console.log(a);

// -------------------------------------------- callbacks --------------------------------------------

// In function we generally pass arguments as parameter but when we pass function as parameter that is called call back function

// function sayhello(){
//     console.log("Hello");
// }
// function sayhi(){
//     console.log("Hi..");
// }

// function nameF(num1 , num2 , callback) {
//     console.log(num1 + num2);
//     callback();
// }

// nameF(10 , 20 , sayhello);
// nameF(30 , 20 , sayhi);
// nameF(10 , 10 , function(){
//     console.log("Bye...");
// });

// ---------------------------------------------------------------------------------------------------------

// 1. callback hell
// 2. Promisis hell
// 3. what is exception handling
// 4. what syncronys and asyncronys
// 5. try catch block
// 6. call , apply , bind method in javascript
// 7. javascript is single therated ot multi therated
// 8. promises return function
// 9. copywithin
// 10. shallow / deep
// summutenesly

// -----------------------------------------------Callback hell----------------------------------------------------------

// Windows + . => for emojies

// function cheessF(callback) {
//   setTimeout(() => {
//     const cheese = "🧀";
//     console.log("Here is your chees", cheese);
//     callback(cheese);
//   }, 500);
// }

// function makeDough(cheese, callback) {
//   setTimeout(() => {
//     const dough = cheese + "🧇";
//     console.log("Here is a dough", dough);
//     callback(dough);
//   }, 1000);
// }

// cheessF((cheese) => {
//     makeDough(cheese, (dough) => {
//         console.log("Got my dough", dough);
//     })
// });

// function getRecipe(callback) {
//     setTimeout(() => {
//         const recipe = "Pasta Carbonara";
//         callback(recipe);
//     }, 1000);
// }

// function getIngredients(recipe, callback) {
//     setTimeout(() => {
//         const ingredients = ["pasta", "eggs", "pancetta", "cheese"];
//         callback(ingredients);
//     }, 1000);
// }

// function cookDish(ingredients, callback) {
//     setTimeout(() => {
//         const dish = "Delicious Pasta Carbonara";
//         callback(dish);
//     }, 1000);
// }

// getRecipe(recipe => {
//     console.log(recipe);
//     // After 1 second it will call getingredients function
//     // --------------------------------------------------------
//     getIngredients(recipe, ingredients => {
//         console.log(ingredients);
//         // --------------------------------------------------------
//         cookDish(ingredients, dish => {
//             // console.log(ingredients);
//             console.log(dish); // "Delicious Pasta Carbonara"
//         });
//         // --------------------------------------------------------
//     });
//     // --------------------------------------------------------
// });

// callback first to direct last function

// getRecipe(recipe => {
//     console.log(recipe);
//     // --------------------------------------------------------
//     cookDish(recipe, dish => {
//         console.log(dish); // "Delicious Pasta Carbonara"
//     });
// });

// ----------------------------------------------------- callback hell another example

// Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. The two common ways of escaping the callback hell are by using promises and async/await. Promises mainly have three stages such as resolved, rejected, and pending. It makes the code more maintainable and understandable.

// function maketea(callback) {
//     setTimeout(() => {
//         const water = "Add water.";
//         callback(water);
//     }, 500)
// }

// function addsuger(water, callback) {
//     setTimeout(() => {
//         const suger = "Add one cup of suger.";
//         callback(suger);
//     }, 500);
// }

// function addmilk(suger, callback) {
//     setTimeout(() => {
//         const milk = "Add one liter milk in tea.";
//         callback(milk);
//     },500)
// }

// maketea(water => {
//     console.log(water);
//     addsuger(water, suger => {
//         console.log(suger);
//         addmilk(suger, milk => {
//             console.log(suger,milk);
//         })
//     })
// })

// simple callback function

// function getdata(name ,callback){
//     console.log("Hello" + name );
//     callback(name);
// }
// function callF(name){
//     console.log("Goodname is :" + name);
// }
// getdata(' Priyanshi' , callF );

// --------------------------------------------------------- Promises(resolve , reject) (then,catch,finally) in javascript

// In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed.

// -------------cheese callback task by using promises
// function getcheese() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheese = "🧀";
//             resolve(cheese);
//         }, 500);
//     })
// }

// function makedough(cheess) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheess + "🧇";
//             // resolve(dough);
//             reject("Error occurred");
//         }, 2000)
//     })
// }

// function makepizza(dough) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//             resolve(pizza);
//         }, 500)
//     })
// }

// using aysnc & await

// async function orderpizza() {
//     try {
//         const cheese = await getcheese();
//         console.log('Here is your cheese');
//         const dough = await makedough(cheese);
//         console.log('Here is your dough');
//         const pizza = await makepizza(dough);
//         console.log('Here is your pizza');
//     }
//     catch (err) {
//         console.log(err);
//     }
//     // finally block
//     console.log('Proccess is done');
// }

// function orderpizza() {

//     const cheese = getcheese();
//     console.log('Here is your cheese');
//     const dough = makedough(cheese);
//     console.log('Here is your dough');
//     const pizza = makepizza(dough);
//     console.log('Here is your pizza');

//     console.log('Proccess is done');
// }

// orderpizza();

// getcheese()
//     .then((cheese) => {
//         console.log("Here is your cheese" + cheese);
//         return makedough(cheese);
//     })
//     .then((dough) => {
//         console.log('Here is your dough' + dough);
//         return makepizza(dough);
//     })
//     .then((pizza) => {
//         console.log('Here is your pizza' + pizza);
//     })
//     .catch(() => {
//         console.log('There is an error');
//     })
//     .finally(() => {
//         console.log('Proccess is done');
//     })
// ---------------------------------------------------------

// new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log('First Line line for execute');
//         resolve();
//     } ,1000)
// }).then(() => {
//     console.log('Function is resolved');
// })

// let promise1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log('Variable promise is execute');
//         resolve();
//     },1000);
// })
// promise1.then(() => {
//     console.log('variable function 2 is resolved');
// } )

// const returnval = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("return promise is returned");
//         resolve({user: "priyashi" , mail : "abc@gmail.com" })
//     },1000)
// })

// returnval.then((user) => {
//     console.log(user);
// } )

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "priyanshi", password: "123" })
//         }
//         else {
//             reject("ERROR:Something went wrong");
//         }
//     })
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('The is finally either resolve or rejected');
// })

// Finally part is execute only and when Promise give one result either it is resolve or it is reject then an only finally wii execute

// -------------------------------------------------------fetch api

// async function getusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch {
//     console.log(error);
//   }
// }
// getusers();

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// interview question

// 1 What is promises?

// In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life.

// Finally will not run if promises is not resove or reject
// let pendingPromise = new Promise((resolve, reject) => {
//     // This promise will remain pending because neither resolve nor reject is called
//     console.log("This promise is pending...");
//     // Commented out resolution or rejection
//     setTimeout(() => resolve("Resolved!"), 5000);  // Uncomment to eventually resolve
//     // setTimeout(() => reject("Rejected!"), 5000);   // Uncomment to eventually reject
// });

// // Attach then, catch, and finally to the promise
// pendingPromise
//     .then((result) => {
//         console.log(result);  // This will not run unless the promise is resolved
//     })
//     .catch((error) => {
//         console.error(error);  // This will not run unless the promise is rejected
//     })
//     .finally(() => {
//         console.log("This will run when the promise settles.");  // This will not run while the promise is pending
//     });

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Promise ready")); // triggers first

// new Promise(function (resolve, reject) {
//     resolve(1);
// })
//     .then(result => {
//         alert(result)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(result * 5);
//             },1000)
//         })
//     })
//     .then(result2 => {
//         alert(result2);
//         return new Promise((resolve, reject) => {
//             resolve(result2 * 5);
//         })
//     })
//     .then(result3 => alert(result3))
//     .catch(error => console.log(error))

// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
// }).catch( error => console.log(error));

// new Promise((resolve, reject) => {

//     // throw new Error("Whoops!");
//     reject('Whoops something went wrong.N')
// }).catch(function (error) {
//         alert("Can't handle such error");
//         throw error; // throwing this or another error jumps to the next catch

// }).then(function () {
//     console.log("resolved");
// }).catch(error => { // (**)

//     alert(`The unknown error has occurred: ${error}`);
//     // don't return anything => execution goes the normal way

// });

// ------------------------------------------------------- async / await

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Whether data');
//             resolve(200);
//         }, 1000);
//     })
// }
// await mean to wait untill it find data :
// Sure! Here's the English translation of your sentence:
// > The program should not move forward until it gets the awaited data. The code after `await` will be blocked and won't run until the awaited data is received. Once the data is received, the rest of the code will continue. This behavior works only inside an `async` function.
// >
// > **In short**, the meaning of `await` is **to wait until the function receives the data**.

// async must need a function we need to create function then try to create anonomous function

// async function getdata() {
//     await api();
//     console.log('Getting data1...');
//     await api();
//     console.log('Getting data2...');
//     await api();
//     console.log('Getting data3...');
//     console.log('Data after waiting for fetching data');
// }
// getdata();

// // by using .then
// getdata.then(() => {
//     console.log('Must run last');
// })
// // by using again  async function
// async function main() {
//     await getdata();
//     console.log('Must run last');
// }

// IIFE = anonomous function which we use only one time

// (async function () {
//     await api();
//     console.log('Getting data1...');
//     await api();
//     console.log('Getting data2...');
//     await api();
//     console.log('Getting data3...');
//     console.log('Data after waiting for fetching data');
// })();
// getdata();

// ------------------------------------------------ Lexical scoping / clouser

// 1. what is clouser ?
// => In JavaScript, a closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has finished executing.
// => A closure in JavaScript is a function that has access to variables in its parent scope, even after the parent function has returned. Closures are created when a function is defined inside another function, and the inner function retains access to the variables in the outer function's scope.

// function outerF(){
//     var Fname = "priyanshi";
//     // console.log(secreat);  //error
//     var secreat = "123";
//     function innerF(){
//         console.log("First inner" ,Fname);
//     }
//     function innerFY(){
//         console.log("Second inner",Fname);
//         console.log(secreat);
//     }
//     innerF();
//     innerFY();
// }

// outerF();

// function nameF() {
//     var nameFY = "Hello";
//     function fubS2() {
//         console.log(nameFY);
//     }
//     fubS2();
// }
// nameF();

// function outerF(){
//     const nameF = "priyanshi";
//     function displayName(){
//         console.log(nameF);
//     }
//     return displayName;
// }

// const myFun = outerF();
// myFun();

// outerF(); // not print anything work

// var x = 220;
// var y = "Hello";
// var z = undefined;

// console.log(x || y)   // Returns 220 since the first value is truthy
// console.log(x || z)   // Returns 220 since the first value is truthy
// console.log(x && y)   // Returns 220 since the first value is truthy

// x && y

// -------------------------------------- This keyword in javascript

// user = { "..." } // => It is your current context
// > To use the current content, use the `this` keyword.
// In JavaScript, the this keyword refers to the object that is currently executing or calling a piece of code. It's a way to access and manipulate the properties and methods of that object.

// const user = {
//     username: "priyanshi",
//     price: 999,
//     welcomMessage: function () {
//         console.log(`${this.username} , welcome to website `);
//         console.log(this);
//     }
//   To access a keyword (value/variable) within the current scope, you can use the `this` keyword.
// }

// user.welcomMessage();
// user.username = "sam";
// user.welcomMessage();
// console.log(this);   // {}

// bind method in javascript / Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// const person = {
//     firstname : "hJi",
//     lastname : "huifgyiu",
//     display : function (){
//         console.log("This is function" + this.firstname);
//     }
// }

// Higher order function in javascript

// function greet(name) {
//   return function (message) {
//     console.log(`hello ${name}, ${message}`);
//   };
// }

// let letgreet = greet("Priyanshi");
// letgreet("Rabadiya");

// function greet(name) {
// 	return `Hi!! ${name} `;
// }

// function greet_name(greeting, message, name) {
// 	console.log(`${greeting(name)} ${message}`);
// }

// greet_name(greet, 'Welcome To GeeksForGeeks', 'Geeks');

// function hello(name) {
//   return `hello! ${name} `;
// }
// function meet(sayhi, message, name) {
//   console.log(`${sayhi(name)} ${message}`);
// }
// meet(hello, "How are you ?", "Priyanshi");

// function multiplier(factor) {
//     return function (x) {
//         return x * factor;
//     };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5));

//-------------------------------- exec => regexp

// const regex = /hello \w+/;
// const str = "hello world 1";
// const result = regex.exec(str);

// console.log(result); // Output: ["hello world", "world"]

// const regex1 = /hello \w+/;
// const string = "hello world";
// const result1 = regex.test(string);
// console.log(result1);

// Prototype in javascript
// In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from other objects. It's a fundamental concept in understanding how inheritance works in JavaScript.

// Function.prototype.mybind = function () {
//     console.log("werwef");
// }

// function fun() { }
// fun.mybind()

// function fun2() { }
// fun2.mybind()

// function Person(first , last , age , eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor = eyecolor;
// }

// // Person.prototype.nationality = "Indian";

// Person.prototype.name = () => {
//     return this.firstName + " " + this.lastName;
// }

// const mydemo = new Person("priyanshi" , "rabadiya" , 15 , "black");
// // console.log(mydemo);
// // console.log(mydemo.nationality);
// console.log(mydemo.name());

// what is encode and decode string in js

// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// console.log(encoded_uri);
// console.log(decoded_uri);

// what is memorization

// Memoization is a technique for saving values returned by a function so that you don't have to repeat calculations you've already done. This strategy is convenient when we have a frequently called function whose analysis is time-consuming.

// like reursion

// OBJECT CONSTRUCTOR IN JAVASCRIPT

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

// we can add value in this object constructor so to do that we need to use PROTOTYPE : WHY WE USE PROTOTYPE

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }

//   Person.prototype.nationality = "English";

// CLASSES in javascript
// In general, you should consider using classes when you want to create objects that store their own internal data and expose a lot of behavior.

// class car {
//     constructor(name, price) {
//         this.name = name;
//         this.totalprice = price;
//     }
//     makecar() {
//         return `${this.name}'s  price is : ${this.totalprice}  `
//     }
// }

// let onecar = new car("BMW", 780000);
// let seccar = new car("KIA", 30000);
// console.log(onecar);
// console.log(seccar);
// console.log(onecar.makecar());
// console.log(seccar.makecar());
// console.log(typeof car);  // function

// WHAT IS MODULE IN JAVASCRIPT

// => JavaScript Modules are basically libraries which are included in the given program. They are used for connecting two JavaScript programs together to call the functions written in one program without writing the body of the functions itself in another program.

// math.js file
// export function add(a, b) {
//     return a + b;
//   }

// export function subtract(a, b) {
//     return a - b;
//   }

// app.js
// import { add, subtract } from './math.js';

// console.log(add(5, 3)); // Output: 8
// console.log(subtract(10, 4)); // Output: 6

// WHY WE USE MODULES IN JAVASCRIPT

// JavaScript modules are used to split your code into smaller, more manageable pieces rather than keeping it in a single file and moving those pieces to other files or projects. Modules can contain functions, variables, and objects that perform specific functions.

// WAY TO CHECK LOCAL AND SESSION STORAGE IS AVAILABLE OR NOT

// if (typeof Storage !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     console.log(Storage);

// } else {

//     console.log(" Sorry! No Web Storage support..");
// }

// window.postMessage("Hello from the parent!", "https://google.com");

// Promise.all() method in javascript

// const promise1 = Promise.resolve(3);
// const promise2 =  new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// });
// const promise3 = new Promise((resolve , reject) => {
//     setTimeout(resolve , 2000 , "Hello" )
// }) ;

// Promise.all([promise1,promise3,promise2]).then((values) => {
//     console.log(values);
// });

// Promise Race

// var promise1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, "one");
// });
// var promise2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, "two");
// });
// Promise.race([promise1, promise2]).then(function (value) {
//     console.log(value); // "two" // Both promises will resolve, but promise2 is faster // so it will produce only those result which is faster
// });

// What is the purpose of the delete operator

// var user = { firstName: "John", lastName:"Doe", age: 20 };
// let nameF = "priyanshi";
// delete user.age;
// delete nameF;
// console.log(nameF);
// console.log(user);

// function goBack() {
//     window.history.back();
// }
// // function goForward() {
// //     window.history.forward();
// // }

// console.log(goBack());

// ----- call , apply , bind
// call and apply are method which allow explicity set the value of this when calling a function.
// in call function it takes argument seperately where apply method takes argument in form of array that is the main difference between them.
// function sayhello() {
//     return "Hello " + this.name;
// }
// var obj = { name: "hirva" }
// console.log(sayhello.call(obj));

// function sayapply(message) {
//     return this.name + " is " + message;
// }

// var per4 = { name: "John" };
// console.log(sayapply.apply(per4, ["tina"]));

// curring topic
// what is curring => Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.
// function simpel(ar1, ar2, ar3) {
//     return ar1 + ar2 + ar3;
// }

// function simple1(ar1) {
//     return function (ar2) {
//         return function (ar3) {
//             return ar1 + ar2 + ar3;
//         }
//     }
// }

// console.log(simple1("helo")('good')('morning'));

// clousers
// when function give access to it's outer scope that is called clousers
// laxical scoping = we can use outer funtion property into inner function but we can not use inner
// function property or variable into outer function that is called laxical scoping.

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         var a = 10;
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     console.log(a);
//     displayName();
// }
// init();

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const closureFunction = outerFunction("outside");
// closureFunction("inside");
