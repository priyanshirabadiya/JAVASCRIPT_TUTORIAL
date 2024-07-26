// let str = "hello world this is";

// function check(str){
//     return /\s/.test(str);
// }

// if(check(str)){
//     console.log('Containe white space');
// }
// else{
//     console.log('not containe');
// }
// console.log(str.trim().split(/\s+/));


// let str = "hello world this is";
// let rev = str.split('').reverse().join('');
// console.log(rev); 

// let str = "hello world this is hello";
// let x = 
// console.log(str.slice(1));
// console.log(str.charAt(str.length - 1));
// console.log(str.startsWith('tello'));
// console.log(str.replace(/hello/gi,'welcome'));

// Input object 
// let obj_to_str = {  
//     name: "GeeksForGeeks",  
//     city: "Noida",  
//     contact: 2488  
// };

//  obj_to_str = String(obj_to_str)

//  console.log(typeof(obj_to_str));


// let str = "greek for greeks is best"
// let flag = str.includes('greek');
// console.log(flag);



// let str = "greek greeks is best"
// let str2 = "greek greeks is best";

// let ans = str.localeCompare(str2);

// if(ans == -1)
// {
//     console.log('Strings are not same');
// }
// else if(ans == 0){
//     console.log('Strings are sane');
// }
// else{
//     console.log('Strings are not same');
// }


// encode decode string

// let str = "rfrrty"
// console.log(str.replace('hello','hi'));
// let rev = str.split('').reverse().join('');

// if(str == rev){
//     console.log('strings are palindrom');
// }
// else{
//     console.log('strings are not palindrome');
// }

// function counter(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		let count = 0;
// 		for (j = 0; j < str.length; j++) {
// 			if (str[i] == str[j] && i > j) {
// 				break;
// 			}
// 			if (str[i] == str[j]) {
// 				count++;
// 			}
// 		}
// 		if (count > 0) {
// 			console.log(`${str[i]} count ${count} times `);
// 		}
// 	}
// }

// let str = "geerks"
// counter(str);


// let str = "greeks";
// str = str.split('');
// str[0] = str[0].toUpperCase();
// str = str.join('');
// console.log(str);


// let str = "greeks";
// str = str.split('');
// str[0] = str[0].toUpperCase();
// str = str.join('');
// console.log(str);


// function vovels(str) {
// 	const vowels = ["a","e","i","o","u","A","E","I","O","U",];

// 	let count = 0;

// 	str.split('').forEach(element => {
// 		if(vowels.includes(element)){
// 			count++;
// 		}
// 	});
// 	return count;
// }

// str = "ABC"
// console.log(vovels(str));

// let str = "hello javasc    ript"
// let originaltext = str.split(' ').join('');
// console.log(originaltext);

// let str = 'greek for greek';
// console.log(str.match(/greek/g).length);


// let str = 'hello this ID shu'
// let str2 = 'Helo This ID shu'
// let ty = str.toUpperCase() === str2.toUpperCase();
// console.log(ty);


// let str = "dog";

// let fun = (str) => {
// 	let com = [];
// 	for(let i = 0 ; i < str.length ; i++ )
// 	{
// 		for(let j = i + 1 ; j < str.length + 1 ; j++)
// 		{
// 			com.push(str.slice(i,j));
// 		}
// 	}
// 	return com;
// }

// console.log(fun(str));


// function findUnique(str) {
// 	let uniq = "";
// 	for (let i = 0; i < str.length; i++) {
// 		if (uniq.includes(str[i]) === false) {
// 			uniq += str[i];
// 		}
// 	}
// 	return uniq;
// }
// console.log(findUnique("hello world this is world"));



// const str = "Geeks for Geeks";
// // Input from User
// const regex = prompt("Enter RegExp");
// // Conversion from string to RegExp
// const reg = new RegExp(regex, "g");

// // The match fn returns the array of strings 
// // That match to RegExp
// const result = str.match(reg);

// if (result) console.log(result);
// else console.log("Not Found");





// let str = "this is camelcase"
// let spli = str.split(' ');
// let upper;
// console.log(spli);

// for(let i = 0 ; i < spli.length ; i++)
// {
// 	upper = spli[0].toUpperCase();
// }
// console.log(upper);


// function titlecase(str){
// 	return str.toLowerCase().split(' ').map((word) =>{
// 		return (word.charAt(0).toUpperCase() + word.slice(1))
// 	}).join(' ');
// }
// let str = "this is camelcase";
// console.log(titlecase(str));

// let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";

// function gfg_run() {
//     str = str.split("").filter((char) => {
//         let charCode = char.charCodeAt(0);
//         return ((charCode >= 32 && charCode <= 65) || (charCode >= 97 && charCode < 127)) && char !== '?';
//     }).join('');

//     console.log(str);
// }

// gfg_run();



// let str = "-4.568";
// str = parseFloat(str);
// console.log(str);
// console.log(typeof str);



// function longest(str) {
// 	str = str.split(' ');
// 	console.log(str);
// 	let largest = "";
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i].length > largest.length) {
// 			largest = str[i];
// 		}
// 	}
// 	return largest;
// }
// console.log(longest("Hello guys this is logesrevernum geeksforgeeks where"));




// let str = "hello.this.is.hello"
// // let store = str.split(".").join(' ');
// let newStr = str.split(".").join(" ");

// console.log(newStr);



// function myfun(str) {
//     str = str.split(" ");
//     console.log(str);
//     let store = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > store.length) {
//             store = str[i];
//         }
//     }
//     return store;
// }

// let str = "Hello guys this is logesrevernum geeksforgeeks where";
// console.log(myfun(str));
// console.log(store);


// let str = "abc"
// let str2 = "cba";

// str = str.split('').sort().join('');
// str2 = str2.split('').sort().join('');

// if(str === str2)
// {
//     console.log('Strings are same');
// }
// else{
//     console.log('Strings are not same');
// }

// console.log(str);
// console.log(str2);



// let str = "jidui76w34kjk";

// function hasDigit(str) {
//     for (let char of str) {
//         if (char >= '0' && char <= '9') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasDigit(str)); // Output: true


// let str = "this is occurence"

// function occurence(str) {

//     for (let i = 0; i < str.length; i++) {
//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] == str[j] && i > j) {
//                 break;
//             }
//             if (str[i] == str[j]) {
//                  count++;
//             }
//         }
//         if(count > 0)
//         {
//             console.log(`${str[i]} and count ${count}`);
//         }
//     }
// }
// (occurence(str));

// function myfun(str){
//     str = str.split(' ');
//     let min = str[0]
//     let max = str[0]
//     for(let i = 0 ; i < str.length ; i++)
//     {
//         if(str[i].length > max.length)
//         {
//             max = str[i];
//         }
//         if(str[i].length < min.length )
//         {
//             min = str[i];
//         }
//     }
//     console.log(max);
//     console.log(min);
// }

// myfun('j this yut u dfhgui')

