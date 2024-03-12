// aynscronic function


// asyns function example

// async function f()
// {
//     console.log('Async function');
//     return Promise.reject('rejected');
// }

// f().then((data) => console.log(data));
// f().catch((data)=> console.log(data)) //error

// this function returns a promise , you can use the chaining method then()

{
    // async function f(){
    //     console.log('Async function');
    //     return Promise.resolve('resolve');
    // }
    // f().then(function(result) { 
    //     console.log(result)
    // }
    // )
}




// Await is used in waiting untile first promise is not run
// in only simple settimeout method we see that if any promise is in waiting session than it's next line it's next line is run before promises line
{
    // let promise = new Promise(function(resolve,reject){
    //     setTimeout(function (){
    //         resolve('promise resolved')},2000); 
    // });
    // // async function
    // async function asyncFunc(){
    //     // wait untill the promise resolve
    //     let result = await promise;
    //     console.log(result);
    //     console.log('hello');
    // }
    // asyncFunc();
}


// program can be useful if multiple promises in this program 
{
let promise = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve('promise resolved')},1000); 
});

let promise1 = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve('promise one resolved')},3000); 
});

let promise2 = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve('promise two resolved')},1000); 
});

let promise3 = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve('promise three resolved')},5000); 
});

async function anyscfun(){

    let result = await promise;
    console.log(result);

    let result1 = await promise1;
    console.log(result1);

    let result2 = await promise2;
    console.log(result2);

    let result4 = await promise3;
    console.log(result4);
}
anyscfun();
}


