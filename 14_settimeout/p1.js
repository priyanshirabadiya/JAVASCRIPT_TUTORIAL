{
    // setTimeout(function , milliseconds);
    // setTimeout(hello , 5000)
}
// settimeout --> to run program only one time
// setInterval --> to run program Repeatedly.


// function hello(){
//     console.log("this is setinterval out");
// }
// function hello1(){
//     console.log("this is setimeout");
// }

// let id = setTimeout(hello , 1000);
// let x = setInterval(hello , 1000);
// clearInterval(x)
// console.log(setTimeout(hello1 , 1000));
// console.log(setInterval(hello , 1000));
// console.log("this line show first");
// console.log(id);

// set timeout method returns the intervak id.

// function greet()
// {
//     console.log("hello world");
// }
// let intervalid = setTimeout(greet , 1000);

// console.log('Id:' + intervalid);
// clearTimeout(intervalid);
// console.log("stop time out ");


// program to display time every 3 seconds

// function showtime(){
    // return new date and time 
    // let datetime = new Date();
    
    // return current local time
    // let time = datetime.toLocaleTimeString();
    // time = "hello pc";
    // console.log(time);

    // display time after 3 seconds
    // setTimeout(showtime,1000);
// }
// showtime();


// the settimeout() method calls the function only once after the time interval(here 1 second)

// javascript cleartimeout method
// As you have seen in the above example, the program executes a lock of code after the specified time interval,If you want to stop this function call , you can use the clearTimeout() method.

// Use set timeout method

    // program to set the settimeout() method
    // let count = 0;
    // function incresecount(){
    //     // incresing count by 1
    //     count += 1;
    //     console.log(count);
    // }
    // let id = setTimeout(incresecount, 1000);
    // let id = setInterval(incresecount, 1000);
    // clearTimeout(id);
    // console.log(id);
    // incresecount();

    // the settimeout() method is used to increse the value of count after 3 seconds, However ,the cleartimeout() method stops the function call of the settimeout() method. Hence , the count value is not incresed.
    
    // you generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.

    // You can also pass additonal arguments to the setTimeout() method.

    {
        // settimeout(function , millisconds , parameter1 , ... parameterN)
    }

    // When you pass additional parameters to the settimeout() , these parameter (parameter1 , aprameter2 , etc.) will passed to the specified function.

{
    // program to display name

    // function greet(name , lastname , ...c)
    // {
    //     console.log('hello' + ' ' + name + ' ' + lastname + ' ' + c);
    // }
    // // passing argument to settimeout

    // setTimeout(greet , 1000 , 'john' , 'Doe','hero','singer' , 'From newyourk');
}

// javascript call back function
// program with settimeout()

{
    // program show the dalay in execuction
    // function greet(){
    //     console.log('Hello World');
    // }
    // function sayname(name) {
    //     console.log('hii' + ' '+ name);
    // }

    // // calling a function
    // sayname('John');
    // setTimeout(greet , 1000);
}

// Java script promise and promise chaining

// In javascript , a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// fulfill
// rejected

// A promise starts in a pending state. That means the process is not complete. If the operation is sucessful, the process ends in a fulfilled state. And , if an error occurs , the process ends in a rejected state.

// Create promises

// To create promices object , we use the promise() constructor.
    // let promise = new Promise(function(resolve , reject){
        // do somthing
    // })


// the Promise() constructor takes a function as an argunment. The function also accepts two functions resolve() and reject()
// If the promise return successfully , the resolve() function is called. And,if an error occurs,the reject() function is called.


//Program with a promise

{
    // const count = false;

    // let countvalue = new Promise(function(resolve , reject){
    //     if(count){
    //         resolve("there is a resolve value");
    //     }
    //     else{
    //         reject("there is rejected value");
    //     }
    // });

    // // console.log(countvalue);

    // countvalue.then((result)=>console.log(result))
    // .catch((err)=>console.log(err))
}

// then method()

{
    // PromiseObject.then(onFulfilled , onRejected);
}

// chaining the promise with then()

{
    // return a promise
    // let count = false;
    // let countvalue = new Promise(function(resolve , reject){
    //     if(count){
    //     resolve("promise resolved");
    //     }
    //     else{
    //         reject("failed");
    //     }
    // });

    // // execute when promise is resolved successfully

    //     countvalue  
    //         .then((result)=>{
    //             console.log(result);
    //         })
    //         .then(()=>{
    //             console.log("You can add multiple functions");
    //         })
    //         .then(()=>{
    //             console.log("SkillQode");
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
}


// catch mathod using function
{
   // // return a promise
    // let count = false;
    // let countvalue = new Promise(function(resolve , reject){
    //         reject("failed");
    // });

    // // execute when promise is resolved successfully
    // countvalue  
    //     .then(function successalue(result){
    //         console.log(result);
    //     })
    //     .catch(
    //         function erroralue(result){
    //             console.log(result);
    //         }
    //     )
}

// javascript finally method

let countvalue = new Promise(function(resolve , reject){
    // resolve("program resolved")
    reject("rejected")
})
// add other blocks of code

countvalue
    .then(result => console.log(result))
    .catch((err) => console.log(err))
    .finally(
        function(){
            console.log('this code is executed');
        }
)
