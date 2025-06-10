/* JavaScript Operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Bitwise Operators
6. Conditional (Ternary) Operator

*/

/* Arithmetic Operators */

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/

/* Arithmetic Operators */

{
  // let x  = 1;
  // let y = 5;
  // console.log(2**3*1**3);
}

/*  ASSIGEMENT OPERATOR  */

/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C 

+= (Add and Assignment) 

Ex: C += A is equivalent to C = C + A   

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A  

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A 

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/

{
  // var a = 3;
  // var b = 3;
  // var c = a+=b; // (b+=a) b=b+a a = a + b
  // var c = b-=a; // b = b-a
  // var c = b*=a; // b = b*a
  // var c = a%=b  // a = a%b
  // var c = a/=b  // a = a/b;
  // var c = a**=b; // a = a ** b ;
  // console.log(c);
  // console.log(a);
  // console.log(b);
}

{
  // a = 3
  // b = 3
  // a  = a + b
  // a = 6
  // b = b - a
  // b = 3 - 6
  // b = -3
  // c = b-=a
  // c = b
  // c = -3
  // a = 6
}

/* Comparison Operators */

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/
// === checks if the types are the same, so if both are numbers or both are strings, it will return true

// !== works like === and checks types too. If the types are the same, it returns false; otherwise, it returns true

{
  // var a = 50;
  // var b = "20";
  // var c = a == b;
  // var d = a != b ;
  // var c = a === b;
  // var c = a !== b; 
  //   var c = a > b;
  //   var c = a >= b;
  //   var c = a < b;
  // var c = a <= b ;
  // console.log(d);
  // console.log(c);
}

/* Logical Operators */

/*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
Ex: ! (A && B) is false.

*/

/*

(a && b) => false
(a || b) => true    
!(a && b) => true

*/

{
  // console.log(true && true && false);
  // console.log(true || false || false);
  // console.log(!(true || false || false));
}

/* Miscellaneous / Conditional (Ternary)  Operator

? tarnary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y
,

*/

/*
((a > b) ? 100 : 200) => 200
((a < b) ? 100 : 200) => 100
*/

// let aggriment = 5;
// let age = aggriment == 5 ? "Login" : "Logout";
// document.write(age);

// let rname = "john";
// let orgname = rname == "john" ? "Yes you can go" : "You can't go";
// console.log(orgname);


// let ny = 0;
// let pji = ny == 0 ? "hello" : "bye" ;
// document.write(pji);

// comma operator 
// The comma operator in JavaScript evaluates each of its operands from left to right and returns the value of the last operand

// let x = (6,6,7,5,10)
// console.log(x);

// typeof operator

// let x = 1/0;
// console.log(typeof(x));
// console.log(x);
