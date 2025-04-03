// What is javascript

/*
-> JavaScript is a dynamic computer programming language.
-> It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.
-> JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.Complementary to and integrated with HTML.Open and cross-platform
*/

/* Method to run javascript */
/*Using innerHTML
Using document.write()
Using window.alert()
Using console.log()
Using dom()*/

// taking input methods
// Using window.prompt()
// Using appendChild()

/****   JavaScript Values   ****/
//  -> The JavaScript syntax defines two types of values

/*
    -> Fixed values are called Literals.   
    -> Variable values are called Variables.  
*/

/**** Using console in javascript ****/

/**** var variable type / box variable name / = assignement / 60 assiged values ****/

// javascript language case-sensitive

/**************** variable using var() in javascript *************************/

{
  // const number1 = 20;
  // const number1 = 20;
  // var number2 = 20;
  // var Total = number1 + number2;
  // console.log(number1)
  // var number2 = 40;
  // console.log(Total)
}

// in this var is globle variable and const and let are block scope varables it means if we console that let variable in out of scope then it give an error

{
  // let a = 10;
  // let b = 10;
  // var c = a + b;
}
// console.log(c);
// console.log(a); //error
// console.log(b); //error

/*******New Html Element Add In Though Javascript *********/

{
  // var newelement = document.createElement("h1");
  // newelement.textContent="hello world";
  // document.body.appendChild(newelement);
  // var newelement=document.createElement("marquee" , Option);
  // newelement.textContent="hello world";
  // document.body.appendChild(newelement);
  // var newelement=document.createElement("pre");
  // newelement.textContent="how are you!";
  // document.body.appendChild(newelement);
  // var newelement = document.createElement("pre");
  // newelement.textContent = "helloworld";
  // document.body.append(newelement);
}

// js comments

// single-line comments

/* multi-line 
comments */

// Template Literals

{
  // var _nameone = 40 + '20' - '5';
  // var _nametwo= '5';
  // console.log(_nameone);
  // console.log(typeof(_nameone));
  // var one = 20
  // var two = 40
  // var three = "one 'two'"
  // console.log(three);
  // var four  = `'one' "two"'`
  // console.log(four);
  // var five = `''one''` + `"two"`
  // console.log(five);
  // var five = `${one} + "two"`
  // console.log(five);
  // var six = `${one} + ${two}`
  // console.log(six);
}

// var a = 10;
// console.log(a);

// Rules for Naming JavaScript Variables

{
  //valid
  // let a = 'hello';
  // let _a = 'hello';
  // let $a = 'hello';
  // console.log($a);
  // console.log(_a);
  // let $main_a = 10;
}
{
  //invalid
  // var 1a = 'hello'; // this gives an error
  // console.log(a1);
  // let  1main_a = 10;  // this gives an error
  // console.log(1main_a);
}

// JavaScript is case-sensitive. So y and Y are different variables

{
  // let y = "hi";
  // let Y = 5;
  // console.log(y);
  // console.log(Y);
}

// Keywords cannot be used as variable names.

{
  //invalid
  // let new = 5; // Error! new is a keyword.
}

/*  

Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign. After first letter we can use digits (0 to 9), for example value1. JavaScript variables are case sensitive, for example x and X are different variables. 

*/

// var num = 1 + "2" + 3 - 1;
// console.log(num);
// console.log(typeof(num));

// function example() {
//   if (true) {
//     var x = 10;
//     let y = 20;
//     var x = 20;
//     y = 56;
//     console.log(x); 
//     console.log(y); 
//   }
//   console.log(x); 
//   // console.log(y); // Error: y is not defined (let is block-scoped)
// }

// example();

// console.log("out of function" + x);


console.log(5 + "5");
console.log(true + 1);


