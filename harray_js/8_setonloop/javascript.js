// Practice set on loops

const arr = {
    priyanshi :50,
    shubhm : 32,
    divya : 25,
    hitesh : 42,
    neha : 23
}


let total = 0

for (let i in arr){
    total += arr[i];
}

// const MAxmarks = Math.max(...Object.value(arr));
const maxMarks = Math.max(...Object.values(arr));
console.log(maxMarks);

let per = (total*100)/ 100;
let result = {
    total,
    per,
    
}
console.log(result);

// for(i = 0 ; i < Object.keys(arr).length ; i++) {
//     // console.log( "name is :" +  Object.keys(arr)[i] + "Marks is :" + arr[Object.keys(arr)[i]] );
// }

// for (let i in arr) {
//     console.log( "name is :" + i + "Marks is :" + arr[i] );
// }

// for (const [name, marks] of Object.entries(arr)) {
//     console.log("Name is: " + name + ", Marks is: " + marks);
// }

