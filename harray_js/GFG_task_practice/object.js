// let obj = {
//     name : "priyanshi",
//     work : "eat",
//     age : 20
// }

// Object.entries(obj).map(([value,key]) => {
//     console.log(value)
//     console.log(key)
// })


// function getval(obj , val){
//     return Object.keys(obj).filter(keys => obj[keys] === val 
//     )
// }

// console.log(getval(obj,'eat'));


// obj = Object.keys(obj)
// console.log(obj.length);

// let out1 = 'namee' in obj;
// console.log(out1);

// let obj = {
//     name : "priyanshi",
//     work : "eat",
//     age : 20
// }

// let keys = Object.keys(obj);
// let lastKey = keys[keys.length - 1]; // Get the last key
// let lastValue = obj[lastKey]; // Get the value corresponding to the last key
// console.log(lastKey, lastValue);

// let key = Object.keys(obj);
// let lastkey = key[key.length - 1];
// console.log(lastkey);

// let obj2 =obj ;
// console.log(obj2);



// let obj = {
//     name : "priyanshi",
//     work : "eat",
//     age : 20
// }

// let obj2 = {
//     name2 : "priyanshi",
//     work2 : "eat",
//     age2 : 20
// }
// let merge = {...obj , ...obj2}
// console.log(merge);
// console.log(obj , obj2);

// let keys = Object.keys(obj);
// let c = keys.length;
// console.log(c);

// obj.map((evalue,index) => {
//     console.log(index);
// }  )

// obj.dad = "pravinbhau";
// console.log(obj);



// let sort = obj.sort((a,b) => a.name.localeCompare(b.name));
// console.log(sort);




// const books = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
// ];
 
// const uni = books.filter((obj,index) => {
//     return index === books.findIndex( o => obj.title === o.title) ;
// })

// console.log(uni);


// function deleteObjects() {
//     let arr = {
//         name : "priyanshi",
//         key : "value"
//     }

//     console.log(arr['name']);

//     delete arr['name'];

//     console.log(arr['name']);


// }

// deleteObjects();




// let object = {};
// let firstkey = 0;
// let firstkeyv = "hello";
// let secondkey = 1;
// let seckeyv = "priyanshi";

// object[firstkey] = firstkeyv;
// object[secondkey] = seckeyv;

// console.log(object);


// let obj = { 
//     name : "priyanshi",
//     age : 45,
//     sname : "rabadiay"
// }

// delete obj.age;
// console.log(obj);

// function arr2obj(arr) {

// 	// Create an empty object
// 	let obj = {};

// 	arr.forEach((v) => {

// 		// Extract the key and the value
// 		let key = v[0];
// 		let value = v[1];
// 		// Add the key and value to
// 		// the object
// 		obj[key] = value;
// 	});

// 	// Return the object
// 	return obj;
// }
// console.log(
// 	arr2obj([
// 		["John", 12],
// 		["Jack", 13],
// 		["Matt", 14],
// 		["Maxx", 15],
// 	])
// );






