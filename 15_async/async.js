// aynscronic function

// const { reject } = require("async");

// const { reject } = require("async");

// asyns function example

// async function f() {
//     console.log('Async function');
//     return Promise.reject('resolved');
// }

// f().then((data) => console.log(data));
// f().catch((data) => console.log(data)); //error

// this function returns a promise , you can use the chaining method then()

{
//   async function f(name) {
//     console.log("Async function");
//     return Promise.resolve("resolve");
//   }
//   async function r(name) {
//     console.log("rejected");
//     return Promise.reject("rejected");
//   }
//   f().then(
//     function (result) {
//       console.log(result);
//     }
//     .catch(function (err) {
//       console.log(err);
//     })
//   );
}

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
//   async function asyncCall(){
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
//   asyncCall();

// -----------------------------------------------------------------
// let val = false;
// function afterseconds2(){
//     return new Promise((resolve)=>{
//         if(val){
//         setTimeout(() => {
//             resolve("resolved");
//         }, 1000);
//     }
//     });
// }
// function afterseconds3(){
//     return new Promise((reject)=>{
//         if(val){
//         setTimeout(() => {
//             reject("reject");
//         }, 1000);
//     }
//     });
// }
// async function asyncCall(){
//     try{
//     const result = await afterseconds2();
//     console.log(result);
//     console.log("calling");
//     }
//     catch(err){
//         const am = await afterseconds3();
//         console.log(am);
//         console.log("calling");
//     }
// }
// asyncCall();

// let promise2 = false;
// let value = new Promise(function(resolve,reject){
//     if(promise2){
//         resolve('resolved');
//     }
//     else{
//         reject('rejected');
//     }
// })
// async function syncefun2(){
//     let x  = value.then((result)=>console.log(result)).catch((err)=>console.log(err));
//     let pro = await x;
//     // console.log(pro);
//     console.log("After output");
//     console.log("After output second line");
// }
// syncefun2();

// ----------------------------------async/Await   syntax in JavaScript can make asynchronous code behave in a synchronous way------------------------------------------------
// Await is used in waiting untile first promise is not run
// in only simple settimeout method we see that if any promise is in waiting session than it's next line it's next line is run before promises line
{
  // function my_fun(){
  // let promise = new Promise(function(resolve){
  //     setTimeout(function (){
  //         resolve('promise resolved')},3000);
  //     });
  // // async function
  // async function asyncFunc(){
  //     // wait untill the promise resolve
  //     let result = await promise;
  //     console.log(result);
  //     console.log('hello');
  // }
  // asyncFunc();
  // }
  // my_fun();
}

{
  // function my_fun(){
  //     let val = false;
  // let promise = new Promise(function(resolve,reject){
  //     if(val){
  //     setTimeout(function (){
  //         resolve('promise resolved')},3000);
  //     }
  //     else{
  //         setTimeout(() => {
  //             reject('rejected')}, 1000);
  //     }
  //     });
  // // async function
  // async function asyncFunc(){
  //     // wait untill the promise resolve
  //     let result = await promise;
  //     console.log(result);
  //     console.log('hello');
  // }
  // asyncFunc();
  // }
  // my_fun();
}
// In this above program hello world is print before promise resovaction It is called asnycronics function that we need to make syncronis for that we need to use asyncronics function
// promices is => asynchronous function

// ----in asyncronize function is also allow that resolve and reject any one condition at one time---------------------------------------
{
  // let count = false;
  // let value = new Promise(function(resolve,reject){
  //     if(count){
  //     setTimeout(function(){
  //         resolve("resolved")},1000);
  //     }
  //     else{
  //         setTimeout(() => {
  //             reject("rejected")}, 1000);
  //     }
  // });
  // async function set(){
  //     let x = value.then((result)=>console.log(result))
  //     .catch((err)=>console.log(err))
  // let y = await value;
  // let y = await x;
  // console.log(y);
  // ------------------soluction---------
  //    await value.then((result)=>console.log(result))
  //     .catch((err)=>console.log(err))
  // console.log("hello");
  // console.log("this is wait untill value function is not execute");
  // }
  // set();
}

// soluction of above code

// let val = false;
// function afterSecondsResolve() {
//     return new Promise((resolve) => {
//         if (val) {
//             setTimeout(() => {
//                 resolve("resolved");
//             }, 1000);
//         }
//     });
// }
// function afterSecondsReject() {
//     return new Promise((reject) => {
//         if (!val) {
//             setTimeout(() => {
//                 reject("rejected");
//             }, 1000);
//         }
//     });
// }
// async function asyncCall() {
//         const result = await (val ? afterSecondsResolve() : afterSecondsReject());
//         console.log(result);
//         console.log("calling");
//     }
// asyncCall();

// let promise = new Promise(function(reject){
//     setTimeout(function() {
//         reject("rejected")},2000);
//     })
// async function syncefun(){
//     let err = await promise;
//     console.log(err);
//     console.log('hello');
//     console.log('this will print after rejected value');
// }
// syncefun();

// program can be useful if multiple promises in this program
{
  // let val = false;
  // let promise = new Promise(function(resolve,reject){
  //     if(val){
  //         setTimeout(() => {
  //             resolve('resolved')}, 1000);}
  //     else{
  //         setTimeout(() => {
  //             reject('promise rejected')}, 1000);
  //     }
  // });
  // let promise1 = new Promise(function(resolve,reject){
  //     setTimeout(function (){
  //         resolve('promise one resolved')},3000);
  // });
  // let promise2 = new Promise(function(resolve,reject){
  //     setTimeout(function (){
  //         resolve('promise two resolved')},1000);
  // });
  // let promise3 = new Promise(function(resolve,reject){
  //     setTimeout(function (){
  //         resolve('promise three resolved')},5000);
  // });
  // async function anyscfun(){
  //     await promise.then((result)=>console.log(result))
  //         .catch((err)=>console.log(err))
  //     let result1 = await promise1;
  //     console.log(result1);
  //     let result2 = await promise2;
  //     console.log(result2);
  //     let result4 = await promise3;
  //     console.log(result4);
  // }
  // anyscfun();
}
