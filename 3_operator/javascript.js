/* JavaScript Operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Special Operators

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

// {
//     let x  = 1;
//     let y = 5;
//     console.log(x**y);
// }



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
    var a = 3;
    var b = 3;  
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
    // a =  3
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
// === ma type same hova joiae atle number hoi to banne number and string hoi to banne string

// !== ae === ni jem type check krshe jo type same hse to false or-else false aapse

{
    var a = 50;
    var b = "20";
    
    // var c = a == b;
    // var d = a != b ;
    // var c = a === b;
    // var c = a!==b;
    // var c = a > b;
    // var c = a >= b;
    // var c = a < b;
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


/* Miscellaneous Operator

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

// let ny = 0;
// let pji = ny == 0 ? "hello" : "bye" ;
// document.write(pji);
// let x = (6,6,7,5,10)
// console.log(x);

// typeof

// let x = 1/0;
// console.log(typeof(x));
// console.log(x);

