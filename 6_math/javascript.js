/*

Maths Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

Example:-
Math.PI;	
The Math object is static.
All methods and properties can be used without creating a Math object first.
Math Properties(Constants):-
The syntax for any Math property is : Math.property
JavaScript provides 8 mathematical constants that can be accessed as Math properties. 

*/

/*

Example:-

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.LOG2     // returns base 2 logarithm of E
Math.LOG10    // returns base 10 logarithm of E
Math Methods
The syntax for Math any methods is : Math.method(number)

*/
// Math.E

// let math1 = Math.E
// console.log(math1);

//Math.PI

// let math2 = Math.PI
// console.log(math2);

//Math.round():-

//Math.round(x) returns the nearest integer.
//Example:-

// Even though -25 is numerically closer to -26.6 than -27, that's a misunderstanding of rounding direction.
// Actually:
// Distance from -26.6 to -27 is 0.4
// Distance from -26.6 to -25 is 1.6

// let math3 = Math.round(-26.6)
// let math4 = Math.round(22.8)
// console.log(math3);
// console.log(math4);

//Math.ceil():-

//Math.ceil(x) returns the value of x rounded up to its nearest integer.
//Example:-

// let math5 = Math.ceil(54.1)
// let math6 = Math.ceil(-54.8)
// console.log(math5);
// console.log(math6);

//Math.floor():-

//Math.floor(x) returns the value of x rounded down to its nearest integer.
//Example:-

// let math7 = Math.floor(-89.2)
// let math8  = Math.floor(89.6)
// console.log(math7);
// console.log(math8);

//Math.trunc():-

//Math.trunc(x) returns the integer part of value(negative and positive as per value).
//Example:-

// let math9  = Math.trunc(-10.99999)
// console.log(math9);

//Math.sign():-
// Math.sign(x) returns the sign of a number:
// -1 if the number is negative
// 1 if the number is positive
// 0 if the number is +0
// -0 if the number is -0
// NaN if the value is not a number

//Example:-

// let math10 = Math.sign(-0)
// let math11 = Math.sign(-10)
// let math12 = Math.sign(0)
// let math13 = Math.sign(5)
// let math14 = Math.sign("Hello")
// console.log(math10);
// console.log(math11);
// console.log(math12);
// console.log(math13);
// console.log(math14);

//Math.pow():-

//Math.pow(x, y) returns the value of x to the power of y.
//Example:-

// let math13  = Math.pow(2 , 3);
// console.log(math13);

//Math.sqrt():-

//Math.sqrt(x) returns the square root of x.
//Example:-

// let math14  = Math.sqrt(121)
// console.log(math14);

// let number  = -(0-0)-0
// = -0-0
// =-0
// console.log(number);

//Math.abs():-

//Math.abs(x) returns the absolute (positive) value of x.
//Example:-

// let math15 = Math.abs(-15)
// console.log(math15);

//Math.min() and Math.max():-

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
//Example:-

// let math16  = Math.min(-15  , -155 , 20  , 50  , 230)
// let math17  = Math.max(-15  , -155 , 20  , 50  , 230)
// console.log(math16);
// console.log(math17);

//Math.random():-

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

//Example:-

// const math18 = Math.random()*1000 // in multiply by 1000 mean it will generate number under 1000
// console.log(math18);

// console.log(parseInt(Math.random()*100));

//Math.sin():-

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.

//Example:-

// let degrees = 90;
// let radians = degrees * Math.PI / 180;
// let sine = Math.sin(radians);
// console.log(sine);

// Math.cos():-

//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.

//Example:-

// Convert 60 degrees to radians
// let degrees = 60;
// let radians = degrees * Math.PI / 180;

// let cosine = Math.cos(radians);
// console.log(cosine); // Output: 0.5

//Math.log():-

//Math.log(x) returns the natural logarithm of x.
//The natural logarithm returns the time needed to reach a certain level of growth.
//Example:-

// let x = 10;
// let naturalLog = Math.log(x);
// console.log(naturalLog); // Output: ~2.302 (ln(10))

//Math.log2():-

//Math.log2(x) returns the base 2 logarithm of x(value).
//Example:-

// let x = 8;
// let logBase2 = Math.log2(x);
// console.log(logBase2); // Output: 3 (because 2^3 = 8)

//Math.log10():-

//Math.log10(x) returns the base 10 logarithm of x.
//Example:-

// let x = 10000;
// let logBase10 = Math.log10(x);
// console.log(logBase10); // Output: 4 (because 10^4 = 10000)

// guess the outputs

// console.log(Math.round(-4.6));
// console.log(Math.ceil(-4.6));
// console.log(Math.floor(-4.6));

