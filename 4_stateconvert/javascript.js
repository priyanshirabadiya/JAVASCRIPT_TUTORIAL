/*  JavaScript Statements */

/* In JavaScript, there are three forms of the if...else statement. */

/* 

if statement
if...else statement
if...else if...else statement

*/

/* Flow Chart of if-else */

/*  JavaScript supports the following forms of if..else statement */

/*
   1. if statement
      
   2. if...else statement
   
   3. if...else if... statement.

   4. switch statement

*/

/* if statement */

{
    //  if (expression) {
    //      Statement(s) to be executed if expression is true
    //   }
 }
 
 /* if...else statement */
 
 
 {
    //  if (expression) {
    //      Statement(s) to be executed if expression is true
    //   } else {
    //      Statement(s) to be executed if expression is false
    //   }
 }
 

// let x = 5;
// if (x >= 10) {
//     console.log("you are mature");
// } else {
//     console.log("you are a child");
// }

 
 
 /* if...else if... statement */
 
 /* The if...else if... statement is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions. */
 
 
 {
    //  if (expression 1) {
    //      Statement(s) to be executed if expression 1 is true
    //   } else if (expression 2) {
    //      Statement(s) to be executed if expression 2 is true
    //   } else if (expression 3) {
    //      Statement(s) to be executed if expression 3 is true
    //   } else {
    //      Statement(s) to be executed if no expression is true
    //   }
 }
 
 
 /* There is nothing special about this code. It is just a series of if statements, where each if is a part of the else clause of the previous statement. Statement(s) are executed based on the true condition, if none of the conditions is true, then the else block is executed. */
 
 {
   //   var book ='history';
     
   //   if( book === 'history' ) {
   //      console.log("<b>History Book</b>");
   //   }
   //   else if( book == "maths" ) {
   //      console.log("<b>Maths Book</b>");
   //   }
   //   else if( book == "economics" ) {
   //      document.write("<b>Economics Book</b>");
   //   }
   //   else {
   //      document.write("<b>Unknown Book</b>");
   //   }
 }


 /* switch statement */
 
 // if input = 1, "y", "yes" output = Continue....
 // if input = 0, "n", "no" output = End...
 
    {
 
      //  let input = 0;
 
      //  if (input === "1"){
      //     document.write("Continues..")
      //  } else if (input === "y"){
      //     document.write("Continues..")
      //  }
      //  else if (input === "yes"){
      //     document.write("Continues..")
      //  }
      //  else if (input === 0){
      //     document.write("End..")
      //  }
      //  else if (input == "n"){
      //     document.write("End..")
      //  }
      //  else if (input === "no"){
      //     document.write("End..")
      //  }
      //  else{
      //     document.write("Wrong input")
      //  }
    }
 
 /*  === comparison */
 
 {
   //  let input = 0;
 
   //  switch(input){
   //     case 1:
   //        document.write("Continue...");
   //        break;
   //     case "y":
   //        document.write("Continue...");
   //        break;
   //     case "yes":
   //        document.write("Continue...");
   //        break;
   //     case 0:
   //        document.write("End...");
   //        break;
   //     case "n":
   //        document.write("End...");
   //        break;
   //     case "no":
   //        document.write("End...");
   //        break;
   //     default:
   //        document.write("Wrong input");
   //  }
 }


// ----------------------new-lecture---------------------------


// Converting Variable to Numbers

/*

Number() Returns a number converted from argument.
parseFloat() Parse its argument and returns a floating point number 
parseInt() Parse its argument and returns a whole number

*/

{
    // let n1 =  Number(true);
    // let n2 =  Number(false);
    // let n3 =  Number("10");	
    // let n4 =  Number("  10");	
    // console.log(n4);
    // let n5=  Number("10  ");
    // let n6 =  Number(" 10  ");
    // let n7 =  Number("10.33");	
    // console.log(n7);
    // console.log(typeof(n7));
    // let n8 =  Number("10,33");	
    // let n9 =  Number("10 33");	
    // let n10 =  Number("John");	
    // console.log(n1);
    // console.log(typeof(n1));
 }
 {
    // let pi1 =  parseInt("-10");		
    // console.log(pi1);
    // let pi2 =  parseInt("-10.33");
    // let pi3 =  parseInt("10");
    // let pi4 =  parseInt("10.33");
    // console.log(pi4);
   //  let pi5 =  parseInt("20 30");	
   //  let pi6 =  parseInt("10 years");	
   //  let pi7 =  parseInt("years 10");	
   //  console.log(pi7);
   //  console.log(typeof(pi7));
 }
 {
    // let pf1 =  parseFloat("10");		
    // let pf2 =  parseFloat("10.33");	   
    // let pf3 =  parseFloat("10 20 30");	
    // let pf4 =  parseFloat("10 years");	
    // let pf5 =  parseFloat("years 10");
    
    // console.log(pf1);
    // console.log(pf2);
    // console.log(pf3);
    // console.log(pf4);
    // console.log(pf5);
 }
     
 /* Number Object Method */
 /*
 
 Number.isInteger() Returns true if the argument is an integer
 Number.isSafeInteger() Returns true if the argument is a safe integer
 Number.parseFlaot() Convert a string to a number
 Number.parseInt() Convert a string to a whole number
 
 */
 
 {
    // let method1 = Number.isInteger(10);	
    // let method1 = Number.isInteger(10.5);	
      //  console.log(method1);
   //  let method2 = Number.isSafeInteger(10);	
    // let method3 = Number.isSafeInteger(5678901234567890);	
    // console.log(method3);
   //  let method4 = Number.parseFloat("10");		
   //  let method5 = Number.parseFloat("10.33");	
   //  let method6 = Number.parseFloat("10 20 30");	
   //  let method7 = Number.parseFloat("10 years");	
   //  let method8 = Number.parseFloat("years 10");	
    
   //  let method9 = Number.parseInt("-10");		
   //  let method10 = Number.parseInt("-10.33");		
   //  let method11 = Number.parseInt("10");			
    // let method12 = Number.parseInt("10.33");		
   //  let method13 = Number.parseInt("10 6");		
   //  let method14 = Number.parseInt("10 years");		
   //  let method15 = Number.parseInt("years 10");		
    
    // console.log(method);
    // console.log(method1);
   //  console.log(method7);
   //  console.log(method8);
   //  console.log(method2);
   //  console.log(method3);
   //  console.log(method11);
    // console.log(method12);
 }
 
 
 
 
 
 
 
