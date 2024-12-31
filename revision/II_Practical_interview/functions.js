// let arr2 = [11,12,13,14,15,16];

// let arr3 = arr2; // aliasing
// let arr3 = [...arr2]; // deep copy analys
// arr3.length = 3;
// console.log(arr3);
// arr2.push(566)
// console.log(arr2);
// console.log(arr2);
// console.log(arr3.slice(1,5));
// let arr3 = arr2.splice(1,5);
// let arr3 = arr2.slice(1,3);
// let arr3 = arr2.splice(0,2,56,78);
// arr2.splice(0,2,789,56,78)
// console.log(arr2.splice(0,2,789,56,78));
// console.log(arr2);


// function fun_one(arg1, arg2, arg3) {
//     console.log(arg1, "-", arg2, "-", arg3);
// }
// // fun_one(undefined,'',78);
// fun_one(null,null,null);


// let fun_one = function fun_one() {
//     console.log("Inside fun_one");
//     return "Calling Fun_one";
// }
// function fun_two(xyz) {
//     console.log('Inside fun_two');
//     // return "Calling Fun_two";
//     return xyz;
// }
// console.log("Before");
// // fun_two(fun_one)();
// console.log(fun_two(fun_one)())


// let function_one = function fun_one() {
//     console.log("Called fun_one");
//     return "return fun_one";
// }

// function fun_two(xyz) {
//     // xyz();
//     console.log(xyz());
//     console.log("Called fun_one through fun_two");
// }

// fun_two(function_one)


// callbacks

// let function_one = function fun_one() {
//     console.log("Called fun_one");
//     return "return fun_one";
// }
// function fun_two(xyz)
// {
//   console.log("called fun_two")
//   return xyz
// } 
// console.log(fun_two(function_one)());

// let fun_one = () => {
//     console.log('Inside function 1');
//     return () => {
//         console.log('Inside function 2');
//         return () => {
//             console.log('Inside function 3');
//             return () => {
//                 console.log('Inside function 4');
//             }
//         }
//     }
// }
// fun_one()()()()


// let fun_one = (arg1, arg2, arg3) => {
//     console.log(arg1(), "-", arg2(), "-", arg3());
// }

// fun_one(() => { return "Hello 1" }, () => { return "Hello 2" }, () => { return "Hello 3" })




// Default parameters in functions

// function fun_one(arg1 = "Hello-1", arg2 = "Hello-2", arg3 = "Hello-3") {
//     console.log(arg1,arg2,arg3);
// }

// fun_one();
// fun_one("para1","para2","para2","para2","para2");

// let a , b; 
// a = b * 10;
// // initially a and b does't have any value so it is undefined but when b which is undefined multiplied by 10 then it's value will NAN so a will being NAN and b is undefined so answer will be that type
// fun_one(a,b,b);  
// // NAN Hello-2 Hello-3

// fun_one(undefined,undefined,null)
// fun_one(undefined,undefined,"H#")
// fun_one("asdfsdf")



// function fun_one(arg1) {
//   console.log(arg1);
// }
// console.log(typeof fun_one("sdfjsdkl"));
