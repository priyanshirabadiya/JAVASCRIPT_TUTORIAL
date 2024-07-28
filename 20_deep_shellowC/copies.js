// In this code problem is that it is being copy address(memory) when we assign obj to another variable so it change value if we give any other value 

// PROBLEM

// In this obj it will copy memory 
// let obj = {
//     name : "peter"
// };
// let user = obj;
// user.name = "priyanshi";
// console.log(user);
// console.log(obj);



// It will not cause any problem because object copy memori Location whereas variable copy its value
// let x = "anil";
// let y = x;
// y = "ridhi";
// console.log(x);
// console.log(y);



// SHALLOW COPY
// SOLUTION 1
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


// SOLUTION 2
// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     }
// };
// let users = { ...obj }; // distructured object 
// users.name = "Henna";
// console.log(users);
// console.log(obj);

// Shallow copy consider only first object it is not consider object which is in under of object or within object 
// following is problem that it change name in user city and obj city also
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




// DEEP COPY

// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     },
//     hello:function(){
//         return "Hello world";
//     }
// };
// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "surat";
// console.log( "real object" , obj);
// console.log( "User" , user);



// By using lodash library : we can see function also right now

// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         stat: "UP"
//     },
//     hello:function(){
//         return "Hello world";
//     }
// };
// let user = _.cloneDeep(obj);
// user.address.city = "surat";
// console.log( "real object" , obj);
// console.log( "User" , user);





// Interview questions

// 1. what is perform when we do shallow copy or deep copy ? ans : There is copy value instaed of memory location  
// 2. Difference between shallow copy and deep copy. ans : shallow copy is just copy only main object whereas in deep copy we can copy nested object also

// 3. How many why to do shallow copy or deep copy
//  shallow copy => 1. Object.assign()
//  2. Object destructuring
// Deep copy => JSON.parse with JSON.STRINGIFY  => in this data and functions are not work to resolve this problem we can use lodash library or manualy you can do using for loop by copying every element to another file  



// let a = [ 'sanjay' , 'Aman' , 'Rehman' , 'Rahul' ];
// console.log(a.slice(1,3));
// console.log(a.slice(2)); // all values after 2


// splice(index(position no where you want to insert) , howmany , "new value")

// a.splice(2 , 0 , "kena");
// a.splice(2 , 1); // sanjay , aman , rahul

// console.log(a); 







