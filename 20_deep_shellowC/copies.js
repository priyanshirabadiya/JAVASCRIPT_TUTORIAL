// In this code problem is that it is being copy when we assign obj to another variable then 

let obj = {
    name : "peter"
};
let user = obj;
obj.name = "priyanshi";

console.warn(obj);




