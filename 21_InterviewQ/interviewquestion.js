
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

function getdata(name ,callback)
{
    console.log("Hello" + name );
    callback(name);
}


function callF(name){
    console.log("Goodname is :" + name);
}


getdata(' Priyanshi' , callF );
