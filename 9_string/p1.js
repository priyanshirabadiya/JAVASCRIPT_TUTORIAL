// let answer = "It's Beautiful…";
// let answer = "He is called 'Johnny' ";
// let answer = 'He is called "Johnny" ';
// let answer = `He 'is' called "Johnny" `;
// let answer = 'He is called "Johnny" ';

// console.log(answer);


// let txt = 'hello world';
// let len = txt.length;
// console.log(len);

// slice
// **slice()** extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
// let text = "Apple, Banana, Kiwi";
// let length = text.slice(2, 13); // Banana
// let length2 = text.slice(-2); // Banana
// console.log(length);
// console.log(length2);

// const fruits = ["Banana", "Orange", "Apple", "Mango" ];

// // At position 2, add "Lemon" and "Kiwi":
// let ee = fruits.slice(1,4)
// console.log(ee);



// string slice
// let txt = "12345678910112";
// let txt2 = "javascript is a language";
// console.log(txt.slice(2,10));
// console.log(txt.slice(2,-10));
// console.log(txt.slice(-3,-2)); // this series can't move -10 of 0  and can't go on minus side because JavaScript counts positions from zero.
// console.log(txt.slice(5));
// console.log(txt2.slice(-10));
// console.log(txt2.slice(-10,-5));



// substring
// (-)count compulsory from 0
// let text = "Apple,Banana,Kiwi";
// let data = text.substring(20, -5); // 20 to 0 //aposite position ma lai javu
// // let data = text.substring(-20, -5); // 0 to 0
// console.log(data);



// substr 
/*
    The difference is that the second parameter specifies the length of the extracted part.
    If you omit the second parameter, substr() will slice out the rest of the string.
    If the first parameter is negative, the position is counted from the end of the string.
*/
// let text = "Apple, Banana, Kiwi";
// let data = text.substr(-7);
// console.log(text.substr(7 ,6));
// console.log(data);


// string replace
// let text = "Please visit Microsoft! And Microsoft is also the best one.";
// let replaceStr = text.replace(/Microsoft/g, "SkillQode");
// // let replaceStr = text.replaceAll("Microsoft", "SkillQode");
// console.log(replaceStr);
// console.log(text);



// upper lower

// let txt = 'hello WORLD';
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());


// let txt = '     hello world     ';
// console.log(txt.trim());        //remove space from start - end
// console.log(txt.trimStart());   //remove space from start
// console.log(txt.trimEnd());     //remove space from end


// pad start
// let txt = "52";
// let txt2 ="12";
// let start = txt.padStart(4, "x");
// let end = txt2.padEnd(4, "x");
// let arr = [start,end];
// console.log(arr.join(""));


// console.log(start);
// console.log(end);

// console.log();
// let text = "5";
// let padded = text.padStart(4,"0"); // 0005
// console.log(padded);


// let txt = 'hello , world';
// console.log(txt.split("L"));
// console.log(txt.split(" "));







// concat string
// let txt1 = "hello";
// let txt2 = "world";
// console.log(txt1.concat(" ",txt2));


// charAt

// let txt = "hello pc";
// console.log(char);



// let text = "HELLO WORLD l jufn ,kh";
// let data = text.split(",") // Split on commas
// let data1 = text.split(" ") // Split on spaces
// let data2 = text.split("L") // Split on pipe
// console.log(data);
// console.log(data1);
// console.log(data2);