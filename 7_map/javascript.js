// functions to interact with the User: alert , prompt and confirm.

/*

1. alert() - shows a message.

2. prompt() - shows a message, input text. it returns the text on ok or,  if cancel button or Esc is clicked, Null.

3. confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false for cancel/Esc.

*/

{
  // window.alert("this is javascript");
  // alert("Hello User");
}
{
  // window.alert("hiro");
  // alert("Hello User");
}

{
  // let  vivek;
  // vivek = false;
  // alert(vivek ? "Nagative User" : "Positive User");
}

// const Message = prompt();
// document.write(Message);

// let message = confirm("this is javascript?");
// document.write(message);

// const Message = prompt();
// document.write(Message);
// let message = confirm("this is js?");
// document.write(message);

// Map and Set in JS.

// what is map and set in javascript?
// They are both constructor functions in JavaScript. This means:
// You use them with the new keyword to create new instances of Map or Set objects.

//  So, what is a constructor?
// In JavaScript:
// A constructor is a special function used to create and initialize objects.
// You call it with the new keyword.



/* Javascript Map Methods */
/*
new Map()	Creates a new Map object
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size 	    Returns the number of elements in a Map

*/

/* Methods */
// --------------------------------- map / set -------------------------------

// map method
// A Map is a data structure that stores key-value pairs, where each key is unique. It is similar to an object but has some advantages:
// Inserts keys in the order they were added.
// Allows keys of any type, not just strings and symbols.
// Provides better performance when dealing with large datasets.

/* You can create a Map by passing an Array to the new Map() constructor */

{
  // const Data = new Map([
  //     ["option-1" , 20],
  //     ["option-2" , 10],
  //     ["option-3" , 60],
  //     ["option-4" , 80]
  // ])
  // ----------------------------------get mothod -------------------------------
  /* The get() method gets the value of a key in a Map */
  // console.log(Data.get("option-3"));
  // console.log(Data.get("option-2"));
  //   let mapmethod = new Map([
  //     ["option-1", 10],
  //     ["option-2 ",20],
  //     ["option-3 ",30],
  // ]);
  // console.log(mapmethod.get("option-2"));
  // mapmethod.set("option-4",40);
  // console.log(mapmethod);
  // mapmethod.set("option-5",50);
  // console.log(mapmethod.get("option-5"));
}

{
  //   const newmap = new Map([
  //     ["item-1", "car"],
  //     ["item-2", "bus"],
  //     ["item-3", "truck"],
  //   ]);
  //   console.log(newmap.get("item-1"));
}

// ----------------------------------set mothod -------------------------------
// set() method used to set the value in map
/* The set() method can also be used to change existing Map values */

{
  // const newmap = new Map();
  // const newmap = new Map([
  //         ["item-1" , "car"],
  //         ["item-2" , "bus"],
  //         ["item-3" , "truck"]
  //     ]);
  // newmap.set("item-1" , "jkcar");
  // newmap.set("item-2" , "mpbus");
  // newmap.set("item-3" , "bgtruck");
  // newmap.set("item-4" ,"sdf 50" )
  // newmap.set("item-4" , 50)
  // console.log(newmap);
  // console.log(newmap);
  // newmap.set("item-1","riya")
  // console.log(newmap);
}
{
  // const Data1 = new Map();
  // Data1.set('key1', 'value1');
  // Data1.set('key2', 'value2');
  // Data1.set('key3', 'value3');
  // console.log(Data1);
  // // Update value of key1
  // Data1.set('key1', 'updatedValue1');
  // console.log(Data1);
}
// ----------------------------------size mothod -------------------------------

{
  /* The size property returns the number of elements in a Map */
  //   const Data = new Map([
  //       ["option-1" , 20],
  //       ["option-2" , 40],
  //       ["option-3" , 60],
  //       ["option-4" , 80],
  //       ["option-4" , 80]
  //   ])
  //   console.log(Data);
  // const sizes = Data.size;
  // console.log(Data.size);
  // console.log(sizes);
}

// ----------------------------------delete mothod -------------------------------

{
  /* The delete() method removes a Map element */
  //   const newmap = new Map([
  //       ["item-1" , "car"],
  //       ["item-2" , "bus"],
  //       ["item-3" , "truck"]
  //   ]);
  //   console.log(newmap.delete("item-2"));
  //   console.log(newmap);
  //   const deletes = newmap.delete("item-2");
  //   console.log(deletes);
  // document.getElementById("deletes").innerHTML =deletes;
  // document.getElementById("deletes1").innerHTML =newmap.size;
}

// ----------------------------------has mothod -------------------------------

{
  /* The has() method returns true if a key exists in a Map */
  //   const Data = new Map([
  //       ["option-1" , 20],
  //       ["option-2" , 40],
  //       ["option-3" , 60],
  //       ["option-4" , 80]
  //   ])
  //   console.log(Data.has("option-4"));
  //   console.log(Data);
}

{
  //   const Data = new Map([
  //       ["option-1" , 20],
  //       ["option-2" , 40],
  //       ["option-3" , 60],
  //       ["option-4" , 80]
  //   ])
  //   console.log(Data.delete("option-4"));
  //   console.log(Data);
  //   console.log(Data.has("option-4"));
}

// ----------------------------------for each mothod -------------------------------

/* forEach() : JavaScript Map.forEach method is used to loop over the map with the given function and executes the given function over each key-value pair.  */

{
  // let mp = new Map();
  // mp.set("a", 18);
  // mp.set("b", 29);
  // mp.set("c", 3);
  // mp.forEach((values, keys) => {
  //   console.log(values, keys);
  // });
}

// ----------------------------clear

//  const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
// console.log(Data.clear(Data));
// console.log(Data);
// console.log(Data.size);

// ----------------------------keys and values

// const Data = new Map([
//   ["option-1", 20],
//   ["option-2", 40],
//   ["option-3", 60],
//   ["option-4", 80],
// ]);
// console.log("map keys", Data.keys(Data));
// console.log("map values", Data.values(Data));
// console.log(Data);

// ----------------------------entries -- > MapIterator
// The .entries() method returns an iterator (a special object you can loop over) that gives you the key-value pairs in the Map.
// Returning an iterator object which contains all the [key, value] pairs of each element of the map.

// const Data = new Map([
//   ["option-1", 20],
//   ["option-2", 40],
//   ["option-3", 60],
//   ["option-4", 80],
// ]);

// console.log(Data.entries());

// for(let [key,value] of Data.entries()){
//   console.log(key,value);
// }


// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]

// creating a map object
// let myMap = new Map();

//Adding [key, value] pair to the map
// myMap.set(0, 'geeksforgeeks');
// myMap.set(1, 'is an online portal');
// myMap.set(2, 'for geeks');

// creating an iterator object using Map.entries() method
// let iterator_obj = myMap.entries();

// displaying the [key, value] pairs of all the elements of the map
// console.log(iterator_obj.next().value);
// console.log(iterator_obj.next().value);
// console.log(iterator_obj.next().value);
// console.log(myMap.entries());

// ------------------------------add
// Adding entries to the map using set

// const Data = new Map();

// Data.set('key1', 'value1');
// Data.set('key2', 'value2');

// console.log(Data);

// ---------------------------- methods in short -------------------------
// create map
// let fruits = new Map([
//     ["apple",500],
//     ["banana",400],
//     ["orange",200],
//     ["stoberry",100]
// ]);
// console.log(fruits);

// get map value
// console.log(fruits.get("apple"));

// map size is not function but it is property
// console.log(fruits.size);

// map has
// console.log(fruits.has("apple"));
// console.log(fruits.has("applel"));

// map delete
// console.log(fruits.delete("apple"));
// console.log(fruits);
