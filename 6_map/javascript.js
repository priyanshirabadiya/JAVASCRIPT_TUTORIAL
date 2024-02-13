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


/* Javascript Map Methods */

/*

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size 	Returns the number of elements in a Map

*/

/* Methods */

{
    /* You can create a Map by passing an Array to the new Map() constructor */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 10],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])

    // console.log(Data.get("option-3"));
    // console.log(Data.get("option-2"));

    // document.getElementById("new").innerHTML = Data.get("option-2");
}

{

    /* The set() method can also be used to change existing Map values */

    // const newmap = new Map();

    // newmap.set("item-1" , "car");
    // newmap.set("item-2" , "bus");
    // newmap.set("item-3" , "truck");
    // newmap.set("item-4" , 50 )

    // console.log(newmap);
    // document.getElementById("set1").innerHTML =newmap.get("item-4");
}

{
    /* The get() method gets the value of a key in a Map */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);
    // console.log(newmap.get("item-1"));
    
    // document.getElementById("set2").innerHTML = newmap.get("item-1");

}

{
    /* The size property returns the number of elements in a Map */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80],
    //     ["option-4" , 80]
    // ])
    // console.log(Data);
    // const sizes = Data.size;
    // console.log(Data.size);
    // document.getElementById("size").innerHTML =sizes;

}  

{
    /* The delete() method removes a Map element */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);
    // console.log(newmap.delete("item-2"));
    // console.log(newmap);


    // const deletes = newmap.delete("item-2");
    // document.getElementById("deletes").innerHTML =deletes;
    // document.getElementById("deletes1").innerHTML =newmap.size;
} 

{
    /* The has() method returns true if a key exists in a Map */
    
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // console.log(Data.has("option-4"));
    // console.log(Data);

    // const hass = Data.has("option-1");
    // document.getElementById("size1").innerHTML =hass;
    // const hasss = Data.has("option-5");
    // document.getElementById("size2").innerHTML =hasss;
}

{
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    
    // console.log( Data.delete("option-4"));

    // const hasss = Data.has("option-4");
    // document.getElementById("has1").innerHTML =hasss;

    // document.getElementById("size3").innerHTML =Data.size;
}

/* Note : forEach() after function lecture */

{
    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // let mapitem = "";

    // for(const x of newmap.entries()){
    //     mapitem += x + "<br>";
    // }

    // console.log(mapitem);

    // document.getElementById("element").innerHTML = mapitem;
}





// -------------------------------- get()

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);
    // console.log(newmap.get("item-1"));


// ----------------------------clear

//  const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
//     console.log(Data.clear(Data));
//     console.log(Data);
//     console.log(Data.size);

// ----------------------------values

//  const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
//     console.log(Data.keys(Data));
//     console.log(Data.values(Data));
//     console.log(Data);

// ----------------------------entries -- > MapIterator

//  const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
//     console.log(Data.entries(Data));
//     console.log(Data);

// ------------------------------add
// Adding entries to the map using set

// const Data = new Map();

// Data.set('key1', 'value1');
// Data.set('key2', 'value2');

// console.log(Data);


// ------------------------------set
// const Data = new Map();

// Data.set('key1', 'value1');
// Data.set('key2', 'value2');
// Data.set('key3', 'value3');

// console.log(Data); 
// // Update value of key1
// Data.set('key1', 'updatedValue1');
// console.log(Data); 


// ---------------------------------------------get

// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);


// // Get Map Values
// fruits.get("apples");
