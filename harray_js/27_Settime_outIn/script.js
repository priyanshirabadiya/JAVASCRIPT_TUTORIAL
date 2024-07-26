
// alert("hello")

// let a = prompt("enter a:");

// if(a == 'a'){
// let a = setTimeout(function() {
//     alert('this is settimeout');
// },2000);
// }
// else{
// clearTimeout(a)
// }


// const sum = (a,b,c) =>{
//     alert("hi I am running " + (a + b + c) );
// }
// setInterval(sum , 1000 , 1 , 2 , 3)


setInterval(function myfun(a ,b , c) {
    alert("hello"+ (a+b+c));
},2000,1,2,3);