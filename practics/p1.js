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

function myfun(a)
{
    a.splice(2,4);
    return a;
}
console.log(myfun(["w","f","j","w","a"]));
