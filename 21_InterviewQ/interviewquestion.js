
// 1.what is scripting languahe ?
// 2.what is javascript ?
// 3.what is object-oriented programming ?
// 4.Differences between var , let and const.


// -------------------------------------------- copy --------------------------------------------

// 1. what is perform when we do shallow copy or deep copy ?
// => ans : There is copy value instaed of memory location

// 2. Difference between shallow copy and deep copy.
// =>  shallow copy is just copy only main object whereas in deep copy we can copy nested object also

// 3. How many why to do shallow copy or deep copy ?
// => shallow copy => 1. Object.assign()
//  2. Object destructuring
// Deep copy => JSON.parse with JSON.STRINGIFY  => in this data and functions are not work to resolve this problem we can use lodash library or manualy you can do using for loop by copying every element to another file


// -------------------------------------------- Map/set --------------------------------------------

// 1. what is map method ?
// => The map() method in JavaScript is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.

// 2. what is set method ?
// => Set is a built-in data structure that stores unique values of any type. It provides methods for adding, removing, and checking for elements. Creating a Set.


// -------------------------------------------- Null / undefine / NaN --------------------------------------------

// 1. null => Null value represents the intent absence of any object.

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
// splice(index , howmany , "new value")
// Splice method is LIKE mid insert and mid delete topic of javascript

// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' , 'Karan' ];
// a.splice(2 , 0 , "kena");
// a.splice(2 , 1); // sanjay , aman , rahul

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
// 5. tryu catch block
// 6. call , apply , bind method in javascript
// 7. javascript is single therated ot multi therated
// 8. promises return function
// 9. copywithin
// 10. shallow / deep
// summutenesly



// -----------------------------------------------Callback hell----------------------------------------------------------

// Windows + . => for emojies

// function cheessF(callback) {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("Here is your chees", cheese);
//         callback(cheese);
//     }, 500)
// }

// function makeDough(cheese , callback) {
//     setTimeout(() => {
//         const dough = cheese + '🧇';
//         console.log('Here is a dough', dough);
//         callback(dough);
//     }, 1000);
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


// -------------------------------------------------------------------------callback hell another example

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
// -------------cheese callback task in primises
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
//         }, 500)
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

// async function orderpizza(){
//     try{
//     const cheese = await getcheese();
//     console.log('Here is your cheese');
//     const dough = await makedough(cheese);
//     console.log('Here is your dough');
//     const pizza = await makepizza(dough);
//     console.log('Here is your pizza');
//     }
//     catch(err) {
//         console.log(err);
//     }
//     // finally block
//     console.log('Proccess is done');
// }

// orderpizza();

// getcheese()
// .then((cheese) => {
//     console.log("Here is your cheese" + cheese);
//     return makedough(cheese);
// })
// .then((dough) => {
//     console.log('Here is your dough' + dough );
//     return makepizza(dough);
// })
// .then((pizza) => {
//     console.log('Here is your pizza' + pizza );
// })
// .catch(() => {
//     console.log('There is an error');
// })
// .finally(() => {
//     console.log('Proccess is done');
// })
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


// async function getusers(){
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     }
//     catch{
//         console.log(error);
//     }
// }
// getusers()


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
//     // console.log("This promise is pending...");
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
//     throw new Error("error");
// })
// .catch(err => console.log(err))
//     .finally(() => console.log("Promise ready")) // triggers first



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
// await mean to wait untill it find data : program aagal na vadva joiae jya sudhi temne awaited data no mle await pchi nu block thai thase jyasudhi aemne awaited data nai male data malse atle aagal code run thase ae khali function maj work karshe inshort meaning of await is to wait untill function can't find data

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

// function outerF(){
//     Fname = "priyanshi";
//     // console.log(secreat);  //error
//     function innerF(){
//         let secreat = "123;"
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


// function nameF(){
//     let nameFY = "Hello";
// }
// console.log(nameFY);


// function outerF(){
//     const nameF = "priyanshi";
//     function displayName(){
//         console.log(nameF);
//     }
//     return displayName;
// }

// // const myFun = outerF();
// // myFun();

// outerF();
