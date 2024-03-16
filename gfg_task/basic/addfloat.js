// let a = (x,y) => {
//     return x + y
// } ;
// console.log(a(1.2,5.1));

// let add = (x,y) => x + y;
// console.log(add(1.5,58.6));


// function my_fun(){
//     console.log('1.3 + 2.4' + ' => ' + (parseFloat('5.3') + parseFloat('1.3')).toFixed(2));
// }
// my_fun();



// function iseven(n){
//     return (n % 2 == 0);
// }
// let n = 100;
// iseven(n) ? console.log('Even') : console.log('Odd');


// function check(n){
//     if(n & 1 == 1){
//         return "number is odd";
//     }
//     else{
//         return "number is even";
//     }
// }
// console.log(check(4));

// this work in binary system
// example of a = 5 b = 1
//   101   (a)
// | 001   (b)
// -----------
//   101   (result)
// example of a = 6 and b = 1
//   110   (a)
// | 001   (b)
// -----------
//   111   (result)


// function check(number){
//     return (number | 1) === number ? 'odd' : 'even';
// }
// console.log(check(6));
// give false in even numbers
// console.log((17 | 1) === 17);
// console.log(8 | 5);




// function my_fun(num){
//     switch(Math.sign(num))
//     {
//     case 1:
//         console.log("number is positive.");
//         break;
//     case -1:
//         console.log("number is negative");
//         break;
//     default:
//         console.log("number is zero");
//         break;
//     }
// }
// my_fun(5);
// my_fun(0);
// my_fun(-50);
// my_fun(5);


// swap numbers
// let x = (c,a,b) =>
// {
//     c = a;
//     a = b;
//     b = c;
//     return {a , b};
// }
// console.log(x('',5,2));

// let a = 40;
// let b = 30;
// [a,b] = [b,a];
// console.log(`Swap to numbers: ${a}`);
// console.log(`after swap a= ${b}`);



// Find sum of natural number

// (function() {
//     let x = "hello...!"
//     console.log(x);
// })();



// let a = prompt(a);
// switch(a){
//     case 1:{
//         console.log("1");
//         break;
//     }
//     case 2:
//         {
//         console.log("2");
//         break;
//         }
//     case 3:
//         {
//         console.log("3");
//         break;
//         }
//     default:{
//         console.log("default");
//         break;
//     }
// }




// function Language() {
// 	let first = 'HTML',
// 		second = 'CSS',
// 		Third = 'Javascript'
// 	return {
// 		first,
// 		second,
// 		Third
// 	};
// }
// console.log(Language());
// let { first, second, Third } = Language();
// console.log(first);
// console.log(second);
// console.log(Third);


// let x = 150;
// 	if(x > 100)
// 		let x = 1;
// 	console.log(x);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//             return this.firstName + " " + this.lastName;
//     }
// }
// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
// }
// let fullName = person.fullName.bind(member); // Hege Nilsen

