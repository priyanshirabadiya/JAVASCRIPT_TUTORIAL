// console.log(a);
// var a = 10;

// let arr = [1 , [2 , [9 , [4 , 2]]]]

// let arr = [1 , [2 , [9 , [4 , 2]]]];

// let flatArr = arr.flat(Infinity);
// console.log(flatArr); // [1, 2, 9, 4, 2]

// let arr = [10,20,30,40,50];
// console.log(typeof arr.join(""));
// // console.log( arr);

// function flattenArray(arr) {
//   return arr.reduce((acc, val) =>
//     Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
//   , []);
// }

// function flatArr(){
//     return arr.reduce((acc,val)=>{
//         Array.isArray(val)
//     })
// }

// console.log(null == undefined);
// console.log(null === undefined);

// NOTE
// console.log([] == ![]); // ?
// [] is an empty array, which is truthy.
// Now evaluate [] == false
// This is where type coercion kicks in.

// JS performs coercion when comparing different types with ==.

// Here’s how it works:
// 👉 Rule for == between object and boolean:
// If you compare an object (like []) with a boolean, JavaScript:
// Converts the boolean to a number
// Then converts the object to a primitive
// So:
// false becomes 0
// [] becomes '' (an empty string)
// '' becomes 0
// So the chain looks like:
// [] == false
// → '' == false
// → 0 == false
// → 0 == 0
// → true

// let arr = [0, 2, 1, null, undefined, -3, false, true];

// let falsyValues = arr.filter(value => !value);
// console.log(falsyValues); // [0, null, undefined, false]

// let booleanval = arr.map(Boolean);
// console.log(booleanval);

// converts it into numeric data
// console.log(0 == ''); // ?
// console.log(false == '0'); // ?

// console.log(typeof NaN); // ?
// console.log(NaN === NaN); // ?

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));

// var a = 1;
// function test() {
//   console.log(a);
// //   var a = 2;
// }
// test();

// let x = 10;
// if (true) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x); // ?

// for (var i = 0; i < 3; i++) {
//   return (() => console.log(i))();
// }

// const obj = {
//   value: 42,
//   getValue: function () {
//     return this.value;
//   }
// };
// const fn = obj.getValue.apply(obj);
// console.log(fn); // ?

// const arrow = () => {
//   console.log(this);
// };
// arrow(); // ?

// async function f() {
//   return 1;
// }
// f().then(console.log); // ?

// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => console.log('3'));
// console.log('4');

// console.log([1, 2, 3] + [4, 5, 6]); // ?

// const a = { x: 1 };
// const b = { x: 1 };
// console.log(a === b); // ?

// let ar1 = [1, 2, 3];
// let c = ar1;
// console.log(typeof ar1 === c);

// c = [1,2,3]
// "object" = [1,2,3]
// string === object

// console.log(ar1 == ar2);

// let arr = [1, 2, 3];
// let obj = { num: 1, name: "sdf" };

// that's why
// arr = "Object"
// string = Object = false;

// console.log(arr == obj);

