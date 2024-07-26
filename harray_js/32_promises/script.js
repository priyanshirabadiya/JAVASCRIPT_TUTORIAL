// let promise = new Promise (function(resolve , reject){
//     alert('hello')
//     resolve(56)
// }
// )
// console.log('hello 1');

// setTimeout(function(){
//     console.log('hello in 2 seconds');
// },2000)


// console.log('my name is priyanshi hello 3');
// console.log(promise);

// lec-55

// let p = new Promise((resolve,reject)=>{
//     console.log('promise is pending');

//     setTimeout(() => {
//         console.log('promise resolved after 2 seconds');
//         resolve(true)
//     }, 2000);

// })

// let p1 = new Promise((resolve,reject)=>{
//     console.log('promise is pending');

//     setTimeout(() => {
//         console.log('promise resolved after 2 seconds');
//         reject(new Error('I am error'));
//     }, 2000);

// })

// p.then((value)=>{
//     console.log(value);
// })
// p1.catch((error)=>{
//     console.log('its an error');
// })

// p1.then((value)=>{
//     console.log(value);
// },(error) => {
//     console.log(error);
// })



// ---------------------------------------------------------------------------------------

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Resolved after 2 sec');
//         reject('Its value')
//     }, 2000);
// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('promise 2');
//             resolve('promise 2')
//         },2000)
//     })
// }).then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log('cause an error' + error);
// })


const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        document.body.appendChild(script)
        script.onload = (script) => {
            resolve("Script has been loaded")
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})





