// let string ="";

// let buttons = document.querySelectorAll('.button');

// let arr = Array.from(buttons);

// arr.forEach(x => {
//     // when someone click then arrow - element function work
//     x.addEventListener('click',event => {
//         if(event.target.innerHTML == '='){
//             { 
//             string = eval(string);
//             document.querySelector('input').value = "= " + string;
//             }
//         }
//         else if(event.target.innerHTML == 'AC'){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else if(event.target.innerHTML == 'C'){
//             string = string.substring(0,string.length - 1);
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(event.target);
//             string = string + event.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })



// let string = "";

// let buttons = document.querySelectorAll('.button');

// let arr = Array.from(buttons);

// arr.forEach(x => {
//     // when someone click then arrow - element function work
//     x.addEventListener('click', event => {
//         if (event.target.innerHTML === '=') {
//             if (string === "") {
//                 document.querySelector('input').value = "0";
//             } else {
//                 try {
//                     string = eval(string);
//                     document.querySelector('input').value = "= " + string;
//                 } catch(error){
//                     // error = eval(string);
//                     document.querySelector('input').value = "= " + string;
//                 }
//             }
//         } else if (event.target.innerHTML === 'AC') {
//             string = "";
//             document.querySelector('input').value = string;
//         } else if (event.target.innerHTML === 'C') {
//             string = string.substring(0, string.length - 1);
//             document.querySelector('input').value = string;
//         } else {
//             string = string + event.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })


let string = "";

let buttons = document.querySelectorAll('.button');

let arr = Array.from(buttons);

arr.forEach(x => {
    // when someone click then arrow - element function work
    x.addEventListener('click', event => {
        if (event.target.innerHTML === '=') {
            if (string === "") {
                document.querySelector('input').value = "0";
            } else {
                // Check if the last character of the expression is an operator
                // let lastChar = string[string.length - 1];
                let last = string[string.length-1] = "+"||"-"||"-"||"%";
                if (last) {
                    string = string.slice(0, -1); 
                }
                try {
                    let result = eval(string);
                    string = result.toString(); // Update string with the result
                    document.querySelector('input').value = "= " + result;
                } catch(error){
                    document.querySelector('input').value = "= " + string;
                }
            }
        } else if (event.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (event.target.innerHTML === 'C') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        } else {
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})


// var string = ""
// let buttons = document.querySelectorAll(".button");
// let arr = Array.from(buttons);
// arr.forEach(x => {
//     x.addEventListener('click',event =>{
//         if(event.target.innerHTML == "=")
//         {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(event.target.innerHTML == "AC"){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else if(event .target. innerHTML == "C"){
//             string = string.substring(0,string.length - 1);
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(event.target);
//             string = string + event.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })


























// let txt = "";
// const fruits = ["banana","orange","mango"];
// var any = 5;
// fruits.forEach(myfun);
// function myfun(index,value){
//     txt += index +" "+value +" " + +any +  "<br>"; 
// }
// document.getElementById("demo").innerHTML = txt;

// let txt = "";
// const arr = [10,20,30];


// function myfun(index , value){
//     txt += index + " " + value + "<br>";
// }



// arr.forEach(x => {
//     txt += x*x + "<br>";
// })

// for (const [x , index] of arr.entries()) {
//     txt += x + " " + index + "<br>"; 
// }

// for in gives an index
// for (const index  in arr){
//     txt += index + " " + arr[in{dex] + "<br>"; 
// }

// for of loop cann't give index of arr or it's it gives only value of arr to get this you can use entries method of arr
// txt = [];
// let  arr = [10 ,20 , 30 , 40];

// for(let i = 0 ; i < arr.length ; i++)
// {
//     txt.push(arr[i]+ 10)
    // txt += arr[i] + 10;
// }
// console.log(txt);

// for of loop make this easy way
// let txt =""
// let  arr = [10 ,20 , 30 ,40];

// for(let x of arr) {
//     return x + 10; //error
// }
// console.log(txt);

// for(let x of arr) {
//     txt += x + 10;
// }
// for(let x in arr){
//     txt += arr[x] + 10 + " ";
// }
// ----------------above three are loops where as map , foreach are methods to print array
// 'use strict'
// let x = arr.map((ele,index,wvalue,arr) =>{
//         arr = 10;
        // txt += ele + 10
//         return ele +" "+ `${index}` + " "+ wvalue +"  " + arr + "<br>";
// })
// document.getElementById("demo").innerHTML = x;
// console.log(x);

// arr.forEach((ele , index) => {
//  txt += ele + index;   
// })



// for of || foreach || for in methods can't return value
// map method can return value
// let txt =""
// let  arr = [10 ,20];
// let foreach =  arr.forEach(x => {
//     return txt += x; //Undefined -> We can't return as direct value
//     // txt = x * 2;    //[20,40]    -> Need to store in another variable  
//     // console.log(txt);
// })
// console.log(txt);



// let txt = "";
// const arr2 = [10, 20, 30];
// arr.forEach(x => {
//     return txt += x;
// });
// console.log(txt);




// let e = "";
// let foreach =  arr.forEach(x => {
    // return x * 2; 
    //  console.log(x * 2);
    // txt = x * 10;
// //     // console.log(x * 2);
// //     e.push(x*2)
// console.log(txt);
// })
// console.log(foreach);
// console.log(e);





// const arr = [10,20,30];
// arr.forEach(x => {
// //  txt += x ;
//  return txt += x;
// })
// console.log (txt);

// document.getElementById("demo").innerHTML = txt;

// console.log(e);

// let demomap = arr.map(x => {
//         return x * 2;
//         // txt = x;
//     })
// console.log(demomap);
// document.getElementById("demo").innerHTML =txt;
// console.log(map);