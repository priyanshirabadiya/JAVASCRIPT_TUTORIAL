// length
// tostring method


// join method
// let arr = ["hj","utiy","main","js"];
// console.log(arr);
// console.log(arr.join(""));  

// concate method

// let arr = [1,2,4,5];
// let arr2 = [6,5,7,8,7];
// console.log(arr.concat(arr2));


// array push 

// let pt = ["ty","fy","sy"];
// console.log(pt.push("mainadded"));
// console.log(pt);


// array splice
// let numArr = [20, 30, 40, 50]; 
// numArr.splice(1, 2, 0, 3, 4, 5); 
// console.log(numArr); 
// let strArr = ["amit", "sumit", "anil"]; 
// strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2"); 
// console.log(strArr);



// array slice

// let arr = [1,2,3,8,5,12,6,89];
// let m = arr.slice(3);
// console.log(m);

// array some
// function myfun(ele)
// {
//     return ele > 5;
// }
// let arr = [4,3,7,6,5,9,23];
// let val = arr.filter(myfun)
// console.log(val);

// let a = (x) => x > 5;
// let arr2 = [2,5,6,8,6,3];
// z = arr2.filter(a);
// console.log(z); 


// (function(a){
//     let array = a.filter(a => a > 5);
//     console.log(array);
// })([2,4,5,3,6,8,56,2,78]);


// const numbers = [45, 100];
// const sum = numbers.reduceRight(function (total, val){
// 			return total + val;
// }, 3);
// console.log(sum);
// 99

// let red = [3,6,45,78,2,9];
// let fun = red.reduce(function(total,v){
//     return total + v;
// })
// console.log(fun);


// let sm = function(a)
// {
//     arr = a.filter(a => a > 5);
//     return arr;
// }
// console.log(sm([2,4,5,7,3,7,6,90,76,54]));


// find method --> returns only first element of array

// let x = [2,6,5,9,8];
// let z = x.findIndex(function(val){
//     return val > 5;
// })
// console.log(z);

// array entries

// let array = ['w','drow','main'];
// let array2 = array.entries();
// console.log(array2.next().val);


// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value); // [0, "a"]
// console.log(iterator1.next().value); // [1, "b"]


// let arr = [34,67,54,87,23,17,90];
// console.log(Math.max.apply(null,arr));
// console.log(arr.every(arr => arr > 500));


// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }
// const points = [40, 100, 1, 5, 25, 10];
// myArrayMax(points);
// // The highest number is 100.