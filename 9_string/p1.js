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
// It creates new string it will not changes its original string.

// The method takes 2 parameters: start position, and end position (end not included).
// let text = "Apple, Banana, Kiwi";
// let slicedpart = text.slice(2, 13); // Banana
// let length2 = text.slice(-2); // wi
// console.log(slicedpart);
// console.log(length2);

// const fruits = ["Banana", "Orange", "Apple", "Mango" ];
// fruits.slice(2,0);
// console.log(fruits);

// string slice
// let txt = "12345678910112";
// let txt2 = "javascript is a language";
// console.log(txt.slice(2,10));

// console.log(txt.slice(2,-10));
// The first argument (2) is the start index, meaning it starts at the 3rd character (indexing starts from 0).
// The second argument (-10) is the end index counted from the end, so:
// -10 means 10 characters from the end → index 14 - 10 = 4.
// So this slice is equivalent to: txt.slice(2, 4)

// console.log(txt.slice(-3, -2)); // 14 - 3 , 14 - 2  // 11 , 12
// // this series can't move -10 of 0  and can't go on minus side because JavaScript counts positions from zero.
// console.log(txt.slice(5));
// console.log(txt2.length);

// console.log(txt2.slice(-10)); // 24 - 10
// console.log(txt2.slice(-10,-5)); // 24 - 10 , 24 - 5 => 14 , 19

// substring
// A substring is just a part of a string. In JavaScript, you can get a part of a string using the .substring() method.
// It does not change the original string.
// It returns a new string.
// (-)count compulsory from 0
// In JavaScript, .substring(start, end) does NOT support negative numbers.
// If you use a negative number, JavaScript will treat it as zero(0).

// let text = "Apple,Banana,Kiwi";
// let data = text.substring(2, -3); // 2 to 0
// Now, .substring(2, 0) becomes .substring(0, 2) because:
// If start > end, .substring() swaps them internally
// So .substring(2, -3) → .substring(2, 0) → swapped → .substring(0, 2)

// let data = text.substring(-20, -5); // 0 to 0
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
// let replaceStr = text.replace("Microsoft", "Google");
// let replaceStr = text.replace(/Microsoft/g, "Google");
// let replaceStr = text.replaceAll("Microsoft", "Google");
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
// In JavaScript, padStart() and padEnd() are string methods used to add padding characters to the beginning or end of a string until it reaches a specified target length.
// let txt = "52";
// let txt2 = "12";
// let padstart = txt.padStart(8, "x");
// console.log(padstart);
// let start = txt.padStart(4, "x");
// let end = txt2.padEnd(4, "x");
// let arr = [start, end];
// console.log(arr);
// let str = arr.join("");
// console.log(str);
// console.log(start);
// console.log(end);

// let text = "5";
// let padstart = text.padStart(4,"0"); // 0005
// console.log(padstart);

// let txt = 'hello , world';
// console.log(txt.split("l"));
// console.log(txt.split(" "));

// let text = "HELLO WORLD l jufn ,kh";
// let data = text.split(",") // Split on commas
// let data1 = text.split(" ") // Split on spaces
// let data2 = text.split("L") // Split on pipe
// console.log(data);
// console.log(data1);
// console.log(data2);

// concat string
// let txt1 = "hello";
// let txt2 = "world";
// console.log(txt1.concat(" ",txt2));

// charAt
// let txt = "hello pc";
// console.log(txt.charAt(6));
