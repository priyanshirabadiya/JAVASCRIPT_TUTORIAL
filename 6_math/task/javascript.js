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



