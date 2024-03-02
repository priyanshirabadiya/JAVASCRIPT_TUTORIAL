// object distructuring

// let person = {
//     firstname :"priyashi",
//     lastname :"rabadiya",
//     email : "priyanshi@.gmail.com"
// }

// let {lastname} = person;
// console.log(lastname);
// console.log(person);





// let text = ""; 
// for(let i = 0 ; i < 5 ; i++)
// {
//     text = text + i + " ";
//     console.log(text);
// }


// p is a variable of arr in this 
// p index is key and it's value is it's index array 
// let arr = [11 , 22 , 33 , 44 , 55 , 66];
// for (let p in arr)
// {
    // console.log(p + "=>" + arr[p]);
    // console.log(arr);
// }


// let person = {
//     firstname :"priyashi",
//     lastname :"rabadiya",
//     email : "priyanshi@.gmail.com"
// }
// for(let k in person)
// {
//     console.log(person[k]);
// }


// for of loop

// let arr = ['hello' , 'worls' , 'i' , 'say' , 'this' , 'at' , 'last'];

// for(let ele of arr)
// {
//     console.log(ele + "=>" + ele[arr]);
// }


// const nums = ['hello' , 'worls' , 'i' , 'say' , 'this' , 'at' , 'last'];

// for (const [index, num] of nums.entries()) {
//   console.log(`Index: ${index}, Value: ${num}`);
// }

// let person = {
//     fname : "priyanshi" , 
//     lname : "rabadiya" ,
//     age : 45 
// }

const nums = ['hello' , 'worls' , 'i' , 'say' , 'this' , 'at' , 'last'];

// for(let x in nums){
//     console.log(nums[x]);
// }
let p = "#";
for(let key of nums)
{
    key = p + "   " + nums;
    console.log(key);
}


// let language = "JavaScript";
// let text = "";

// for (let x of language) {
//     text += x + " "; 
// } 
// console.log(text);
// J a v a S c r i p t


