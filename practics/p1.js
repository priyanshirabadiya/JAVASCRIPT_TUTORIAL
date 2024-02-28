// array methods
// function myfun()
// {
//     var a = "12354";
//     var le = a.length;
//     return le;
// }
// console.log(myfun());



// function myfun()
// {
//     let arr = ["a" , "h" , "tr"];
//     arr.push("pushmethod");
//     console.log(arr);
// }
// myfun();

// function myfun(a)
// {
//     a.pop();
//     return a;
// }
// console.log(myfun([4,6,8]));

// let a = function(a)
// {
//     a.shift();
//     return a;
// }
// z = a([4,8,9,6])
// console.log(z);

// var add = (a) => a.unshift(5);
// console.log(add([6,4,6,7]));


// var x = function(a)
// {
//     a[0] = "kiwi";
//     return a;
// }
// z = x(["banana","mena","papad"]);
// console.log(z);

// (function(a,b)
// {
//     let x = a.concat(b);
//     console.log(x);
    // console.log(a,b);
    // console.log(b);
// })(["4sdc"],["myfy5"]);

// function myfun(a)
// {
//     a.slice(2);
//     return a;
// }
// console.log(myfun(["w","f","j","l","a"]));



// let x = function(a)
// {
    // console.log(a.slice(2,5,"manju","hina"));
    // slice method don't add any elemet 
    // z = a.slice(2,5);
    // console.log(z);
    // console.log(a);
    // console.log(a.slice(1,3));

    // a.splice(2,1,"main");
    // console.log(a.splice(2,1,"main"));
    // console.log(a.splice(1));
    // console.log(a);
    // console.log(a.splice(2,1,"main"));

    // console.log(a);
    // console.log(a.splice(2,2,"hj"));

    // console.log(a);
    // console.log(a.splice(1,3));
    // console.log(a.slice(2));
// }
// x(["hello","world","say","hi","lemmon","jini"]);

// var a = ["hello","main","hi","lemmon","jini"];
// console.log();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// Banana,Orange,Lemon,Kiwi,Apple,Mango
// console.log(fruits);



// let p = ["hello","main","hi","lemmon","jini"];
// console.log(p.slice(3));
// console.log(p.splice(3));



// let z = (a) => a.sort();
// console.log(z(["ji","apple","mahi","target"])); 


// let x = (a) => a.reverse();
// console.log(x(["hjvd","sds","pink"]));


// function myfun(a)
// {
//     return Math.min.apply(null,a);
// }
// console.log(myfun(["5","6","2","4","3"]));


// let a = (b) => Math.max.apply(null,b);
// console.log(a([2,4,7,68,3]));


// function myfun(a)
// {
    
// }

// function myfun(arr){
//     return arr.sort();
// }
// z = myfun([4,6,5,7,3]);
// console.log(z);





// const arr = [1,4,1,5,8];
// const map1 = arr.map((x) => x > 2);
// console.log(map1);


// function myfun(val)
// {
//    return val > 1;
// }
// z = [1,4,3,5,7].filter(myfun);
// console.log(z);


// let a = (x) => x > 1;
// let z = [1,3,5,3,7,0].filter(a);
// console.log(z);

// Input array
// let arr = [175, 50];
// function subofArray(total, num) {
// 	return total - num;
// }
// function myGeeks() {
// 	console.log(arr.reduce(subofArray));
// }
// myGeeks()



let arr = ["string","main","banana","jain"]
z = arr.toString();
console.log(arr);
console.log(z);
console.log(typeof(arr));
console.log(typeof(z));