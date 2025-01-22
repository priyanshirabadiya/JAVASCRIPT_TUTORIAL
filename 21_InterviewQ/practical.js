// let obj = {
//     id: "1",
//     name: "priyanshi",
//     rno: 55
// };

// console.log(Object.keys(obj));


// count vovels

// let vovels = str => {
//     let count = 0;
//     const vovels = ['a', 'i', 'e', 'o', 'u'];
//     for(let char of str.toLowerCase()){
//         if(vovels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vovels('hello'));



// function anagram(s1, s2) {
//     s1 = s1.split('').sort().join('');
//     console.log(s1);
//     s2 = s2.split('').sort().join('');

//     return s1 === s2;

// }

// console.log(anagram('dfgtg', 'dfgtsdfg'));





// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10, 20));;



// function maximum(arr) {
//     return Math.max(...arr);
// }

// console.log(maximum([10, 56, 20, 45, 30]));


// let palindrom = (str) => {

//     let arrstr = str.split('');
//     arrstr.reverse();
//     let newarr = arrstr.join('');
//     console.log(newarr);
// }

// palindrom('hello');


// let arr = [10, 15, 20, 56, 89, 91, 93, 95];
// console.log(arr.slice(2,5));
// console.log(arr.splice(2,5));

// console.log(arr.filter((arr) => arr > 20));

// let sum = arr.reduce((total, val) => total + val)
// console.log(sum);

// let arr = [10, 15, 20, 56, 89, 91, 93, 95];
// let even = arr % 2;

// console.log(arr.filter((ar) => ar % 2 === 0));



// let nestedarr = [
//     [1, 52, 3],
//     [4, 88, 3],
// ];

// function nestedArray(nestedarr) {
//     let largestArray = nestedarr[0][0];
//     for (let arr of nestedarr) {
//         for (let num of arr) {
//             if (num > largestArray) {
//                 largestArray = num;
//             }
//         }
//     }
//     return largestArray;
// }

// console.log(nestedArray(nestedarr));



// 0 , 1 , 1 , 2 , 3 , 5


// function fibo(num) {
//     if (num < 0) {
//         console.log(0);
//         return;
//     }
//     let a = 0 , b = 1;
//     console.log(a);
//     if(num > 1){
//         console.log(b);
//     }
//     for (let i = 2; i < num; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }

// fibo(5);




// function tit(str){
//     let change = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ');
//     console.log(change);   
// }

// tit("sdfsd sdfiy");


// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//     console.log("hello");
// }



// function sertt(arr) {
//     return arr.sort((a, b) => b - a);
// }

// console.log(sertt([10, 89, 20, 63]));



// function fac(num) {
//     if (num <= 1) return 1;
//     return num * fac(num - 1);
// }

// console.log(fac(5));



// let arr1 = [10, 20, 45];
// let arr2 = [56, 40, 74];

// let arrayF = (arr1 , arr2) => {
//     return [...arr1 , ...arr2].sort(); 
// }

// console.log(arrayF(arr1,arr2));




// function refsd(str){
//     let newstr = str.replace(/[^a-zA-Z]/g,'');
//     return newstr;
// }

// console.log(refsd("sdfyiuWr8923678vausdf643567@#@34"));


