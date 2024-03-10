// var x = 10;
// if ( 8 > 7 > 0)
// {
//     x += 1;
// }
// console.log(x);



// ------------------------------2-----------------------------------
// var bar = function foo() {
// }
// console.log(bar === foo);

// console.log( 1 + 2 + '1');
// console.log( '6' + 2 + 4 - 2 );


// it compare first character by character 
// 1.--> 5 > 1 yes that's why it is true 
// 2.--> 0 > 1 no that's why it is false
// console.log("5" > "19");
// console.log("09" > "19");



// ------------------------------3-----------------------------------
// type of boolen (primitive type) is boolen but type of new boolen is object -->(new boolean is a constructor) of boolen 



// const f = new Boolean(5)
// if(f)
// {
//     console.log(1);
// }
// else
// {
//     console.log(2);
// }
// console.log(typeof(f));




// ------------------------------4-----------------------------------

// var x = 100;
// var y = x++;
// var z = y++;

// for(var i = 1 ; i <= 5 ; i++)
// {
// var n = (x == y) ? z++ : ++z;
// console.log(n);
// }





// ------------------------------gfg tasks-----------------------------------

// ------------------------------pow of number three mothods-----------------------------------
// let x = (x,y) => Math.pow(x,y);
// let x = (x,y) => x**y;
// function my_fun(x,y){
//     let i , n = 1;
//     for(i = 0 ; i < y ; i++)
//     {
//         n = n * x;
//     }
//     console.log(n);
// }
// console.log(x(2,3));
// my_fun(2,3);

// ------------------------------sqrt root of number three mothods-----------------------------------

// console.log(Math.sqrt(125));
// console.log(Math.pow(25,1/2));
// one is binary search you can see this in gfg web


// ------------------------------JavaScript Program to Solve Quadratic Equation------------------------------


// formula = -b -+ sqtr(b*b - 4ac)
//            -----------------
//                  2a

// function sqrt_get(a,b,c){
//     return  b * b - 4 * a * c;
// }
// function my_fun(a,b,c)
// {
//     let ecvation , ecvation2 ;
//     let d = sqrt_get(a,b,c);

//     if(d > 0){
//         ecvation = (-b + Math.sqrt(d)) / (2 * a) + " and " + (-b - Math.sqrt(d)) / (2 * a);
//         // return ecvation;
//         console.log(ecvation);
//     }
//     else if(d == 0)
//     {
//         let ecvation1 = -b / (2 * a) + "and" + -b /(2 * a);
//         console.log(ecvation);
//         // return ecvation1;

//     }
//     else
//     {
//         console.log("nan");
//         // return [];
//         // console.log("NAN");
//     }
// }
// my_fun(1 , -3 , 2);
// sqrt_get(1 , -3 , 2);


// Program to Convert Km/hr to miles/hr and vice versa

// function km_miles(km){
//     return km * 0.62;
// }
// function miles_km(miles)
// {
//     return miles * 1.61;
// }
// function convert(km , miles){
//     console.log("Km to miles is: " + Math.floor(km_miles(km)));
//     // console.log("Miles to km is: " + (miles_km(parseFloat(miles))));
//     console.log("Miles to km is: " + parseFloat(miles_km(miles)).toFixed(2));
// }
// convert(150,100);


// fabonacci number

// function fac(number){

//     let a = 1 ,  b = 1 , c = 0 ;
//     console.log("FIBONACCI number is : " + a);
//     console.log("FIBONACCI number is : " + b);
//     for(let i = 0 ; i < number - 2; i++)
//     {
        
//         c = a + b;
//         a = b;
//         b = c;

//         console.log("FIBONACCI number is : " + c);
//     }
// }
// fac(5);


// factorial number
// let number = 5;
// function factorial(number)
// {
//     let fac = 1;

//     if(number === 0)
//         return 1;
//     for(let i = 2 ; i <= number ; i++)
//     {
//         fac = fac * i;
//     }
//     return fac;
// }
// console.log(factorial(number));

// function fac(n){
//     let find = 1 , i;

//     for(i = 0 ; i < n ; i++)
//     {
//         let find = 1;
//         let x = find => find * i;
//         return x;
//         // console.log(x);
//     }
// }
// console.log(fac(5));



// let x = (n) =>
// {
//     let fac = 1;
//     for(let i = 1 ; i <= n ; i++)
//     {
//         fac = fac * i;
//     }
//     return fac;
// }

// console.log(x(5));


// let n = 5; 
// function factorial2(n) { 
// 	let ans = 1; 
	
// 	if(n === 0)
// 		return 1;
// 	for (let i = 2; i <= n; i++) 
// 		ans = ans * i; 
// 	return ans; 
// }

// console.log(factorial2(n));





// JavaScript Program to Find GCD or HCF of Two Numbers  ->common form two numbers

// let fun = (x , y) =>
// {
//     let smaller = Math.min(x,y);
//     let hcf = 1;
//     for(let i = 1 ; i <=  smaller; i++)
//     {
//         if(x % i == 0 && y % i == 0)
//         {
//             hcf = i;
//         }
//     }
//     return hcf;
// } 

// console.log(fun(20,12));


// Javascript program to find LCM of two numbers 

// Function to return LCM of two numbers 
// function LCM(a, b){ 
// 	let greater = Math.max(a, b); 
// 	let smallest = Math.min(a, b); 
// 	for(let i = greater; i <= a*b; i+=greater){ 
// 		if(i % smallest == 0){ 
// 			return i; 
// 		} 
// 	} 
// } 

// // Driver program to test above function 
// let a = 10; 
// let b = 5; 
// console.log("LCM of", a, "and", b, "is", LCM(a, b));




// find factors of number
// function my_fun(n){
//     for(let i = 1 ; i < n ; i++)
//     {
//         if(n % i == 0)
//         {
//             console.log(i);
//         }
//     }
// }
// my_fun(12);


// function rec(n){
//     if(n <= 1){
//         return n;
//     }
//     return rec(n - 1) + rec(n - 2);
// }
// var n = 5;
// for(let i = 1 ; i <= n ; i++)
// {
//     console.log(rec(i));
// }

// The condition n == 0 && n == 1 will never be true for any value of n. This is because n cannot be both 0 and 1 at the same time. This is why the && operator is not suitable for this comparison.  //give error if you add
// function rec(n){
//     if(n == 0 || n == 1){
//         return n;
//     }
//     else{
//         return  n * rec(n - 1);
//     }
// }
// // let n = 6;
// console.log(rec(5));



let x = y =>
{
    return ~y + 1;
}
console.log(x(-5.6));